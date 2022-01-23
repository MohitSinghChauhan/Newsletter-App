const express = require('express');
const bodyParser = require('body-parser');
// const request = require('request');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', (req, res) => {
    console.log(req.body);
    
    res.sendFile(__dirname + '/thanksPage.html');
    
})


// b696f8b30d1b705f7ebe08ba59c9f465-us20

// 2ed785b1c6



const PORT = (process.env.PORT || 3000);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
