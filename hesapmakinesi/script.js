const display=document.querySelector('.calculator-input');
const keys= document.querySelector('.calculator-keys');

let displayValue='Result';
let firsValue=null;
let operator=null;
let  waitingForSecondValue=false;
updateDisplay();

function updateDisplay(){
    display.value = displayValue;

}

keys.addEventListener('click', function(e) {
    const element = e.target;
    const value=element.value;

    if(!element.matches('button')) return;

    switch(value){
        case '+':
        case '-':
        case '*':
        case '/':
        case '=':
            handleOperator(value);
            break;

        case '.':
            inputDecimal();
            break;
           case 'clear':
            clear();
            break;
            

            default: 
            inputNumber(element.value);

        
    }
 
    
   
    updateDisplay();
});

function handleOperator(nextoperator){
    const value=parseFloat(displayValue);

    if(operator && waitingForSecondValue){
        operator=nextoperator;
        return;
    }
    
    if(firsValue==null){
        firsValue=value;
    }else if(operator){
        const result=calculate(firsValue, value,operator);
        displayValue=String(result);
        firsValue=result;
    }

    waitingForSecondValue=true;
    operator=nextoperator;

    console.log(displayValue,firsValue, operator, waitingForSecondValue);

}
function calculate(first, second, operator){
    if(operator==='+'){
        return first+second;

    }else if(operator==='-'){
        return first-second;
    }else if(operator==='*'){
        return first*second;
    }else if(operator==='/'){
        return first/second;
    }
    return second;
}

function inputNumber(num){ 
   if(waitingForSecondValue){
    displayValue=num;
    waitingForSecondValue=false;

   }
   else{

  
    displayValue=displayValue==='Result'? num:displayValue + num;
}
console.log(displayValue,firsValue, operator, waitingForSecondValue);
}
function inputDecimal(){ 

    if(!displayValue.includes('.')){
        displayValue+='.';

    }
   

}

function clear(){ 
    displayValue='0';
}
