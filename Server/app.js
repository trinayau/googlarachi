const express = require('express')
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.send('Hello this is Googlarachi!');
// });

//array of webpages
const webpages = [
    "https://www.indomie.co.uk/", "https://www.samyangfoods.com/eng/index.do", "https://www.samyangfoods.com/eng/index.do", "https://www.koreafoods.co.uk/brand/ottogi/",
     "http://eng.nongshim.com/main/index", "https://nissinnoodles.co.uk/collections/ramen-noodles", "https://www.primataste.com/recipes/laksa-lamian", 
     "https://www.orientalmart.co.uk/bai-jia-chongqing-burning-dry-noodles-hot-and-sour-flavour", 
     "https://nongshimusa.com/homev2/bowl-noodle/chapaguri/", "https://www.potnoodle.com/"
];

//add functionality for returning search results -> send searchpage.html?

app.get('/', (req,res) => {
res.send("Googlarachi")
});

app.get('/search', (req,res) => {
    try {
        
    } catch(error) {
        console.error(error);
    } finally {
        console.log("tried to retrieve path")
    }
});

//function to return random webpage from webpages array
const randomPage = () => {
    const randomNum = Math.floor(Math.random() * webpages.length);
    return webpages[randomNum];
};
//redirecting user to a random webpage 
app.get('/random', (req,res) => {
    const selectedPage = randomPage(); //selectedpage = "ramen URL" from webpages index
    res.send(selectedPage);
});

module.exports = app; 
