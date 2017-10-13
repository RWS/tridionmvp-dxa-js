# DXA-JS

## Introduction
This is a baseline example of how to use DXA's model service to build a client-side MVC application. The build tools are supplied through Node.js and they use Gulp as a task runner. The product is a small set of JavaScript files that can be included into a page template. This is a small, light-weight JavaScript application for providing basic MVC examples. Below are some features that are provided:

* Support for browsers that do not support ES6+ natively (via Babel)
* Render component presentations from regions
* Render component template fragments based on semantic information
* Define Regions from markup in a page template

## Installation
This toolchain is based on node.js. Ensure that you are using a stable version of node, such as `8.0.0` or higher. Your version of NPM should be at least 
`5.0.0` or higher. 


After ensuring an up-to-date version of node and NPM: 
 
 1. download/clone the package. 
 2. run `npm install` in the client folder



## Settings and Configuration
There are a few settings in the client folder:

* `.eslintrc` is a configuration file using with a linting tool called ESlint. This is used to apply rules which this project's JavaScript should adhere too
* `.babelrc` is a configuration file used by a gulp task. It's not referenced in our codebase, but Babel wants it when it converts ES6 into JavaScript compliant for older browsers. 
* `package.json` defines the configuration for the entire project. It establishes what dependencies are needed and contains information that NPM can use later on. 
* `gulp/config.js` defines configuration for Gulp. This helps reduce redundancies between gulp tasks. 


## Folder Structure

* `assets` contains source files that can be edited. Currently, `assets` only contains a `js` folder, but in the future, this is where libraries and frameworks could be added, too
* `gulp` contains a gulp configuration and individual gulp tasks
* `build` is the final product that contains what would be added to your website


## Tasks
Gulp is the task runner for this project. `Gulpfile.js` is the entry point for Gulp, and it references only the tasks that are in the `gulp/tasks` folder. Each task is its own file so that it can be easier to add new tasks and track those changes in a version control system. 

Each Gulp task uses `require()` to bring in `config.js`, which is where common data is stored. 

### Task Breakdown
Any of these tasks can be run from the command line by typing `gulp [taskname]`. 

#### babel
Concatenates JavaScript, runs it through Babel, places the JavaScript file in the `build` folder

#### build
Concatenates JavaScript, places the JavaScript in the `build` folder. 

#### lint
Runs JavaScript through a linter. Errors and warnings will display in your terminal/command prompt

#### watch
Watches JavaScript files. Upon a change, runs lint and build

#### default
First Lints the JavaScript, then watches it. 

## Usage
Take the file(s) in the build folder, add them to your page(s).



