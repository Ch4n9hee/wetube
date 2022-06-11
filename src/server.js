import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express();
const logger = morgan("dev");

const handleHome = (req, res) => {
    return res.send("Home");
};
app.use(logger);
app.get("/", handleHome);


const handleListening = () => console.log(`Server Listeining on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

