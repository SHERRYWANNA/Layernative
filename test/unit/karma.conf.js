// Karma configuration
// Generated on Thu Aug 16 2018 11:09:37 GMT+0800 (中国标准时间)

var webpack = require('webpack');
var VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai'],


    // list of files / patterns to load in the browser
    files: [
      'test/unit/**/*.spec.js'
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'test/unit/**/*.spec.js': ['webpack']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['coverage-istanbul'],

    coverageIstanbulReporter: {
        dir: 'coverage/',
        reports: ['text-summary', 'html'],
        fixWebpackSourcePaths: true
    },


    // web server port
    port: 9877,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    webpack: {
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    use: [{
                        loader: 'vue-loader',
                        options: {
                            loaders: {
                                js: 'babel-loader'
                            },
                            preLoaders: {
                                js: 'istanbul-instrumenter-loader?esModules=true'
                            }
                        }
                    }],
                    exclude: '/node_modules/'
                },
                {
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            plugins: ['istanbul']
                        }
                    },
                    exclude: '/node_modules/'
                },
                {
                    test: /\.js$/,
                    enforce: 'post',
                    use: [{
                        loader: 'istanbul-instrumenter-loader',
                        options: {
                            esModules: true
                        }
                    }],
                    exclude: '/node_modules/',
                    include: '/src/'
                },
                {
                    test: /\.css$/,
                    use: [
                        'vue-style-loader',
                        'css-loader'
                    ],
                    exclude: '/node_modules/'
                }
            ]
        },
        plugins: [
            new VueLoaderPlugin()
        ],
        resolve: {
            alias: {
                vue: 'vue/dist/vue.js'
            }
        }
    }
  });
};
