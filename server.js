var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    
    'article-one': {
        title: 'Article One | Mohit K',
        heading: 'Article One',
        date: 'August 15, 2017',
        content: `  <p>
                        This is 1st Article.. This is 1st Article.. This is 1st Article.. This is 1st Article.. This is 1st Article.. This is 1st Article..
                    </p>
                    <p>
                        This is 1st Article.. This is 1st Article.. This is 1st Article.. This is 1st Article.. This is 1st Article.. This is 1st Article..
                    </p>
                    <p>
                        This is 1st Article.. This is 1st Article.. This is 1st Article.. This is 1st Article.. This is 1st Article.. This is 1st Article..
                    </p>`
    },
    'article-two': {
        title: 'Article Two | Mohit K',
        heading: 'Article Two',
        date: 'August 15, 2017',
        content: `  <p>
                        This is 2nd Article.. This is 2nd Article.. This is 2nd Article..
                    </p>
                    <p>
                        This is 2nd Article.. This is 2nd Article.. This is 2nd Article.. 
                    </p>
                    <p>
                        This is 2nd Article.. This is 2nd Article.. This is 2nd Article.. 
                    </p>`
    },
    'article-three': {
         title: 'Article Three | Mohit K',
        heading: 'Article Three',
        date: 'August 15, 2017',
        content: `  <p>
                        This is 3rd Article.. This is 3rd Article.. This is 3rd Article..
                    </p>
                    <p>
                        This is 3rd Article.. This is 3rd Article.. This is 3rd Article.. 
                    </p>
                    <p>
                        This is 3rd Article.. This is 3rd Article.. This is 3rd Article.. 
                    </p>`
    }
    
};

function createTemplate (data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `
    <html>
        
        <head>
        
            <title> ${title} </title>
            
            <link href="/ui/style.css" rel="stylesheet" />
            
        </head>
        
        <body>
            
            <div class="container">
                
                <div>
                    <a href="/">Home</a>
                </div>
                
                <hr>
                
                <h2>
                    ${heading}
                </h2>
                
                <div>
                    ${date}
                </div>
                
                <hr>
                
                <div>
                    ${content}
                </div>
                
            </div>
            
        </body>
        
    </html>
    ` ;
    
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req,res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
