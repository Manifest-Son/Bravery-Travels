import express from express;

const app = express();

app.get("/", (req, res) => {
    res.send("This is an API Example")
})

app.listen("3000", () => {
    console.log("The server is running on port 3000...")
})