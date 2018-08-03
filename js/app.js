document.addEventListener('DOMContentLoaded', () => {


const form = document.querySelector('#pizza-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
    console.log(event);
  const pizzaList = document.querySelector('#pizzaList');
  const newOrder = document.createElement('li');

  const firstName = event.target.first-name.value;
   const lastName = event.target.last-name.value;
   const address = event.target.address.value;
   const pizza = event.target.pizza-type.value;


   newOrder.textContent = `name : ${firstName} ${lastName} address: ${address} pizza: ${pizza}`

  // bookslist.appendChild(newBook);
  form.reset();


})

const button = document.querySelector('#button');
console.dir(button);
button.addEventListener('click', ()=> {
  bookslist.innerHTML = '';

})



})
