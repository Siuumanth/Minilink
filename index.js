import {express} from 'express';
const path = require("path");

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

const app = express();
const port = 3000;



app.post('/home', (req, res) => {
    const url = req.body.url;
    console.log(url);
})



app.use(express.static(__dirname));


app.get("/success", (req,res) => {
    res.sendFile(path.join(__dirname, "public", "success.html"), (err) => {
        if (err) {
            res.status(404).send("404 : File not FOUND");
        }
    });
})

// home route
app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "home.html"), (err) => {
        if (err) {
            res.status(404).send("404 : File not FOUND");
        }
    });
});





app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
