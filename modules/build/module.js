Ext.builder = {};
// Loader.require(['Base', 'Factory'], false);

/**
 * @class Ext.builder.Builder
 * @extends Object
 * Builds a given project
 */
Ext.builder.Builder = Ext.extend(Object, {

    name: "Builder",
    version: "0.0.1",
    
    constructor: function(config) {
        Ext.apply(this, config);
        
        Cli.call(this);
    },
    
    initArguments: function() {},
    
    usage: [
        'Example usage:',
        'Arguments in square brackets are optional',
        '',
        'Building your app:',
        '    ./sencha build',
        ''
    ],

    run: function() {
        var file = "deploy/index.html";
        
        if (Fs.exists(file)) {
            this.updateTimestamps(file);
        } else {
            this.generateIndex(file);
        }
        Logger.log("This feature is not implemented yet....");
    },
    
    /**
     * Updates the cache-buster timestamp on each stylesheet and javascript include on the given page
     */
    updateTimestamps: function(file) {
        
    },
    
    /**
     * Generates a default production index.html file for a deploy
     */
    generateIndex: function(file) {
        
    }
});

Ext.regDispatchable('build', Ext.builder.Builder);
