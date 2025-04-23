# telnyx-wdio
Prepare and test

1. Install Node version 20.15.0
2. NPM version 10.7.0
3. Clone repository https://github.com/LanaUno/telnyx-wdio.git
4. Go to the folder telnyx-wdio: cd ./telnyx-wdio
5. To install all dependencies use "npm install"
6. Run 'npm run wdio' in the terminal to run tests
8. Scripts to run separate specs or another browser:
 to run separate spec in Chrome:
    npx wdio run ./wdio.conf.js --spec recieve-call.e2e.js
    npx wdio run ./wdio.conf.js --spec global.e2e.js
    npx wdio run ./wdio.conf.js --spec contact-us.e2e.js
    npx wdio run ./wdio.conf.js --spec partnership.e2e.js
    npx wdio run ./wdio.conf.js --spec register.e2e.js
to run all specs in Firefox:
    npm run ff
to run separate spec in Firefox:
    npx wdio run ./wdio.ff.conf.js --spec register.e2e.js
to run specs with ENV variables change "powershell" to "cmd" in VS Code terminal and run:
    SET ENV=QA, press "Enter"
    and in the next line type:
    npx wdio run ./wdio.env.conf.js
to run separate spec with ENV variables:
    SET ENV=QA, press "Enter"
    npx wdio run ./wdio.env.conf.js --spec recieve-call.e2e.js
9. To run allure report switch terminal to "cmd" and type following:
    npx allure generate allure-results --clean && allure open
