// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:
//  - Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//  - Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента 
//    (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).



// const categories = Array.from( document.querySelector('#categories').children);
const categories = document.querySelectorAll('.item');

// console.log(`categories`,categories);

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const categoryTitle = category.querySelector('h2');
    const categoryList = category.querySelector('ul');
    const categoryItems = category.querySelectorAll('li');
    console.log(`Category: ${categoryTitle.textContent}`);
    console.log(`Elements: ${categoryItems.length}`);

    categoryTitle.classList.add('category__title');
    categoryList.classList.add('category__list');
    categoryItems.forEach(item => {
        item.classList.add('category__item');
    });

});

categories.forEach(item => {
    item.classList.add('category');
});
