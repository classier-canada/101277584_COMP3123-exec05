const express = require('express');
const app = express();
const router = express.Router();

let userData = require('./user.json')

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req,res) => {
  res.send('home.html');
});

/*
- Return all details from user.json file to client as JSON format
*/


router.get('/profile', (req,res) => {

  res.send(userData);
});

/*
- Modify /login router to accept username and password as query string parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/

router.get('/login', (req,res) => {
  let username = req.query.username;
  let passsword = req.query.passsword;
  let response = {
    status: false,
    message: "Password is invalid"
  };

  if (username == userData.username && passsword == userData.password) {
    response = {
      status: true,
      message: "User Is valid"
    }
  }
  if (username != userJSON.username) {
    response = {
      status: false,
      message: "User Name is invalid"
    }
  }

  res.send(JSON.stringify(response));
});



/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout/:username', (req,res) => {
  let username = req.params.username;
  res.send(`<b>${username} successfully logout.<b>`);
});

app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));