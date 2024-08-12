document.addEventListener('DOMContentLoaded', () => {
    const menuBar2 = document.getElementById('menu-bar2');
    const menuBar3 = document.getElementById('menu-bar3');
    
    const submenuProducts = menuBar2.nextElementSibling.nextElementSibling; // UL para PRODUCTS
    const submenuProduct1 = menuBar3.nextElementSibling.nextElementSibling; // UL para PRODUCT 1

    menuBar2.addEventListener('change', () => {
        submenuProducts.style.display = menuBar2.checked ? 'block' : 'none';
    });

    menuBar3.addEventListener('change', () => {
        submenuProduct1.style.display = menuBar3.checked ? 'block' : 'none';
    });
});
