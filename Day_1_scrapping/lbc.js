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
let cheerio = require("cheerio");
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/sunrisers-hyderabad-vs-royal-challengers-bangalore-3rd-match-1216534/ball-by-ball-commentary";
// url pass=> function
// functional programming
req(url, gethtml);
console.log("send req");
function gethtml(err, header, html) {
    //  header => html header
    console.log(err);
    console.log(header.statusCode);
    if (err) {
        console.log("some error occurred");
    } else {
        //  console.log(html);
        console.log("recieved html");
        //  fs.writeFileSync("commentry.html",html);
        // cheerio parse html 
        let fTool = cheerio.load(html);
        // element identifier 
        let allcomments = fTool(".d-flex.match-comment-padder.align-items-center");
        // html => all matching elemnt from the html
        console.log(allcomments.length);
        // html -> first selected elent html print
        // console.log(allcomments.html());
        let fullHtml = "";
        for (let i = 0; i < allcomments.length; i++) {
            // arr-> index access -> wrap ftoo
            fullHtml += fTool(allcomments[i]).html();
            fullHtml+="</br>";
        }
        // console.log(fullHtml);
        fs.writeFileSync("commentaryfull.html",fullHtml);
        console.log("File saved");
    }
}
