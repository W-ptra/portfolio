import { logger } from "./logger.mjs";
import express from "express";
import cors from "cors";
import path from "path"; // Import the path module
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const url = "0.0.0.0";
const port = 8000;

// These two lines are necessary to get the __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors({ origin: '*' }));
app.use(express.static("web"));
app.use("/", logger);

app.get("/", (req, res) => {
    res.status(301).redirect("/home");
});

app.get("/home", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "./web/home.html"));
});
app.get("/about", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "./web/about.html"));
});
app.get("/skills", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "./web/skills.html"));
});
app.get("/project", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "./web/project.html"));
});
app.get("/resume", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "./web/resume.html"));
});

app.use((req, res, next) => {
    res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(port, url, () => {
    console.log(`Listening to ${url}:${port}`);
});
