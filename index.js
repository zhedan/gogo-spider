var http = require("http");
function fetch_url(url) {
    if ( !url.startsWith('http://')) {
        url = `http://${url}`;
    }
    var url_o = new URL(url);
    var options = {
        hostname: url_o.host,
        port: url_o.port || 80,
        path: url_o.pathname,
        method: "GET",
        headers: {
            "UserAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0",
        }
    };

    var req = http.request(options, function(res) {
        res.on("data", function(chunk) {
            console.log(chunk.toString());
        });
    });
    req.end();
}


url = process.argv.slice(2);
console.log(url[0]);
fetch_url(url[0]);
