let value = 0;

function Sub(){
    if (value > 1) {
        value--;
        document.getElementById("value").innerText=value;
        let price = 29.99;
        let total = price * value;
        document.getElementById("price").innerText=total
    }
}
function Add() {
    value++;
    document.getElementById("value").innerText=value; 
    let price = 29.99;
    let total = price * value;
    document.getElementById("price").innerText=total
}