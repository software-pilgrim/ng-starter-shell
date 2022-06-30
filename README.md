# ng-start-sp
Schematics project for Software Pilgrim Angular Starter Shell

### Usage
Install Angular CLI with  

```bash
npm install @angular/cli -g
```

Using Angular cli run the schematics like

```bash
ng add ng-start-sp
```

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with

```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!
