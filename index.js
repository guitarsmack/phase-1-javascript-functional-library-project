

function myEach(collection, callback){
    if(Array.isArray(collection)){
      collection.forEach(callback)
    }else{
      Object.values(collection).forEach(callback)
    }
    return collection
}


function myMap(collection, callback){
    if(Array.isArray(collection)){
        return collection.map(callback)
    }else{
        return Object.values(collection).map(callback)
    }
}

function myReduce(collection, callback, acc){
    if(Array.isArray(collection)){
        if(acc === undefined){
            return collection.reduce(callback)
        }else{
            return collection.reduce(callback,acc)
        }
    }else{
        return Object.values(collection).reduce(callback)
    }
}

function myFind(collection, predicate){
    if(Array.isArray(collection)){
        return collection.find(predicate)
    }else{
        return Object.values(collection).find(predicate)
    }
}


function myFilter(collection, predicate){
    if(Array.isArray(collection)){
        return collection.filter(predicate)
    }else{
        return Object.values(collection).filter(predicate)
    }
}

function mySize(collection){
    if(Array.isArray(collection)){
        return collection.length
    }else{
        return Object.values(collection).length
    }
}

function myFirst(array,n){
    if(n===undefined){
        return array[0]
    }else{
        return array.slice(0,n)
    }
}

function myLast(array,n){
    if (n === undefined){
        return array[array.length-1]
    }else{
        return array.slice(array.length-n,array.length)
    }
}

// function myFlatten(array){
//     const newArr = []
//     function newFlatten(elem){
//         for(let i of elem){
//         if(Array.isArray(i)){
//             newFlatten(i)
//         }else{
//             newArr.push(i)
//         }
//     }
//     }
//     newFlatten(array)
//     return newArr
// }

// unfinished function. will try to complete the extra functions later

function myKeys(object){
    return Object.keys(object)
}



function myValues(object){
    return Object.values(object)
}

