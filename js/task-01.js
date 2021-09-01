const listCategories = document.querySelector('#categories');
const allElCategories = listCategories.querySelectorAll('.item');
console.log(`В списке ${allElCategories.length} категории`);

allElCategories.forEach(item => {
   const nameCategories = item.querySelector('h2');
   const numberElements = item.querySelector('li');
   console.log(`Категория: ${nameCategories.textContent}, Количество элементов: ${numberElements.length}`);
})
