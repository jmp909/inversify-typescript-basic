/// <reference path="./dts/require.d.ts" />
///<reference path='TestApp.ts'/>

/**
 * Main entry point for RequireJS
 */
require(
    [
        'TestApp'
    ],
    (TestApp) => {
        'use strict';
         var app = new TestApp();
    }
);
