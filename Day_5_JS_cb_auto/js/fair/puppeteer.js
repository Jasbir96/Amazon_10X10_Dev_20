const puppeteer = require("puppeteer");
const creds = require("../../../credentials");


let gPage;
let dropSelect = " #content  div.community-content > div   section.code-editor-section.split > div:nth-child(1) > div > div.hr-monaco-editor-wrapper > div > div:nth-child(1) > div.hr-monaco-editor-with-statusbar > div.hr-monaco-editor > div.editor-toolbar > div.toolbar-right > div.select-language.css-2b097c-container > div > div.css-1wy0on6 > div";
let gCode;
puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"]
}).then(function (browser) {
    console.log("browser opened");
    // list currently opened tabs
    let pagesP = browser.pages();
    return pagesP;
    // return undefined
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
}) .then(function () {
        return pageNavigation("a[data-attr1='arrays']");
    }).then(function () {
        return questionSolver();
    }).then(function () {
        console.log("Question submitted");
    })
    .catch(function (err) {
        console.log("err", err);
    });

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

function questionSolver() {
    return new Promise(function (resolve, reject) {
        gPage.waitForSelector(".challenge-submit-btn button", { visible: true })
            .then(function () {
                let qPageVP = pageNavigation(".challenge-submit-btn button");
                return qPageVP;
            }).then(function () {
                let epageVP = gPage.waitForSelector("div[data-attr2='Editorial']", { visible: true });
                return epageVP;
            }).
            then(function () {
                let epageP = pageNavigation("div[data-attr2='Editorial']");
                return epageP;
            }).then(function () {

                let codeElemP = gPage.$('section.challenge-editorial-block.editorial-tester-code .highlight');
                return codeElemP;
            }).then(function (codeElem) {
                let aCodeP = gPage.evaluate(function (codeElem) {
                    return codeElem.innerText;
                }, codeElem)
                return aCodeP;
            }).then(function (code) {
                gCode = code;
                
            }).then(function () {
                let problemVP = gPage.waitForSelector("div[data-attr2='Problem']", { visible: true });
                return problemVP;
            }).then(function () {
                let problePP = pageNavigation("div[data-attr2='Problem']");
                return problePP;
            }).then(function () {
                let dropDowVP = gPage.waitForSelector(dropSelect, { visible: true });
                return dropDowVP;
            }).then(function () {
                let dropCLickP = gPage.click(dropSelect);
                return dropCLickP;
            })
            .then(function () {
                let focusP = gPage.focus(".css-y9fljz-control");
                return focusP
            }).then(function () {
                let langListP = gPage.click(".css-y9fljz-control");
                return langListP;
            })
            .then(function () {
                let langTypeP = gPage.keyboard.type("Java 8");
                return langTypeP;
            })
            .then(function () {
                let aDownP = gPage.keyboard.press("ArrowDown");
                return aDownP;
            }).then(function () {
                let enterP = gPage.keyboard.press("Enter");
                return enterP
            }).then(function () {
                let testCaseCPP = gPage.click(".custom-input-checkbox");
                return testCaseCPP;
            }).then(function () {
                let codeVisP = gPage.waitForSelector(".custominput", { visible: true });
                return codeVisP;
            }).then(function () {
                console.log(1);
                let textAClickP = gPage.click(".custominput");
                return textAClickP;
            })
            .then(function () {
                console.log(2);
                let codeWillTypedP = gPage.type(".custominput", gCode);
                return codeWillTypedP;
            })
            .then(function () {
                let ctrlKeyP = gPage.keyboard.down("Control");
                return ctrlKeyP;
            }).then(function () {
                let ap = gPage.keyboard.press("a");
                return ap
            }).then(function () {
                let cp = gPage.keyboard.press("x");
                return cp;
            }).then(function () {
                let inputClickP = gPage.click(".monaco-editor.no-user-select.vs");
                return inputClickP;
            }).then(function () {
                let ca = gPage.keyboard.press("a");
                return ca;
            })
            .then(function () {
                let vp = gPage.keyboard.press("v");
                return vp;
            })
            .then(function () {
                let submitClickP = gPage.click(".pull-right.btn.btn-primary.hr-monaco-submit");
                return submitClickP
            }).then(function () {
                let ctrlPressedUpP = gPage.keyboard.up("Control");
                return ctrlPressedUpP;
            })
            .then(function () {
                console.log("reached editorial page")
                resolve();
            })
            .catch(function (err) {
                console.log(err);
                reject(err);
            })
    })
}
