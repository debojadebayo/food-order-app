import menuArray from "./data";

/* functions needed 
1. render the array onto the DOM with html 
- use a map function for this with template string literals 
2. add the food to an array when the person clicks on the button 
- use an event target listener to have 1 listener for the above 
- 2 and 3 can potentially be combined 
3. conditionally render the order array to a module when someone clicks on the + button 
- write the code and use css to conditional render the display 
- food and the price should be rendered
4. order array functions should be:
- able to be removed if necessary 
- total of the amount of should be stored in total price  
5. Conditionally render the payment modal when people put complete order
- use a form to do this
- compulsory fields, prompt from borwser which should say "please fill in field"
6. Once the user clicks button (pay button) payment modal should disappear 
- thank you message to appear saying order on the way
7. input UUID to be generated and displayed on each of the orders
8. payment modal should be able to be closed by clicking on the X button
*/

const paymentModal = document.getElementById("payment-modal")
const optionsDisplay = document.getElementById("options")
const orderDisplay = document.getElementById("order")
const orderArray = []

document.addEventListener("click",function(event){
    
    if(event.target.matches(".add-item-button")){
        const id = event.target.id
        const item = menuArray.find((item)=>item.id == id)
        orderArray.push(item)
        console.log(orderArray)
        renderOrder()
    }
})

function renderOrder(){
    orderArray.map((item)=>{ 
        const {
            name,
            ingredients,
            id,
            price, 
            emoji, 
        } = item

        const totalPrice = orderArray.reduce((acc, item)=>acc +item.price, 0)

        return `<div class="order-container">
        <h2>${name}</h2>
        <h3>$${price}<h3>
        <h2>Total PriceL: $${totalPrice}</h2>
        </div>
        <div class="order-button-container">
        <button class="remove-item-button" id="${id}">-</button>
        </div>
        `
    }

)}

const menuHtml= menuArray.map((item)=>{

    const {
        name,
        ingredients,
        id,
        price, 
        emoji, 
    } = item

    return `<div class="item-container"><span class="emoji-container">${emoji}</span><div class="item-details"><h2>${name}</h2>
    <p>${ingredients}</p>
    <h3>$${price}<h3>
    </div>
    <button class="add-item-button" id="${id}">+</button>
    </div>
    `
})

console.log(menuHtml)
optionsDisplay.innerHTML = menuHtml.join("")
orderDisplay.innerHTML = renderOrder().join("")