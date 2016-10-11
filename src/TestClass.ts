import * as $ from 'jquery';

export default class TestClass {
  
  constructor() {
    console.log('Initialized TestClass');
    this.initListeners();
  }

  initListeners() {
    let that = this;
    $(document).on('click', 'button', function() {
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