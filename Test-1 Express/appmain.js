const express = require("express");
const fs = require("fs");
const path = require("path");


const app = express();
const PORT = 5000;
const LOGS_FILE = path.join(__dirname, "logs.json");

app.use(express.json());

function ensureLogsFile() {
    if (!fs.existsSync(LOGS_FILE)) {
        fs.writeFileSync(LOGS_FILE, "[]", "utf-8");
    }
}

function readLogs() {
     ensureLogsFile();

    const fileData = fs.readFileSync(LOGS_FILE, "utf-8");

    if (!fileData.trim()) {
        return [];
    }


    try {
        return JSON.parse(fileData);
    } catch (error) {
        fs.writeFileSync(LOGS_FILE, "[]", "utf-8");
        return [];
    }
}

function writeLogs(logs) {
    fs.writeFileSync(LOGS_FILE, JSON.stringify(logs, null, 2), "utf-8");
}


function createId() {
    return Date.now().toString();
}


app.post("/log", (req, res) => {
    const { topic, summary, duration } = req.body;

    const logs = readLogs();


    const newEntry = {
        id: createId(),
        topic,
        summary,
        duration,
        timestamp: new Date().toISOString(),
    };


    logs.push(newEntry);
    writeLogs(logs);


    // return res.status(201).json(newEntry);
    return res.json(newEntry);
});


app.get("/logs", (req, res) => {
    const logs = readLogs();
    return res.json(logs);
});


app.get("/logs/:topic", (req, res) => {
    const logs = readLogs();
    const topicParam = req.params.topic.toLowerCase();

    return res.json(topicParam);
});

app.get("/summary", (req, res) => {
    const logs = readLogs();

    // Total minutes
    let totalMinutes = 0;
    let topicCount = {};

    logs.forEach(entry => {
        totalMinutes += Number(entry.duration || 0);
        if (entry.topic) {
            topicCount[entry.topic] = (topicCount[entry.topic] || 0) + 1;
        }
    });

    // most read topic
    let mostReadTopic = Object.keys(topicCount).reduce((a, b) =>
        topicCount[a] > topicCount[b] ? a : b
    , null);

    return res.json({
        totalMinutes,
        mostReadTopic
    });
});



app.listen(PORT, () => {
     ensureLogsFile();

    console.log(`Server running on ${PORT}`);
});

