/**
 * @class Ext.CommandDispatcher
 * @extends Object
 * Dispaches to the relevant Cli subclass from the command line 'sencha' command. e.g.
 * sencha generate xyz is dispatched to whichever Ext.Cli subclass registered itself to
 * handler the 'generate' command (Ext.generator.Factory in this case).
 */
Ext.CommandDispatcher = {
    types: {},
    
    dispatch: function(module, args) {
        try {
            new this.types[module]({args: args});
        } catch (e) {
            Logger.log("Dispatching of command failed please check your input");
        }
    }
};

Ext.regDispatchable = function(name, constructor) {
    Ext.CommandDispatcher.types[name] = constructor;
};