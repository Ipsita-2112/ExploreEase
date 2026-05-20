function showNotification(message, type = 'success') {
    const toast = document.getElementById('toast');
    clearTimeout(toast._timer);
    toast.className = 'toast';
    toast.textContent = message;
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            toast.classList.add(type, 'show');
        });
    });
    toast._timer = setTimeout(() => { toast.classList.remove('show'); }, 3000);
}


function updateProgress() {
    const all = document.querySelectorAll('.item-checkbox input[type="checkbox"]');
    const checked = document.querySelectorAll('.item-checkbox input[type="checkbox"]:checked');
    const total = all.length;
    const done = checked.length;
    const pct = total === 0 ? 0 : Math.round((done / total) * 100);

    document.getElementById('progressFill').style.width = pct + '%';
    document.getElementById('progressPercent').textContent = pct + '%';
    document.getElementById('totalItems').textContent = total;
    document.getElementById('completedItems').textContent = done;
    document.getElementById('remainingItems').textContent = total - done;

    if (total > 0 && done === total) {
        showNotification('🎉 You\'ve completed your checklist! Happy travels!', 'success');
    }
}


function saveState() {
    const state = { deleted: [], custom: [], checked: [] };



    document.querySelectorAll('.item-checkbox').forEach(label => {
        const text = label.querySelector('span').textContent;
        const isChecked = label.querySelector('input').checked;
        const isCustom = label.closest('.custom-items-category') !== null;
        if (isCustom) {
            state.custom.push({ text, checked: isChecked });
        } else if (isChecked) {
            state.checked.push(text);
        }
    });


    state.deleted = getDeletedPresets();
    localStorage.setItem('exploreease_checklist', JSON.stringify(state));
}


const PRESET_ITEMS = [];
document.querySelectorAll('.preset-categories .item-checkbox span').forEach(s => PRESET_ITEMS.push(s.textContent));

function getDeletedPresets() {
    const current = [];
    document.querySelectorAll('.preset-categories:not(.custom-items-category) .item-checkbox span').forEach(s => current.push(s.textContent));
    return PRESET_ITEMS.filter(t => !current.includes(t));
}

function loadState() {
    const raw = localStorage.getItem('exploreease_checklist');
    if (!raw) return;
    try {
        const state = JSON.parse(raw);


        if (state.deleted && state.deleted.length) {
            document.querySelectorAll('.preset-categories .item-checkbox').forEach(label => {
                const text = label.querySelector('span').textContent;
                if (state.deleted.includes(text)) label.remove();
            });
        }


        if (state.checked && state.checked.length) {
            document.querySelectorAll('.preset-categories .item-checkbox').forEach(label => {
                const text = label.querySelector('span').textContent;
                if (state.checked.includes(text)) {
                    label.querySelector('input').checked = true;
                }
            });
        }


        if (state.custom && state.custom.length) {
            state.custom.forEach(item => createCustomItem(item.text, item.checked, false));
        }
    } catch (e) { console.error(e); }
}


function bindCategoryBtn(btn) {
    btn.addEventListener('click', function() {
        const items = this.nextElementSibling;
        const isOpen = items.classList.contains('open');
        items.classList.toggle('open', !isOpen);
        this.classList.toggle('open', !isOpen);
    });
}


function bindDeleteBtn(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const label = this.closest('.item-checkbox');
        const text = label.querySelector('span').textContent;
        label.style.opacity = '0';
        label.style.transform = 'translateX(20px)';
        setTimeout(() => {
            label.remove();
            updateProgress();
            saveState();
            showNotification(text + ' removed', 'success');
        }, 280);
    });
}


function createCustomItem(text, checked = false, save = true) {

    let customCat = document.querySelector('.custom-items-category');
    if (!customCat) {
        customCat = document.createElement('div');
        customCat.className = 'category custom-items-category';
        customCat.innerHTML = `
            <button class="category-btn open">✨ Custom Items</button>
            <div class="category-items open" id="customItems"></div>
        `;
        document.getElementById('presetCategories').insertBefore(customCat, document.getElementById('presetCategories').firstChild);
        bindCategoryBtn(customCat.querySelector('.category-btn'));
    }

    const customDiv = customCat.querySelector('.category-items');
    const label = document.createElement('label');
    label.className = 'item-checkbox';
    label.innerHTML = `
        <input type="checkbox" ${checked ? 'checked' : ''}>
        <span>${text}</span>
        <button class="delete-btn" type="button">×</button>
    `;
    label.querySelector('input').addEventListener('change', () => {
        updateProgress();
        saveState();
    });
    bindDeleteBtn(label.querySelector('.delete-btn'));
    customDiv.appendChild(label);

    if (save) {
        updateProgress();
        saveState();
    }
}


document.getElementById('addItemBtn').addEventListener('click', addCustomItemFromInput);
document.getElementById('newItemInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addCustomItemFromInput();
});

function addCustomItemFromInput() {
    const input = document.getElementById('newItemInput');
    const text = input.value.trim();

    if (!text) { showNotification('Please enter an item', 'error'); return; }
    if (text.length < 2) { showNotification('Item must be at least 2 characters', 'error'); return; }


    const existing = document.querySelectorAll('.item-checkbox span');
    for (const s of existing) {
        if (s.textContent.toLowerCase() === text.toLowerCase()) {
            showNotification('This item already exists', 'error');
            return;
        }
    }

    createCustomItem(text);
    input.value = '';
    showNotification(text + ' added to checklist!', 'success');
}


document.getElementById('resetBtn').addEventListener('click', function() {

    document.querySelectorAll('.item-checkbox input[type="checkbox"]').forEach(cb => cb.checked = false);

    const customCat = document.querySelector('.custom-items-category');
    if (customCat) customCat.remove();

    localStorage.removeItem('exploreease_checklist');
    updateProgress();
    showNotification('Checklist has been reset!', 'success');
});


document.getElementById('downloadBtn').addEventListener('click', function() {
    let txt = 'ExploreEase Trip Checklist\n========================\n';
    txt += 'Generated: ' + new Date().toLocaleString() + '\n\n';
    document.querySelectorAll('.category').forEach(cat => {
        const title = cat.querySelector('.category-btn').textContent.trim();
        txt += title + '\n' + '-'.repeat(title.length) + '\n';
        cat.querySelectorAll('.item-checkbox').forEach(item => {
            const done = item.querySelector('input').checked ? '[✓]' : '[ ]';
            txt += done + ' ' + item.querySelector('span').textContent + '\n';
        });
        txt += '\n';
    });
    const all = document.querySelectorAll('.item-checkbox input');
    const done = document.querySelectorAll('.item-checkbox input:checked');
    txt += `\nSummary: ${done.length}/${all.length} items completed\n`;

    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([txt], { type: 'text/plain' }));
    a.download = 'trip-checklist-' + new Date().toISOString().slice(0, 10) + '.txt';
    a.click();
    showNotification('Checklist downloaded!', 'success');
});



document.querySelectorAll('.preset-categories .category-btn').forEach(bindCategoryBtn);


document.querySelectorAll('.preset-categories .delete-btn').forEach(bindDeleteBtn);


document.querySelectorAll('.preset-categories .item-checkbox input').forEach(cb => {
    cb.addEventListener('change', () => {
        updateProgress();
        saveState();
    });
});


loadState();
updateProgress();