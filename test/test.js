const assert = require('assert');
const app = require('../problem1/app.js');

describe('Problem #1 Testing', function() {

    describe('Add', function() {
        it('Should return 4 when given 2 & 2', function() {
            assert.equal(app.addition(2,2), 4);
        })
    })

    describe('Sub', function() {
        it('Should return 4 when given 6 & 2', function() {
            assert.equal(app.subtraction(6,2), 4);
        })
    })

    describe('Mul', function() {
        it('Should return 4 when given 2 & 2', function() {
            assert.equal(app.multiplication(2,2), 4);
        })
    })

    describe('Div', function() {
        it('Should return 2 when given 12 & 6', function() {
            assert.equal(app.division(12,6), 2);
        })
    })


})