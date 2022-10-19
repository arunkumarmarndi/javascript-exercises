const palindromes = function (the_string) {
    the_string = the_string.toLowerCase();
    let reg = /[\s-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/g
    let filtered_string = the_string.replace(reg,"");
    let reversed_string = filtered_string.split('').reverse().join('');
    if(filtered_string === reversed_string){
        return true;
    }
    else{
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
