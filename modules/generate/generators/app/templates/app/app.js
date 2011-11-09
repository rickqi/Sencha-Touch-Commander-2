/**
 * This file sets application-wide settings and launches the application when everything has
 * been loaded onto the page. By default we just render the application's Viewport inside the
 * launch method (see app/views/Viewport.js).
 */ 
Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name         : "{name}"
});
