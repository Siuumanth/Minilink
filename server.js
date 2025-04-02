const express = require("express");
const path = require("path");

const app = express();
const port = 5000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));


app.get('/', (req, res) => {
    res.redirect('/home');
})



app.post('/home', async (req, res) => {
    const  url  = req.body.url;

    if (!url) {
        return res.status(400).json({ success: false, error: "Invalid URL" });
    }
    try {
        // 🔹 Check if URL is valid
        const response = await fetch(url, { method: "HEAD" });
console.log('response got')

        if (!response.ok) {
            return res.status(400).json({ success: false, error: "URL is not reachable" });
        }
        console.log(`${url} is valid ✅`);
        res.json({ success: true, redirect: "/success" });

    } catch (error) {
        res.status(400).json({ success: false, error: "URL validation failed",message:error });
    }
    console.log(url);
});


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
