/// <reference path="../../typings/index.d.ts" />
import TestClass from '../src/TestClass';


describe('TestClass', () => {
    
    var subject : TestClass = new TestClass();

    beforeEach(function () {
      console.log('Next test');
    });

    afterEach(function () {
      console.log('Test done');
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
    });
});