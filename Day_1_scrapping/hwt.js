// undefined
// declare
// let varName;
// // console.log(varName);
// varName=1;
// varName="jfbdjs";
// varName=[1,2,3,4];
// console.log(varName);
// /npm
// npm install cheerio
// npm install request
let req = require("request");
// /core module
let fs = require("fs");
let hwtname = null;
let hw = 0;
let cheerio = require("cheerio");
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/sunrisers-hyderabad-vs-royal-challengers-bangalore-3rd-match-1216534/full-scorecard";
// url pass=> function
req(url, gethtml);
console.log("send req");
function gethtml(err, header, html) {
    //  header => html header
    if (err) {
        console.log("some error occurred");
    } else {
        //  console.log(html);
        console.log("recieved html");
        let fTool = cheerio.load(html);
        // html find 
        let innings = fTool
        (".card.content-block.match-scorecard-table .Collapsible");
        let fIhtml = "";
        for (let i = 0; i < innings.length; i++) {
            //  fIhtml+= fTool(innings[i]).html();
            //  fIhtml+="</br>";
            //  fIhtml+="*****************************************************************";
            // page find
            // first -> rows get 
            let cInning = fTool(innings[i]);
            console.log("Inning" + i);
            // 
            let cIPlayers = cInning.find
            (".table.bowler tbody tr");
            for (let player = 0; player < cIPlayers.length; player++) {
                // sleector children find
                let allCols = fTool(cIPlayers[player]).find("td");
                let name = fTool(allCols[0]).text();
                let wickets = fTool(allCols[4]).text();
                // console.log("Name: " + name + " wickets : " + wickets)
                getHighest(name, wickets);
            }
            //  console.log(cIPlayers.length);
            console.log("````````````````````````````````````````");
        }
        console.log("````````````````````````````````````````");
        console.log("Highest wicket taker "+ hwtname+" with wickets "+hw);
        //   console.log(innings.length);
        console.log("Highest wicket Taket")
        fs.writeFileSync("innings.html", fIhtml);
    }
}
function getHighest(name, wicket) {
    wicket = Number(wicket);
    if (wicket > hw) {
        hwtname = name;
        hw = wicket;
    }
}
