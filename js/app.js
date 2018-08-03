document.addEventListener('DOMContentLoaded', () => {

let firstName = '';
let lastName = '';
let address = '';
let pizza = 'MAN I WANT A PIZZA';
//this is the refactor and I am seperating each event
const firstNameInput = document.querySelector('#first_name')
firstNameInput.addEventListener('input', (event) =>{
  console.log(event.target.value);

  firstName = event.target.value;

})

const lastNameInput = document.querySelector('#last_name')
lastNameInput.addEventListener('input', (event) =>{
    lastName = event.target.value;
})

const addressInput = document.querySelector('#address')
addressInput.addEventListener.querySelector('input', (event) => {
  address = event.taget.value;
}) 


const form = document.querySelector('#pizza-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const pizzaList = document.querySelector('#pizzaList');
  const newOrder = document.createElement('li');



   const pizza = event.target.pizza_type.value;


  newOrder.textContent = `name : ${firstName} ${lastName} address: ${address} pizza: ${pizza}`;
   console.log(newOrder);
  pizzaList.appendChild(newOrder);
  form.reset();


})

const button = document.querySelector('#button');

button.addEventListener('click', ()=> {
  pizzaList.innerHTML = '';

})



})
