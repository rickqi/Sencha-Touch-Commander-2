/**
 * @class Ext.generator.Store
 * @extends Ext.generator.Base
 * Generates a store for a given model
 */
Ext.generator.Store = Ext.extend(Ext.generator.Base, {
    generate: function() {
        this.headline("Generating the " + this.name + " store");
        
        var storeFile = "app/store/" + this.name + '.js';
        
        this.template("app/store/Store.js", this, storeFile);
        this.insertInclude(storeFile, 'sencha-stores');
    },
    
    decodeArgs: function(args) {
        this.name = args[0];
    }
});

Ext.regGenerator('store', Ext.generator.Store);
