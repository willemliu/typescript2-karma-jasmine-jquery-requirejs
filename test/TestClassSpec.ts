/// <reference path="../index.d.ts" />
import * as $ from 'jquery';
import TestClass from '../src/TestClass';


describe('TestClass', () => {
    
    var subject : TestClass = new TestClass();
    
    var html = ''.concat(
      '<input id="inputOne" type="number" value="15"> + ',
      '<input id="inputTwo" type="number" value="17">',
      '<button type="buttom">Add</button>',
      '<label id="result"></label>'
    );

    beforeEach(function () {
      console.log('==> TestClassSpec.ts start');
      document.body.innerHTML = html;
    });

    afterEach(function () {
      document.body.innerHTML = '';
      console.log('<== TestClassSpec.ts done');
    });

    
    describe('#jquery', () => {
      it('should count the occurrences of document', () => {
        var result : number = subject.doJquery();
        expect(result).toBe(1);
      });
    });
    
    describe('#add', () => {
      it('should add 2 + 5 together', () => {
        var result : number = subject.add(2, 5);
        expect(result).toBe(7);
      });
      
      it('should add values of input fields together', () => {
        $('button').click();
        expect($('#result').text()).toBe('32');
      });
    });
});