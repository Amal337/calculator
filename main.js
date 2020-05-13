
// click sound event to all buttons
// const sound = document.getElementById('AC');
//       sound.addEventListener('click', playAudio);

// const sound1 = document.getElementById('operators');
//       sound1.addEventListener('click', playAudio);

// const sound2 = document.getElementById('numbers');
//       sound2.addEventListener('click', playAudio);

// function playAudio(){
//     const tick = new Audio('sounds/click.mp3');
//     tick.play();
// }

//numbers buttons
// const btn = document.querySelectorAll('.number')
const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');
const btn6 = document.getElementById('6');
const btn7 = document.getElementById('7');
const btn8 = document.getElementById('8');
const btn9 = document.getElementById('9');
const btn0 = document.getElementById('0');


btn1.onclick = function() {num1.innerHTML+= Number('1');}
btn2.onclick = function() {num1.innerHTML+= Number('2');}
btn3.onclick = function() {num1.innerHTML+= Number('3');}
btn4.onclick = function() {num1.innerHTML+= Number('4');}
btn5.onclick = function() {num1.innerHTML+= Number('5');}
btn6.onclick = function() {num1.innerHTML+= Number('6');}
btn7.onclick = function() {num1.innerHTML+= Number('7');}
btn8.onclick = function() {num1.innerHTML+= Number('8');}
btn9.onclick = function() {num1.innerHTML+= Number('9');}
btn0.onclick = function() {num1.innerHTML+= Number('0');}

//clear
const clear = document.getElementById('AC');
        clear.onclick = function() {num1.innerHTML="";}

//operations
const plus = document.getElementById('plus');
const minus = document.getElementById('min');
const multi = document.getElementById('multi');
const divide = document.getElementById('divide');
const equal = document.getElementById('equal');
// plus.onclick = function() {inputs.innerText+= "+";}
// minus.onclick = function() {inputs.innerText+= "-";}
// multi.onclick = function() {inputs.innerText+= "*";}
// div.onclick = function() {inputs.innerText+= "/";}
// equal.onclick = function() {inputs.innerText= 'result';}

// function operate(num1, op, num2){
//    if( op == '+'){
//       add();
//    } else if( op == '*'){
//       multiply();
//    } else if( op == '/'){
//       divid();
//    } else if( op == '-'){
//       substract();
//    }
// }

let inputs = Number(document.getElementById('num1').value);
// let num2 = Number(document.getElementById('num2').value);

function add(){
   document.getElementById('equal').innerHTML= num1+num2;
   return false; 
}
   document.getElementById('plus').addEventListener('click', add);
  
function subtract(){
    document.getElementById('equal').innerHTML= num1-num2;
    return false;
}
document.getElementById('min').addEventListener('click', min);

function multiply(){
    document.getElementById('equal').innerHTML= num1*num2;
    return false;
}
document.getElementById('multi').addEventListener('click', multiply);

function divid(){
    document.getElementById('equal').innerHTML= num1/num2;
    return false;
}
    document.getElementById('divide').addEventListener('click', divid);