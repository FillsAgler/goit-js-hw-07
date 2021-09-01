const listCategories = document.querySelector('#categories');
const allElCategories = listCategories.querySelectorAll('.item');
console.log(`В списке ${allElCategories.length} категории`);

allElCategories.forEach(item => {
   const nameCategories = item.querySelector('h2');
   const numberElements = item.querySelectorAll('li');
   console.log(`Категория: ${nameCategories.textContent}`)
   console.log(`Количество элементов: ${numberElements.length}`);
})
