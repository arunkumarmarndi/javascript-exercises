const reverseString = function(a) {
    var newString = "";
    if(a.length === 0){
        return "";
    }
    for (var i = a.length - 1; i >= 0; i--) {
        newString += a[i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
