const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Middleware to handle the admin route
app.get('/admin.html', (req, res) => {
    const adminCookie = req.cookies.AdminSessionToken;
    if (!adminCookie) {
        // Testing : If the admin cookie is not set, serve it to the user
        // Testing : res.cookie('isAdmin', 0);
        res.status(403).send('Access Denied');
    } else if (adminCookie === 'Admin.4.20.20' || adminCookie === 'Admin.4.21.20') {
        // If the admin cookie exists and has the value 'Admin.4.20.20' or 'Admin.4.21.20', serve the admin page
        res.sendFile(__dirname + '/public/admin.html');
    } else {
        // If the admin cookie exists but doesn't have the correct value, deny access
        res.status(403).send('Access Denied');
    }
});

app.get('/login', (req, res) =>{
    console.log(req);
    res.send("apple")
});

app.post("/login", (req, res) => {    
    // i dont actually care about login form 
    // info, its out of scope for this challenge 
    return res.redirect("login-failed.html");
})

// Middleware to serve static files (like HTML)
app.use(express.static('public'));
app.listen(3200);
