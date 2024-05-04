let input = document.querySelector(".exp");
let button = document.querySelector(".btn");
let output = document.querySelector(".result");

function empty(value) {
    return value === "";
}


function checkLetters(value) {
    var valid = true;
    for (let i = 0; i < value.length; i++) {
        let c = value[i].toUpperCase();
        if (c >= 'A' && c <= 'Z') {
            valid = false;
            break;
        }
    }
    return valid;
}


input.addEventListener("input", function () {
    let val = input.value;

    // trim method
    val = val.trim();

    // empty function
    if (empty(val)) {
        console.log("Enter a valid equation!");
        output.textContent = "0";
    } else {
        // check letters function
        if (!checkLetters(val)) {
            console.log("Enter a valid equation!");
        } else {
            let stack = [];
            let ops = [];
            let n = 0;
            for (let i = 0; i < val.length; i++) {
                if (val[i] >= '0' && val[i] <= '9') {
                    n = n * 10 + Number.parseInt(val[i]);
                } else {
                    if (val[i] === "+" || val[i] === "-") {
                        ops.push(val[i]);
                        if (n !== 0) {
                            stack.push(n);
                        }
                        n = 0;
                    } else {
                        let n2 = 0;
                        let j = i + 1;
                        for (j; j < val.length; j++) {
                            if (val[j] >= '0' && val[j] <= '9') {
                                n2 = n2 * 10 + Number.parseInt(val[j]);
                            } else {
                                break;
                            }
                        }
                        if (n === 0) {
                            n = stack.pop();
                        }
                        console.log(n);
                        if (val[i] === "*") {
                            stack.push(n * n2);
                            n = 0;
                        } else {
                            if (n2 === 0) {
                                stack.push(n);
                                n = 0;
                            } else {
                                stack.push(Number.parseInt(n / n2));
                            }
                        }
                        i = j - 1;
                    }
                }
            }
            if (n) {
                stack.push(n);
            }
            for (let i = 0; i < ops.length; i++) {
                if (ops[i] === "+") {
                    stack[0] += stack[1];
                } else {
                    stack[0] -= stack[1];
                }
                stack = stack.slice(0, 1).concat(stack.slice(2));
            }
            output.textContent = stack[0];
        }
    }
});