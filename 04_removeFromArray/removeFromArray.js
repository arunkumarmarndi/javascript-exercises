const removeFromArray = function(arr) {
    if(arr.length == 0){
        return [];
    }
    else{
        for(let i=1;i<arguments.length;i++){
            let value = arguments[i];
            arr = arr.filter(function(item) {
                return item !== value;
            })
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
