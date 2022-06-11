import express from "express";

const PORT = 4000;
const app = express();

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}
const handleListening = () => console.log(`Server Listeining on port http://localhost:${PORT} 🚀`);

const handleHome = (req, res) => {
    return res.send("사랑해 여보❤️");
};

app.get("/", logger, handleHome);

app.listen(PORT, handleListening);

