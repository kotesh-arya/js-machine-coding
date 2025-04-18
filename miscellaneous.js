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
