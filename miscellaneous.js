// Memoizing using a Map as a cache storage which will be accessed by the inner function as it had fromed a closure with the map.

function memoize(fn) {


    const map = new Map(); // map to store the arguments of to be memoized function

    // actually memoizing the keys and checking for their existence is quite enough to do caching

    return (...args) => {


        console.log("arguments of inner function", args);


        const key = args.reduce((acc, curr) => `${acc}-${curr}`, '*');
        console.log("key for map", key);
        if (map.has(key)) { // return the result if a key made with this arguments is in the map
            console.log("result from cache");
            return map.get(key);
        }

        // if key not present, then carry on with the calculation
        const result = fn(...args);
        console.log(result, "result from  calculation");

        // store the result in the map for future accessing
        map.set(key, result);

        // Return the calculated result at last
        return result;
    }

}

const add = (a, b, c) => a + b + c;

const memoizeAdd = memoize(add);

console.log(memoizeAdd(2, 3, 4)); // 5 - result from calculation
console.log(memoizeAdd(2, 3, 4)); // 5 - result from cache


// Deep copy and Shallow copy

let obj = {
    name: "kotesh",
    age: 27,
    address: {
        street: "brahmin street",
        city: "Jammala madugu"
    },
}

let cloneObj = Object.assign({}, obj); // shallow copy

console.log(cloneObj, "cloned version");
cloneObj.age = 99;
console.log(cloneObj.age);

console.log(obj.age);

cloneObj.address.city = "Pondatti";

console.log(obj.address.city);  // Pondatti  (affectted) as the both original and clone object are referencing to the same address object, so changes to it from the cloned versoin affect the original object's address object.



let cloneObj2 = JSON.parse(JSON.stringify(obj)); // deep copy

cloneObj2.address.street = "mallepoola street";

console.log(obj.address.street); // brahmin street (unaffected)

