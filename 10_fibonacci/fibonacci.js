const fibonacci = function(n) {
    if(n instanceof String){
        n = parseInt(n);
    }
    if(n<0){
        return "OOPS";
    }
    if(n===0){
        return 0;
    }
    else{
        let a = 0;
        let b = 1;
        let s = 0;
        if(n<=2){
            return 1;
        }
        else{
            for(let i=2;i<=n;i++){
            s = a + b;
            a = b;
            b = s;
            }
        return b;
    }
    }
};

// Do not edit below this line
module.exports = fibonacci;
