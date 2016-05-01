require.config({
    baseUrl: '/',

    paths: {
        is: './vendor/is_js/is',
        EventEmitter: './vendor/eventEmitter/EventEmitter',
        jquery: './vendor/jquery/dist/jquery',
        underscore: './vendor/underscore/underscore',
        bootstrap: './vendor/bootstrap/dist/js/bootstrap',
        react: './vendor/react/react-with-addons',
        reactDom: './vendor/react/react-dom',
        flux: './vendor/flux/dist/Flux',
        text: './vendor/requirejs-text/text',
        jsx: './vendor/jsx-requirejs-plugin/js/jsx',
        JSXTransformer: './vendor/jsx-requirejs-plugin/js/JSXTransformer'
    },
    jsx: {
        fileExtension: '.jsx'
    },
    shim: {
        mdl: {
            exports: 'componentHandler'
        }
    },
    deps: ['./app/app.js']
});