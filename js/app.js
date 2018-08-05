document.addEventListener('DOMContentLoaded', () => {

let firstName = '';
let lastName = '';
let address = '';
let pizza = '';
let temperature = '';
 let description = document.querySelector('#description');
 let originalDescription  = "Check out our pizzas. Please. They need to be tested on someone!";



 const margheritaHover = document.querySelector('#margherita');
 margheritaHover.addEventListener('mouseover', ()=> {

   description.textContent = "The Margherita: the first one we could think of! It's an oldy but a goody! Sometimes";
});



 const onionHover = document.querySelector('#onions');
 onionHover.addEventListener('mouseover', ()=> {

   description.textContent = "Pickled onions and toothpaste: all of the zing of onions with cool refreshing toothpaste";
 });

 const cornflakeHover = document.querySelector('#weetabix');
 cornflakeHover.addEventListener('mouseover', ()=> {

   description.textContent = "Cornflakes surprise! It's a crunchy treat! And the surprise? - it's actually Weetabix"
 });

 const potatoHover = document.querySelector('#potato');
 potatoHover.addEventListener('mouseover', ()=> {

   description.textContent = "Ah! Potatoes and Pepperoni: strongly recommended to be eaten hot and not cold";
 });

 margheritaHover.addEventListener('mouseleave', ()=> {
   description.textContent = originalDescription;

 });

onionHover.addEventListener('mouseleave', ()=> {
   description.textContent = originalDescription;

 });

 cornflakeHover.addEventListener('mouseleave', ()=> {
   description.textContent = originalDescription;

 });

 potatoHover.addEventListener('mouseleave', ()=> {
   description.textContent = originalDescription;

 });




const form = document.querySelector('#pizza-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const pizzaList = document.querySelector('#pizzaList');
  const newOrder = document.createElement('div');
  const firstName = event.target.first_name.value;
  const lastName = event.target.last_name.value;
  const address = event.target.address.value;
  const pizza = event.target.pizza_type.value;
  const temperature = event.target.temp.value;


  // format the text in the div to append to
  const name = document.createElement('p');
  name.textContent = `name : ${firstName} ${lastName} `
  const addressLine = document.createElement('p');
  addressLine.textContent = `address: ${address} `
  const pizzaLine = document.createElement('p');
  pizzaLine.textContent = `pizza: ${pizza}  `
  const temperatureLine = document.createElement('p');
  temperatureLine.textContent = `and it will be ${temperature}`
  // append to new order
  newOrder.appendChild(name);
  newOrder.appendChild(addressLine);
  newOrder.appendChild(pizzaLine);
  newOrder.appendChild(temperatureLine);
  // append the new order to the list
  pizzaList.appendChild(newOrder);



  form.reset();

})

const button = document.querySelector('button');

button.addEventListener('click', ()=> {
  pizzaList.innerHTML = '';

})



})
