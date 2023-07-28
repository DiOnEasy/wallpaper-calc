const width = document.getElementById('width');
const height = document.getElementById('height');
const materialType = document.getElementById('material__type');
const calcButton = document.getElementById('calc__button');
const square = document.getElementById('square');
const totalPrice = document.getElementById('total__price')

const materialTypes = [
    {
        name: 'Текстура под иней',
        price: 150
    },
    {
        name: 'Текстура под древний папирус',
        price: 1500
    },
    {
        name: 'Текстура живопись маслом',
        price: 354
    },
]

for (i = 0; i < materialTypes.length; i++) {
    materialType.innerHTML += 
    `
    <option value="${materialTypes[i].price}">${materialTypes[i].name}</option>
    `
};

calcButton.onclick = function(){
    let calcSquare = (Number(width.value) * Number(height.value))/10000;
    let total = calcSquare * Number(materialType.value);
    console.log(total)
    square.innerHTML = 
    `
    ${calcSquare.toFixed(2)}
    `;
    totalPrice.innerHTML = 
    `
    ${total.toFixed(0)}
    `
}