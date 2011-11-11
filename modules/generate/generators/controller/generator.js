/**
 * @class Ext.generator.Controller
 * @extends Ext.generator.Base
 * Generates a Controller file based on a template
 */
Ext.generator.Controller = Ext.extend(Ext.generator.Base, {

    generate: function() {
        var controllerFile     = 'app/controller/' + this.name + '.js',
            controllerSpecFile = 'test/unit/controller/' + this.name + '.js';
        
        this.headline("Generating the " + this.name + " controller");
        
        this.template('app/controller/Controller.js',           this, controllerFile);
        this.template('test/unit/controller/ControllerSpec.js', this, controllerSpecFile);
        
        this.insertInclude(controllerFile, 'sencha-controllers');
        this.insertInclude('../../' + controllerFile,          'app-controllers',  'test/unit/index.html');
        this.insertInclude('controller/' + this.name + '.js', 'spec-controllers', 'test/unit/index.html');
    },
    
    decodeArgs: function(args) {
        this.name = args[0];
        this.actions = args.slice(1);
    }
});

Ext.regGenerator('controller', Ext.generator.Controller);
