// global variables
var initialValue; // store the initial value on the calculator display
var operator; // store the operator that had been pressed

function enterIntoDisplay(number) {
    let display = document.getElementById("display");
    // check if the content of display is empty
    if (display.value == "" || display.value == "") {
        display.value = number;
    } else {
        display.value += number;
    }
}

function clearDisplay() {
    document.getElementById("display").value = "sub and liek";
}


function add() {
    initialValue = document.getElementById("display").value;
    operator = "plus";
    clearDisplay();
}

function subtract() {
    initialValue = document.getElementById("display").value;
    operator = "minus";
    clearDisplay();
}

function divide() {
    initialValue = document.getElementById("display").value;
    operator = "divide";
    clearDisplay();
}

function divideHelp() {
    initialValue = document.getElementById("display").value;
    operator = "modulus";
    clearDisplay();
}


function multiply() {
    initialValue = document.getElementById("display").value;
    operator = "multiply";
    clearDisplay();
}

function exponent() {
    initialValue = document.getElementById("display").value;
    operator = "exponent";
    clearDisplay();
}

      function increment(){
            initialValue = document.getElementById("display").value;
            operator = "increment";
            clearDisplay();
            

      } 
      function decrement(){
        initialValue = document.getElementById("display").value;
        operator = "decrement";
        clearDisplay();
       

  } 
function equalsTo() {
    // get the current value on the display
    var currentValue = document.getElementById("display").value;

    // variable to store the result of the arithmetic operation
    var result;

   
    switch (operator) {

       

            case "plus":
                //  add the initial and current value
                // check if initial value includess a decimal point
                if (initialValue.includes(".")) {
                    initialValue = parseFloat(initialValue);
                } else {
                    initialValue = parseInt(initialValue);
                }
    
                // check if current value includess a decimal point
                if (currentValue.includes(".")) {
                    currentValue = parseFloat(currentValue);
                } else {
                    currentValue = parseInt(currentValue);
                }
    
                result = initialValue + currentValue;
    
                break;
    
            case "minus":
                //  subtracr the initial and current value
                // check if initial value includess a decimal point
                if (initialValue.includes(".")) {
                    initialValue = parseFloat(initialValue);
                } else {
                    initialValue = parseInt(initialValue);
                }
    
                // check if current value includess a decimal point
                if (currentValue.includes(".")) {
                    currentValue = parseFloat(currentValue);
                } else {
                    currentValue = parseInt(currentValue);
                }
    
                result = initialValue - currentValue;
    
                break;
    f
            case "divide":
                //  Divide the initial and current value
                // check if initial value includess a decimal point
                if (initialValue.includes(".")) {
                    initialValue = parseFloat(initialValue);
                } else {
                    initialValue = parseInt(initialValue);
                }
    
                // check if current value includess a decimal point
                if (currentValue.includes(".")) {
                    currentValue = parseFloat(currentValue);
                } else {
                    currentValue = parseInt(currentValue);
                }
    
                result = initialValue / currentValue;
    
                break;
    
            case "multiply":
                //  Multiply the initial and current value
                // check if initial value includess a decimal point
                if (initialValue.includes(".")) {
                    initialValue = parseFloat(initialValue);
                } else {
                    initialValue = parseInt(initialValue);
                }
    
                // check if current value includess a decimal point
                if (currentValue.includes(".")) {
                    currentValue = parseFloat(currentValue);
                } else {
                    currentValue = parseInt(currentValue);
                }
    
                result = initialValue * currentValue;
    
                break;
    
            default:
                alert("Could not match an operator!");
                break;

            case "increment":
            // all you need is the initial value
            initialValue = parseInt(initialValue);            
            initialValue++;           
            result = initialValue;
            break; 

            case "decrement":
                // all you need is the initial value
                initialValue = parseInt(initialValue);            
                initialValue--;           
                result = initialValue;
                break; 

                case "exponent":
                    //  Multiply the initial and current value
                    // check if initial value includess a decimal point
                    if (initialValue.includes(".")) {
                        initialValue = parseFloat(initialValue);
                    } else {
                        initialValue = parseInt(initialValue);
                    }
        
                    // check if current value includess a decimal point
                    if (currentValue.includes(".")) {
                        currentValue = parseFloat(currentValue);
                    } else {
                        currentValue = parseInt(currentValue);
                    }
        
                    result = initialValue ** currentValue;
        
                    break;


                    case "modulus":
                        //  Multiply the initial and current value
                        // check if initial value includess a decimal point
                        if (initialValue.includes(".")) {
                            initialValue = parseFloat(initialValue);
                        } else {
                            initialValue = parseInt(initialValue);
                        }
            
                        // check if current value includess a decimal point
                        if (currentValue.includes(".")) {
                            currentValue = parseFloat(currentValue);
                        } else {
                            currentValue = parseInt(currentValue);
                        }
            
                        result = initialValue % currentValue;
            
                        break;


     



        

    }


    document.getElementById("display").value = result;
}


//+ add
//- subtract
// / divide
// * multiply
// ** exponent
// % modulus
// ++ increment
// -- decrement


  
 