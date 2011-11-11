Ext.quality = {};

Ext.quality.Coverage = Ext.extend(Object, {

    name: "Coverage",
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
        'Generating an application:',
        '    ./sencha coverage',
        ''
    ],

    run: function() {
	    Logger.log('This feature is not implemented yet....');
    }

});

Ext.regDispatchable('coverage', Ext.quality.Coverage);
