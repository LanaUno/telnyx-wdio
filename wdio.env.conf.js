const envQa = 'https://www.telnyx.com/'
const envDev= 'https://www.dev.telnyx.com/'
let baseURL;
if(process.env.ENV == 'QA') {baseURL = envQa}
else if(process.env.ENV == 'DEV') {baseURL = envDev}
else {
    console.log("Please pass correct environment variable")
    process.exit()
}

exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
    ],  
    capabilities: [{
        maxInstances: 3,
        browserName: 'chrome',
        'goog: chromeOptions': {
            args: ['--headless',
          '--start-maximized',
          '--no-sandbox',
          '--disable-gpu',
          '--disable-dev-shm-usage',
          '--allow-insecure-localhost',
          '--ignore-certificate-errors',
          '--window-size=1440,735']
        },
    }],
    logLevel: 'silent',
    bail: 0,
    baseUrl: baseURL,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec',['allure', {outputDir: 'allure-results'}]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },
}
