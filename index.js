let countP = document.getElementById("count-p")
let count = 0
console.log(countP)
function Add(){
count = count + 1 
countP.innerText = count
}
function Save(){
    console.log(count)
}
function Reset(){
    count = count - count
    countP.innerText = count
    
}
function Remove(){
    count = count - 1
    countP.innerText = count
}