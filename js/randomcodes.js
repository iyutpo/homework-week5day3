var getCode = ' ';
var btnvalue;
var code = ' ';
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

// RANDOM CODES
// Function to generation combination of characters
function generateCode() {
    
    for (i = 1; i <= 8; i++) {
        var char = Math.random() * str.length;
        code += str.charAt(char);
    }
    return code;
}
document.getElementById('codes').innerHTML = generateCode();

// determine when to able or disable button
function disableButton(btnvalue) {
    document.getElementById('submit').disabled = btnvalue;
    if (btnvalue == true) {
        document.getElementById('submit').style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        document.getElementById('submit').style.color = "rgba(255, 255, 255, 0.5)";
    } else {
        document.getElementById('submit').style.backgroundColor = "rgba(73, 119, 209, 1)";
        document.getElementById('submit').style.color = "rgba(255, 255, 255, 1)";
    }
}

// listen to user input code
var codebox = document.getElementById('codeentered');
codebox.addEventListener('input', evaluateCode);  // listen to code entered in textbox

function evaluateCode() {
    getCode = document.getElementById('codeentered').value;  // get character entered
    var charset1 = getCode.trim();  // remove any hidden characters entered
    var charset2 = code.trim();   // remove any hidden characters entered
    // test if code entered matches the number of generated characters
    if (charset1.length == charset2.length && charset1 == charset2) {
        disableButton(false);
    }
}


// disableButton();




