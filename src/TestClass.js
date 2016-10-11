"use strict";
/// <reference path="../typings/index.d.ts" />
var $ = require('jquery');
var TestClass = (function () {
    function TestClass() {
        console.log('Initialized TestClass');
        this.initListeners();
    }
    TestClass.prototype.initListeners = function () {
        var that = this;
        $(document).on('click', 'button', function () {
            $('#result').text(that.add(parseInt($('#inputOne').val()), parseInt($('#inputTwo').val())));
        });
    };
    TestClass.prototype.doJquery = function () {
        return $(document).length;
    };
    TestClass.prototype.add = function (x, y) {
        return x + y;
    };
    return TestClass;
}());
exports.__esModule = true;
exports["default"] = TestClass;
