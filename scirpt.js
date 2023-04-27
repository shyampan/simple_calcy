let x = document.getElementById('k1').value;
let y = document.getElementById('k2').value;

let ram  = ()=> {
    let x = document.getElementById('k1').value;
let y = document.getElementById('k2').value;
console.log(x);
console.log(y);

    let op = document.getElementById('shyam').value;

  


if(op=="Addtion") {
    document.getElementById('ans').innerHTML = parseInt(x) + parseInt(y);
}

else if(op=="Substraction") {
    document.getElementById('ans').innerHTML = x - y;
}

else if(op=="Multiplication") {
    document.getElementById('ans').innerHTML = x*y;
}

else if(op=="Division") {
    document.getElementById('ans').innerHTML = x/y;
}

};


