# typescript2-karma-jasmine-jquery-requirejs
Showcase TypeScript 2 unit test with Karma, Jasmine, jQuery and RequireJS.
This project is an example on how to setup Unit Testing in a TypeScript 2 project using Karma as test runner and Jasmine as test framework.
The project code itself tries to mimic a simplistic real-life example. It does that by using RequireJS as module loader and including jQuery as JavaScript library.

## Installation
Clone this project and follow these steps to get it up and running on your own computer.

1. Install [NodeJS](https://nodejs.org/en/) and NPM for your system
1. Install [TypeScript](https://www.typescriptlang.org/) and NPM for your system
1. Install Node project dependecies: `npm install`
1. Install [Gulp](http://gulpjs.com/) globally: `npm install -g gulp`
1. Install [Typings](https://github.com/typings/typings) globally: `npm install -g typings`. [Typings](https://github.com/typings/typings) is a TypeScript Definition Manager
1. Install [Typings](https://github.com/typings/typings) definitions for the project `typings install`

## Run tests
You can use either `gulp test` or it's alias `npm test` to run the karma test runner.

## Build project
You can run `gulp` to build the project. Eventually when the build completes you'll find all the necessary files in the `dist/` folder.
It's possible to serve the files in this folder as a static website. You can use a simple webserver like `http-server` for testing purposes.
For easier debugging you could also serve the `build/` folder as static website. The uncompressed JavaScripts will be served when you load the index.html from that location.