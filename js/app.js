document.addEventListener('DOMContentLoaded', () => {


const form = document.querySelector('#pizza-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
    console.log(event);
  const pizzaList = document.querySelector('#pizzaList');
  const newOrder = document.createElement('li');

  const firstName = event.target.first_name.value;
   const lastName = event.target.last_name.value;
   const address = event.target.address.value;
   const pizza = event.target.pizza_type.value;


  newOrder.textContent = `name : ${firstName} ${lastName} address: ${address} pizza: ${pizza}`;
   console.log(newOrder);
  pizzaList.appendChild(newOrder);
  form.reset();


})

const button = document.querySelector('#button');
console.dir(button);
button.addEventListener('click', ()=> {
  pizzaList.innerHTML = '';

})



})
