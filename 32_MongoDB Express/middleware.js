const express = require('express'); 
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// This middleware runs for every request: To check logged in or not
app.use(function(req, res, next) {
    if (!req.query.loggedIn) {
        return res.send("Please login first"); // if called withoutn return then it will call next middleware and send response to client twice which is not possible and will throw error. So we need to return here.
    }
    console.log("Middleware-1");
    next();
});

// This middleware runs only for /image/upload or /image/upload/*
app.use('/image/upload', function(req, res, next) {
    console.log("Image compressed");
    next();
});

// This middleware runs only for /hi (get, post, put, delete need exact calls)
app.get('/hi', (req, res, next) => {
    res.send("Hi"); // This will send response to client and will not call next middleware
});

app.listen(4444, () => {
    console.log('http://localhost:', 4444);
});