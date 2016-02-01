
var self = {
    factorial: function(x){
        if(x <0)
            throw new Error("Value must be non negative");
        if(!(x % 1 === 0))
            throw new Error("Value must be a whole number");
        if(x == 0)
            return 1;
        else{
            return x * (this.factorial(x-1));
        }
    },
    sumOfDigit: function(x){
        if(!typeof x == "string")
            throw new Error("argument must be string");
        var array = x.toString().split('');
        var sum =0;
        //var array = string.split('');
        array.forEach(function(y){
            sum += Number(y);
        });
        if(isNaN(sum)){
            throw new Error("Not all values are digits");
        }
        return sum;
    }
};

module.exports = self;
