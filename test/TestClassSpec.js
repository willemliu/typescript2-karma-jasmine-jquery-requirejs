"use strict";
/// <reference path="../typings/index.d.ts" />
var $ = require('jquery');
var TestClass_1 = require('../src/TestClass');
describe('TestClass', function () {
    var subject = new TestClass_1["default"]();
    var html = ''.concat('<input id="inputOne" type="number" value="15"> + ', '<input id="inputTwo" type="number" value="17">', '<button type="buttom">Add</button>', '<label id="result"></label>');
    beforeEach(function () {
        console.log('==> TestClassSpec.ts start');
        document.body.innerHTML = html;
    });
    afterEach(function () {
        document.body.innerHTML = '';
        console.log('<== TestClassSpec.ts done');
    });
    describe('#jquery', function () {
        it('should count the occurrences of document', function () {
            var result = subject.doJquery();
            expect(result).toBe(1);
        });
    });
    describe('#add', function () {
        it('should add 2 + 5 together', function () {
            var result = subject.add(2, 5);
            expect(result).toBe(7);
        });
        it('should add values of input fields together', function () {
            $('button').click();
            expect($('#result').text()).toBe('32');
        });
    });
});
