var express = require('express');
let app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', function(req, res) { 
	res.render('pages/index');
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running`);
});
