const sumAll = function() {
    let a = arguments[0];
    let b = arguments[1];
    if((!Number.isFinite(a))||(!Number.isFinite(b))){
        return "ERROR";
    }
    else if(a < 0 || b < 0){
        return "ERROR";
    }
    if(a > b){  
        let c = a;
        a = b;
        b = c;
    }
    if(a === 1){
        return b*(b+1)/2;
    }
    else{
        let total = 0;
        for(let i=a;i<=b;i++){
            total = total + i
        }
        return total;
    }
};

// Do not edit below this line
module.exports = sumAll;
