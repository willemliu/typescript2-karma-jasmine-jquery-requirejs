[![Build Status](https://travis-ci.org/willemliu/typescript2-karma-jasmine-jquery-requirejs.svg?branch=master)](https://travis-ci.org/willemliu/typescript2-karma-jasmine-jquery-requirejs)
[![Coverage Status](https://coveralls.io/repos/github/willemliu/typescript2-karma-jasmine-jquery-requirejs/badge.svg?branch=master)](https://coveralls.io/github/willemliu/typescript2-karma-jasmine-jquery-requirejs?branch=master)

# typescript2-karma-jasmine-jquery-requirejs
Showcase unit testing of TypeScript 2 project with jQuery and RequireJS through Karma and Jasmine.
This project is an example on how to setup Unit Testing in a TypeScript 2 project using Karma as test runner and Jasmine as test framework.
The project code itself tries to mimic a simplistic real-life example. It does that by using RequireJS as module loader and including jQuery as JavaScript library.

## Installation
Clone this project and follow these steps to get it up and running on your own computer.

1. Install [NodeJS](https://nodejs.org/en/) and NPM for your system
1. Install [TypeScript](https://www.typescriptlang.org/) globally: `npm install -g typescript`
1. Install Node project dependecies: `npm install`
1. Install [Gulp](http://gulpjs.com/) globally: `npm install -g gulp`

## Run tests
You can use either `gulp test` or it's alias `npm test` to run the karma test runner.

## Build project
You can run `gulp` to build the project. Eventually when the build completes you'll find all the necessary files in the `dist/` folder.
It's possible to serve the files in this folder as a static website. You can use a simple webserver like `http-server` for testing purposes.
For easier debugging you could also serve the `build/` folder as static website. The uncompressed JavaScripts will be served when you load the index.html from that location.
