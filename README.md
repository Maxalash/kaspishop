# Kaspishop

This is the analogue for the Kaspi Shop website by Kaspi. Created for Angular practice and example for other. Documentation is provided. Feel free to to go through them to understand the code.

## File structure

For the project structure I used Module based approach for its simplicity and main idea of short and simple code structures.

/src  
 |-- /app  
      |-- /[core](app/core/README.md) # Core services and singleton utilities like auth, logging  
      |-- /[home](app/home/README.md) # Home page components  
      |-- /[shared](app/shared/README.md) # Shared components, pipes, directives  
      |-- /app.component.ts # Root component  
      |-- /app.routes.ts # Root routing routing  
  
 |-- /assets # Project media and other assets  


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
