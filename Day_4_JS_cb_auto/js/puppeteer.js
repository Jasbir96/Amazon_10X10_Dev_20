const puppeteer = require("puppeteer");
const { email } = require("../../credentials");
const creds = require("../../credentials");

let gPage;
puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"]
}).then(function (browser) {
    console.log("browser opened");
    // list currently opened tabs
    let pagesP = browser.pages();
    return pagesP;
}).then(function (pages) {
    gPage = pages[0];
    let gPageP = gPage.goto("https://www.hackerrank.com/auth/login");
    return gPageP;
}).then(function () {
    let emailWillBeEnteredP = gPage.type("#input-1", creds.email);
    return emailWillBeEnteredP;
}).then(function () {
    let passWillEnteredP = gPage.type("#input-2", creds.pwd);
    return passWillEnteredP;
}).then(function () {
    return pageNavigation("button[data-analytics='LoginPassword']");
}).then(function () {
    return pageNavigation("#base-card-1-link");
}).then(function () {
    let waitForElementToAppear = gPage.waitForSelector("a[data-attr1='arrays']", { visible: true });
    return waitForElementToAppear;
})
    .then(function () {
        return pageNavigation("a[data-attr1='arrays']");
    }).then(function () {
        console.log("Arrays page opened");
    })
    .catch(function (err) {
        console.log("err", err);
    })

function pageNavigation(selector) {
    return new Promise(function (resolve, reject) {
        // wait for click and navigation
        let loginWillBePressedP = gPage.click(selector);
        let navP = gPage.waitForNavigation({ waitUntil: "networkidle2" });
        let gotoHomeP = Promise.all([loginWillBePressedP, navP]);
        gotoHomeP
            .then(function () {
                resolve();
            })
            .catch((err) => {
                reject(err);
            })

    })
}