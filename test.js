var should = require('should'),
    factorialFun = require('./factorialFun');

describe('FactorialFun', function () {

    describe("factorial test",function(){
        it('positive factorial',function(done){
            factorialFun.factorial(6).should.equal(720);
            done();
        });

        it('negative factorial',function(done){
            try{
                factorialFun.factorial(-6);
            } catch (e){
                (e.message).should.equal("Value must be non negative");
                console.log(e);
            }
            done();
        });

        it('decimal factorial',function(done){
            try{
                factorialFun.factorial(6.5);
            } catch (e){
                (e.message).should.equal("Value must be a whole number");
                console.log(e);
            }
            done();
        });
    });

    describe("sum of numbers test",function() {
        it('sum of numbers',function(done){
            factorialFun.sumOfDigit("720").should.equal(9);
            done();
        });

        it('sum of numbers not string',function(done){
            try{
                factorialFun.sumOfDigit(720);
            } catch (e){
                (e.message).should.equal("argument must be string");
                console.log(e);
            }
            done();
        });

        it('sum of numbers not digit',function(done){
            try{
                factorialFun.sumOfDigit("abc");
            } catch (e){
                (e.message).should.equal("Not all values are digits");
                console.log(e);
            }
            done();
        });
    });

});
