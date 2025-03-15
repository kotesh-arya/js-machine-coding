const textInput = document.getElementById("text");
const logText = () => {
    console.log(textInput.value);
}


const debounce = (fn, delay) => {
    let timerId;
    
    return function () {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            fn();
        }, delay);
    }
}


const throttle = (fn, interval) => {
    let lastTime = 0;

    return function () {
        const now = Date.now();
        
        if (now - lastTime >= interval) {
            fn();
            lastTime = now;
        }
    }
}



let debouncedTextLogging = debounce(logText, 2000);
let throttledTextLogging = throttle(logText, 2000);


// textInput.addEventListener("input", debouncedTextLogging);
textInput.addEventListener("input", throttledTextLogging);

