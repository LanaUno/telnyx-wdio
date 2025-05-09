exports.config = {
    runner: "local",
    specs: ["./test/specs/**/*.js"],
    exclude: [
    ],
    maxInstances: 1,
    capabilities: [
        {
            browserName: "chrome",
            "goog: chromeOptions": {
                args: [
                    "--headless=new",
                    "--no-sandbox",
                    "--disable-dev-shm-usage",
                ],
            }
        },
    ],
    logLevel: "silent",
    bail: 0,
    baseUrl: "https://www.telnyx.com/",
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: "mocha",
    reporters: [
        "spec",
        ['allure', {outputDir: 'allure-results'}]
    ],
    mochaOpts: {
        ui: "bdd",
        timeout: 60000,
    },
    afterTest: async function (
        test,
        context,
        { error, result, duration, passed, retries }
    ) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },
};
