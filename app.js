var express = require('express');
let app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', function(req, res) { 
	res.render('pages/index');
});

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});
