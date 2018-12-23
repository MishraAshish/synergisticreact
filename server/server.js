var express = require("express"),
    bodyparser = require("body-parser"),
    methodOverride = require("method-override"),
    app = express(),
    port = process.env.PORT || 9000,
    root = __dirname;
    global.__base = __dirname + '/';

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json({limit:'200mb', type:'application/x-www-form-urlencoding', extended: true}));
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(root));

var router = require('./router');
app.use('/', router);

app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);
exports = module.exports = app;