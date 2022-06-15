const array = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
];

const filterField = "money"

function removeArrayElement(filterField) {
    // write your solution here
    array.forEach(function(value){
        var b = Object.values(value);
        b.forEach(function(value, index){
            if(value == filterField){
                array.slice(index);
            }
        })
    })
    return array
}

console.log(`filtered array: ${removeArrayElement(filterField)}`)
