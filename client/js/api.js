const API_BASE_URL = 'http://localhost:3000/api';

export const api = {
    // Categories
    async getCategories() {
        const response = await fetch(`${API_BASE_URL}/categories`);
        return response.json();
    },
    async createCategory(category) {
        const response = await fetch(`${API_BASE_URL}/categories`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(category)
        });
        return response.json();
    },
    async updateCategory(id, category) {
        const response = await fetch(`${API_BASE_URL}/categories/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(category)
        });
        return response.json();
    },
    async deleteCategory(id) {
        const response = await fetch(`${API_BASE_URL}/categories/${id}`, {
            method: 'DELETE'
        });
        return response.json();
    },

    // Menu Items
    async getMenuItems() {
        const response = await fetch(`${API_BASE_URL}/menu-items`);
        return response.json();
    },
    async getMenuItemsByCategory(categoryId) {
        const response = await fetch(`${API_BASE_URL}/menu-items/category/${categoryId}`);
        return response.json();
    },
    async createMenuItem(item) {
        const response = await fetch(`${API_BASE_URL}/menu-items`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        });
        return response.json();
    },
    async updateMenuItem(id, item) {
        const response = await fetch(`${API_BASE_URL}/menu-items/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        });
        return response.json();
    },
    async deleteMenuItem(id) {
        const response = await fetch(`${API_BASE_URL}/menu-items/${id}`, {
            method: 'DELETE'
        });
        return response.json();
    },

    // Ingredients
    async getIngredients() {
        const response = await fetch(`${API_BASE_URL}/ingredients`);
        return response.json();
    },
    async createIngredient(ingredient) {
        const response = await fetch(`${API_BASE_URL}/ingredients`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ingredient)
        });
        return response.json();
    },
    async updateIngredient(id, ingredient) {
        const response = await fetch(`${API_BASE_URL}/ingredients/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ingredient)
        });
        return response.json();
    },
    async deleteIngredient(id) {
        const response = await fetch(`${API_BASE_URL}/ingredients/${id}`, {
            method: 'DELETE'
        });
        return response.json();
    },

    // Item-Ingredients
    async addItemIngredient(itemIngredient) {
        const response = await fetch(`${API_BASE_URL}/item-ingredients`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(itemIngredient)
        });
        return response.json();
    },
    async removeItemIngredient(itemId, ingredientId) {
        const response = await fetch(`${API_BASE_URL}/item-ingredients/${itemId}/${ingredientId}`, {
            method: 'DELETE'
        });
        return response.json();
    }
};
