# Sencha Command 

Sencha Command is a set of utilities that helps automate many parts of project development

Sencha Touch version: 2.0.0 PR2

## Generators

### Applications

To generate a new application:

    ./sencha generate app MyApp /optional/path/to/generated/app

### Models

To generate a model:

    ./sencha generate model User id:int name:string active:boolean

This creates a model called "User" with the given fields. It also creates an empty Jasmine spec
file for the model, and inserts script tags for the new files into the appropriate index.html file.

### Stores
To generate a store:
   
    ./sencha generate store User

This creates a store called "User" based on the model "User".

### Controllers

To generate a controller:

    ./sencha generate controller users list create update

This creates a controller called 'users', which has actions 'list', 'create' and 'update'. It also 
creates an empty Jasmine spec file for the controller, and inserts script tags for the new files into
the appropriate index.html file.

## Builder

This doesn't exist yet, but will look like the following;
The builder builds your application into a deployment-ready folder by combining all JavaScript into a
single file and minifying it. Building is simple:

    ./sencha build

The built application is placed in the 'deploy' folder.

## Coverage

Runs code coverage analysis on your application based on the application's test suite. Code coverage 
data is saved to the 'coverage' folder.

    ./sencha coverage

## Autotest

This doesn't exist yet, but will look like the following:

    ./sencha autotest

## Test

This doesn't exist yet, but will look like the following:

    ./sencha test

## Update

This doesn't exist yet, but will look like the following:

    ./sencha update /path/to/sencha/sdk
