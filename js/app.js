document.addEventListener('DOMContentLoaded', () => {

let firstName = '';
let lastName = '';
let address = '';
let pizza = 'MAN I WANT A PIZZA';
let temperature = '';
 let description = document.querySelector('#description');
//this is the refactor and I am seperating each event

const firstNameInput = document.querySelector('#first_name');
firstNameInput.addEventListener('input', (event) =>{
  console.log(event.target.value);

  firstName = event.target.value;

});

const lastNameInput = document.querySelector('#last_name');
lastNameInput.addEventListener('input', (event) =>{
    lastName = event.target.value;
});

const addressInput = document.querySelector('#address');
addressInput.addEventListener('input', (event) => {
  address = event.target.value;
});


const pizzaInput = document.querySelector('#pizza_type');
pizzaInput.addEventListener('change', (event) =>{
  pizza = event.target.value;
});

const tempInput = document.querySelector('fieldset')
 tempInput.addEventListener('input', (event) => {

   temperature = event.target.value;
 });

 const margheritaHover = document.querySelector('#margherita');
 margheritaHover.addEventListener('mouseover', ()=> {

   description.textContent = "The Margherita: the first one we could think of! It's an oldy but a goody! Sometimes";
});

 const onionHover = document.querySelector('#onions');
 onionHover.addEventListener('mouseover', ()=> {

   description.textContent = "Onions and toothpaste: all of the zing of onions with cool refreshing toothpaste";
 });

 const cornflakeHover = document.querySelector('#weetabix');
 cornflakeHover.addEventListener('mouseover', ()=> {

   description.textContent = "Cornflakes surprise! It's a crunchy treat! And the surprise? - it's actually Weetabix"
 });

 const potatoHover = document.querySelector('#potato');
 potatoHover.addEventListener('mouseover', ()=> {

   description.textContent = "Ah! Potatoes and Pepperoni: strongly recommended to be eaten hot and not cold";
 });




const form = document.querySelector('#pizza-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const pizzaList = document.querySelector('#pizzaList');
  const newOrder = document.createElement('div');

  // format the text
  const name = document.createElement('p');
  name.textContent = `name : ${firstName} ${lastName} `
  const addressLine = document.createElement('p');
  addressLine.textContent = `address: ${address} `
  const pizzaLine = document.createElement('p');
  pizzaLine.textContent = `pizza: ${pizza}  `
  const temperatureLine = document.createElement('p');
  temperatureLine.textContent = `and it will be ${temperature}`
  newOrder.classList.add("inner")
  newOrder.appendChild(name);
  newOrder.appendChild(addressLine);
  newOrder.appendChild(pizzaLine);
  newOrder.appendChild(temperatureLine);
  pizzaList.appendChild(newOrder);



  form.reset();

})

const button = document.querySelector('button');

button.addEventListener('click', ()=> {
  pizzaList.innerHTML = '';

})



})
