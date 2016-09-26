/// <reference path="../typings/index.d.ts" />
import * as $ from 'jquery';

export default class TestClass {
  
  constructor() {
    console.log('Initialized TestClass');
    this.initListeners();
  }

  initListeners() {
    let that = this;
    $('button').click(function() {
      $('#result').text(that.add(parseInt($('#inputOne').val()), parseInt($('#inputTwo').val())));
    });
  }
  
  doJquery() : number {
    return $(document).length;
  }
  
  add(x : number, y : number) : number {
      return x + y;
  }
}