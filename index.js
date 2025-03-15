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


// -------------Mamage employee attendance using Map in Javascript-----------------------


const employees = [
    { id: 1, name: "Alice Johnson", attendance: 22 },
    { id: 2, name: "Bob Smith", attendance: 18 },
    { id: 3, name: "Charlie Davis", attendance: 25 },
    { id: 4, name: "Diana Miller", attendance: 20 }
  ];


function manageAttendance(employees) {
    let employeeMap = new Map();
     for(let i=0; i<employees.length; i++){
       employeeMap.set(employees[i].id,{"attendance": employees[i].attendance,"name": employees[i].name});
     }
   
     return {
     addEmployee(id,name, attendance) {
     if(employeeMap.has(id)){
       throw new Error("Employee ID already exists.");
     }else{
         employeeMap.set(id,{name, attendance});
     }
    },
   
      updateAttendance(id, attendance){
   
        if(!employeeMap.has(id)){
          throw new Error("Employee ID not found.")
        }else{
       employeeMap.set(id,{"name": employeeMap.get(id).name, "attendance": attendance});
        }
    },
       getAttendance(id){
   if(employeeMap.has(id)){
     
     return  employeeMap.get(id);
   }else{
     return null;
   }
         
    }
       
     };
   };
   


   

