var express = require('express');
var app = express();

var bodyParser = require('body-parser');
const { request } = require('express');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var ingredients = [
    {
        "id": 1,
        "text":"ham"
    },
    {
        "id": 2,
        "text":"cheese"
    },
    {
        "id": 3,
        "text":"potatoes"
    },
    {
        "id": 4,
        "text":"tomatoes"
    }
]

app.get('/', function(req, res) {
    res.send(ingredients);
});

app.get('/funions', function(req, res) {
    res.send("Yo give me some funions foo!")
});

app.post('/',function(req, res){
    var ingredient = req.body;
    if (!ingredient || ingredient.text == ""){
        res.status(500).send({error: "Your ingredient must have text"});
    } else {
        ingredients.push(ingredient);
        res.status(200).send(ingredients);
    }
});

app.listen(3000, function() {
    console.log("First API is running on port 3000");
});


// 发送数据
// 更改数据
// 数据非持久化， 下一章节需要用到数据库


// ----------------------------
// Find port
// netstat -ano | findstr 3000
// Kill port
// taskkill /T /F /PID 2391