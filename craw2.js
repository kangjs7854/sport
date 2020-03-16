var request = require("request");
var cheerio = require("cheerio");
const url = require("url");
const fs = require("fs");

const bxjUrl = "https://juejin.im";
request(bxjUrl, function(err, result) {
  if (err) {
    console.log(err);
  }

  var $ = cheerio.load(result.body);
  // console.log($('title').text());
  
  $("entry-box>a").each(function(index, ele) {
    let $ele = $(ele);
    let href = url.resolve(bxjUrl, $ele.attr("href"));
    // let href = $ele.attr("href")
      // console.log(href);
  
    request(href, function(err, result) {
      if (err) {
        console.log(err);
      }
      let $ = cheerio.load(result.body);  
      console.log($("title").text());
      
      let title = $('.bbs-user .bbs-user-title').text()
      let video  = $('.bbs-thread-content>video').attr("src")
      let img = $('.bbs-thread-content>video').attr("poster")
      let name = $('.bbs-user-info-name').text()
      let time = $('.bbs-user-info-time').text()

      let data = {
          "name":name,
          "time": time,
          "title": title,
          "video": video,
          "img" : img,
          // "from": from,
          // "like": like 
      };

      // console.log(data.length);
      
      fs.appendFile("public/video2.json", JSON.stringify(data), "utf-8", function(err) {
        if (err) throw new Error("appendFile failed");
      })
    });
  });
});
