import { api } from './api.js';

const categoryList = document.getElementById('category-list');
const ingredientList = document.getElementById('ingredient-list');
const menuList = document.getElementById('menu-list');
const menuTitle = document.getElementById('menu-title');
const addCategoryBtn = document.getElementById('add-category-btn');
const addIngredientBtn = document.getElementById('add-ingredient-btn');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalForm = document.getElementById('modal-form');
const closeBtn = document.querySelector('.close-btn');

let currentCategoryId = null;
let currentCategoryName = '';

async function init() {
    loadCategories();
    loadIngredients();
    setupEventListeners();
}

async function loadCategories() {
    const categories = await api.getCategories();
    categoryList.innerHTML = '';
    
    const categoryMap = {};
    categories.forEach(cat => categoryMap[cat.id] = { ...cat, children: [] });
    
    const rootCategories = [];
    categories.forEach(cat => {
        if (cat.parent_id && categoryMap[cat.parent_id]) {
            categoryMap[cat.parent_id].children.push(categoryMap[cat.id]);
        } else {
            rootCategories.push(categoryMap[cat.id]);
        }
    });

    rootCategories.forEach(category => {
        const categoryGroup = document.createElement('div');
        categoryGroup.className = 'category-group';
        
        const header = document.createElement('div');
        header.className = 'category-header card';
        header.innerHTML = `
        <h3>${category.name}</h3>
        <p>${category.description || ''}</p>
        <div class="actions">
            <button class="btn btn-primary view-items-btn" data-id="${category.id}" data-name="${category.name}"><i class="fas fa-eye"></i> View</button>
            <button class="btn btn-primary add-item-btn" data-id="${category.id}" data-name="${category.name}"><i class="fas fa-plus"></i> Item</button>
            <button class="btn btn-secondary edit-category-btn" data-id="${category.id}" data-name="${category.name}" data-desc="${category.description || ''}" data-parent="${category.parent_id || ''}"><i class="fas fa-edit"></i> Edit</button>
            <button class="btn btn-danger delete-category-btn" data-id="${category.id}"><i class="fas fa-trash"></i></button>
        </div>
        `;
        categoryGroup.appendChild(header);

        if (category.children.length > 0) {
            const childrenContainer = document.createElement('div');
            childrenContainer.className = 'category-children';
            category.children.forEach(child => {
                const childCard = document.createElement('div');
                childCard.className = 'card child-card';
                childCard.innerHTML = `
                    <h4>${child.name}</h4>
                    <p>${child.description || ''}</p>
                    <div class="actions">
                        <button class="btn btn-primary view-items-btn" data-id="${child.id}" data-name="${child.name}"><i class="fas fa-eye"></i> View</button>
                        <button class="btn btn-primary add-item-btn" data-id="${child.id}" data-name="${child.name}"><i class="fas fa-plus"></i> Item</button>
                        <button class="btn btn-secondary edit-category-btn" data-id="${child.id}" data-name="${child.name}" data-desc="${child.description || ''}" data-parent="${child.parent_id || ''}"><i class="fas fa-edit"></i> Edit</button>
                        <button class="btn btn-danger delete-category-btn" data-id="${child.id}"><i class="fas fa-trash"></i></button>
                    </div>
                `;
                childrenContainer.appendChild(childCard);
            });
            categoryGroup.appendChild(childrenContainer);
        }        
        categoryList.appendChild(categoryGroup);
    });
}

async function loadIngredients() {
    const ingredients = await api.getIngredients();
    ingredientList.innerHTML = '';
    ingredients.forEach(ing => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3 class="${ing.is_allergen ? 'allergen' : ''}">${ing.name}</h3>
            <p>${ing.is_allergen ? 'Allergen' : 'Safe'}</p>
            <div class="actions">
                <button class="btn btn-secondary edit-ingredient-btn" data-id="${ing.id}" data-name="${ing.name}" data-allergen="${ing.is_allergen}"><i class="fas fa-edit"></i> Edit</button>
                <button class="btn btn-danger delete-ingredient-btn" data-id="${ing.id}"><i class="fas fa-trash"></i></button>
            </div>
        `;
        ingredientList.appendChild(card);
    });
}

async function loadMenuItems(categoryId, categoryName) {
    currentCategoryId = categoryId;
    currentCategoryName = categoryName;
    const items = await api.getMenuItemsByCategory(categoryId);
    menuTitle.textContent = `Menu Items for ${categoryName}`;
    menuList.innerHTML = '';
    items.forEach(item => {
        const ingredientsHtml = item.ingredients && item.ingredients.length > 0 
            ? `<div class="ingredients">
                <strong>Ingredients:</strong> 
                ${item.ingredients.map(ing => `
                    <span class="${ing.is_allergen ? 'allergen' : ''}">
                        ${ing.name} (${ing.quantity})
                        <i class="fas fa-times unlink-ingredient" data-item-id="${item.id}" data-ing-id="${ing.ingredient_id || 0}" style="cursor:pointer; color:red; margin-left:5px;"></i>
                    </span>`).join(', ')}
               </div>`
            : '';

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description || ''}</p>
            ${ingredientsHtml}
            <p class="price">$${item.price}</p>
            <div class="actions">
                <button class="btn btn-primary link-ingredient-btn" data-id="${item.id}" data-name="${item.name}"><i class="fas fa-link"></i> Ingredient</button>
                <button class="btn btn-secondary edit-item-btn" data-id="${item.id}" data-name="${item.name}" data-desc="${item.description || ''}" data-price="${item.price}"><i class="fas fa-edit"></i> Edit</button>
                <button class="btn btn-danger delete-item-btn" data-id="${item.id}"><i class="fas fa-trash"></i></button>
            </div>
        `;
        menuList.appendChild(card);
    });
}

function setupEventListeners() {
    categoryList.addEventListener('click', async (e) => {
        const target = e.target.closest('button');
        if (!target) return;
        const id = target.getAttribute('data-id');
        const name = target.getAttribute('data-name');
        if (target.classList.contains('view-items-btn')) {
            loadMenuItems(id, name);
        } else if (target.classList.contains('add-item-btn')) {
            openAddItemModal(id, name);
        } else if (target.classList.contains('edit-category-btn')) {
            openEditCategoryModal(id, name, target.getAttribute('data-desc'), target.getAttribute('data-parent'));
        } else if (target.classList.contains('delete-category-btn')) {
            if (confirm('Delete this category and all its items?')) {
                await api.deleteCategory(id);
                loadCategories();
            }
        }
    });

    ingredientList.addEventListener('click', async (e) => {
        const btn = e.target.closest('button');
        if (!btn) return;
        const id = btn.getAttribute('data-id');
        if (btn.classList.contains('delete-ingredient-btn')) {
            if (confirm('Delete this ingredient?')) {
                await api.deleteIngredient(id);
                loadIngredients();
                if (currentCategoryId) loadMenuItems(currentCategoryId, currentCategoryName);
            }
        } else if (btn.classList.contains('edit-ingredient-btn')) {
            openEditIngredientModal(id, btn.getAttribute('data-name'), btn.getAttribute('data-allergen') === '1');
        }
    });

    menuList.addEventListener('click', async (e) => {
        if (e.target.classList.contains('unlink-ingredient')) {
            const itemId = e.target.getAttribute('data-item-id');
            const ingId = e.target.getAttribute('data-ing-id');
            if (confirm('Remove this ingredient from the item?')) {
                await api.removeItemIngredient(itemId, ingId);
                loadMenuItems(currentCategoryId, currentCategoryName);
            }
            return;
        }

        const target = e.target.closest('button');
        if (!target) return;
        const id = target.getAttribute('data-id');
        const name = target.getAttribute('data-name');
        if (target.classList.contains('delete-item-btn')) {
            if (confirm('Delete this menu item?')) {
                await api.deleteMenuItem(id);
                loadMenuItems(currentCategoryId, currentCategoryName);
            }
        } else if (target.classList.contains('edit-item-btn')) {
            openEditItemModal(id, name, target.getAttribute('data-desc'), target.getAttribute('data-price'));
        } else if (target.classList.contains('link-ingredient-btn')) {
            openLinkIngredientModal(id, name);
        }
    });

    addCategoryBtn.addEventListener('click', async () => {
        const categories = await api.getCategories();
        const options = categories.filter(c => !c.parent_id).map(c => `<option value="${c.id}">${c.name}</option>`).join('');
        openModal('Add Category', `
            <input type="hidden" name="type" value="category-create">
            <div><label>Name</label><input type="text" name="name" required></div>
            <div><label>Description</label><textarea name="description"></textarea></div>
            <div><label>Parent Category (Optional)</label>
                <select name="parent_id">
                    <option value="">None (Top Level)</option>
                    ${options}
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Save Category</button>
        `);
    });

    addIngredientBtn.addEventListener('click', () => {
        openModal('Add Ingredient', `
            <input type="hidden" name="type" value="ingredient-create">
            <div><label>Name</label><input type="text" name="name" required></div>
            <div><label>Is Allergen?</label><input type="checkbox" name="is_allergen" style="width: auto;"></div>
            <button type="submit" class="btn btn-primary">Save Ingredient</button>
        `);
    });

    closeBtn.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });

    modalForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(modalForm);
        const data = Object.fromEntries(formData.entries());
        const type = data.type;
        
        if (type === 'category-create') {
            if (!data.parent_id) delete data.parent_id;
            await api.createCategory(data);
            loadCategories();
        } else if (type === 'category-edit') {
            const id = data.id;
            delete data.id;
            if (!data.parent_id) data.parent_id = null;
            await api.updateCategory(id, data);
            loadCategories();
        } else if (type === 'ingredient-create') {
            data.is_allergen = !!data.is_allergen;
            await api.createIngredient(data);
            loadIngredients();
        } else if (type === 'ingredient-edit') {
            const id = data.id;
            delete data.id;
            data.is_allergen = !!data.is_allergen;
            await api.updateIngredient(id, data);
            loadIngredients();
        } else if (type === 'menu-item-create') {
            await api.createMenuItem(data);
            loadMenuItems(data.category_id, currentCategoryName);
        } else if (type === 'menu-item-edit') {
            const id = data.id;
            delete data.id;
            await api.updateMenuItem(id, data);
            loadMenuItems(data.category_id, currentCategoryName);
        } else if (type === 'link-ingredient') {
            await api.addItemIngredient(data);
            loadMenuItems(currentCategoryId, currentCategoryName);
        }
        modal.style.display = 'none';
    });
}

function openAddItemModal(categoryId, categoryName) {
    openModal(`Add Item to ${categoryName}`, `
        <input type="hidden" name="type" value="menu-item-create">
        <input type="hidden" name="category_id" value="${categoryId}">
        <div><label>Name</label><input type="text" name="name" required></div>
        <div><label>Description</label><textarea name="description"></textarea></div>
        <div><label>Price</label><input type="number" step="0.01" name="price" required></div>
        <button type="submit" class="btn btn-primary">Save Item</button>
    `);
}

function openEditItemModal(id, name, desc, price) {
    openModal(`Edit Item: ${name}`, `
        <input type="hidden" name="type" value="menu-item-edit">
        <input type="hidden" name="id" value="${id}">
        <input type="hidden" name="category_id" value="${currentCategoryId}">
        <div><label>Name</label><input type="text" name="name" value="${name}" required></div>
        <div><label>Description</label><textarea name="description">${desc}</textarea></div>
        <div><label>Price</label><input type="number" step="0.01" name="price" value="${price}" required></div>
        <button type="submit" class="btn btn-primary">Update Item</button>
    `);
}

async function openEditCategoryModal(id, name, desc, parentId) {
    const categories = await api.getCategories();
    const options = categories
        .filter(c => !c.parent_id && c.id != id)
        .map(c => `<option value="${c.id}" ${c.id == parentId ? 'selected' : ''}>${c.name}</option>`)
        .join('');
    
    openModal(`Edit Category: ${name}`, `
        <input type="hidden" name="type" value="category-edit">
        <input type="hidden" name="id" value="${id}">
        <div><label>Name</label><input type="text" name="name" value="${name}" required></div>
        <div><label>Description</label><textarea name="description">${desc}</textarea></div>
        <div><label>Parent Category</label>
            <select name="parent_id">
                <option value="">None (Top Level)</option>
                ${options}
            </select>
        </div>
        <button type="submit" class="btn btn-primary">Update Category</button>
    `);
}

function openEditIngredientModal(id, name, isAllergen) {
    openModal(`Edit Ingredient: ${name}`, `
        <input type="hidden" name="type" value="ingredient-edit">
        <input type="hidden" name="id" value="${id}">
        <div><label>Name</label><input type="text" name="name" value="${name}" required></div>
        <div><label>Is Allergen?</label><input type="checkbox" name="is_allergen" ${isAllergen ? 'checked' : ''} style="width: auto;"></div>
        <button type="submit" class="btn btn-primary">Update Ingredient</button>
    `);
}

async function openLinkIngredientModal(itemId, itemName) {
    const ingredients = await api.getIngredients();
    const options = ingredients.map(ing => `<option value="${ing.id}">${ing.name}</option>`).join('');
    openModal(`Add Ingredient to ${itemName}`, `
        <input type="hidden" name="type" value="link-ingredient">
        <input type="hidden" name="menu_item_id" value="${itemId}">
        <div><label>Select Ingredient</label><select name="ingredient_id">${options}</select></div>
        <div><label>Quantity</label><input type="text" name="quantity" placeholder="e.g. 100g, 2 slices" required></div>
        <button type="submit" class="btn btn-primary">Link Ingredient</button>
    `);
}

function openModal(title, html) {
    modalTitle.textContent = title;
    modalForm.innerHTML = html;
    modal.style.display = 'block';
}

init();
