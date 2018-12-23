var express = require("express");
router = express.Router();

var UserModel = require(__base+'usermodel'); 


// --api/delete user entered
router.post('/api/deluser', function(req, res) {
    console.log(req.body); // {"_id" : id}
    UserModel.findOneAndRemove(req.body, function(err, user) {
      if (err){
        res.send(err);
        return;
      }
      if (user == null) {
          res.send("Can't be deleted!");
          return;
      };
      // delete him
      user.remove(function(err) {
        if (err) {
          res.send(err);
          return;
        };

        console.log('user successfully deleted!');
        res.send(user);
        return;
      });
    });
  });



/// update user
router.post('/api/edituser', function(req, res) {
    console.log(req.body);    

    UserModel.findById(req.body._id, function(err, user) {
        if (err) {
            res.send(err);
            return;
        };

        if (user == null) {
            res.send("Can't be edited!");
            return;
        };

      user.Name = req.body.Name;
      user.Password = req.body.Password;
      // save the user
      user.save(function(err) {
        //if (err) throw err;
        if (err) {
          res.send(err);
          return;
        };

        console.log('user successfully updated!');
        res.send(user);
        return;
      });
    });
  });



//postuser
router.post('/api/createuser', (req, res) => { 
        
    console.log(req.body);        
    var modelObject = new UserModel({
        Name: req.body.user,
        Password: req.body.password
    });

    modelObject.save(function(err) {
        console.log(err);
        if (err) {
            res.send(err);
            return;
    };

    res.send("User Saved!");
            console.log('Data saved successfully!');
    }); 
});

//getuser
router.get('/api/getuser', (req, res) => {     
    console.log("Get all users");
    UserModel.find(function(err, users) {        

        if (err){
            console.log("got an error!");
            res.send(err);
        }
    
        console.log("we made in send response", users);
        res.json(users);
    });  
});


//name
router.get('/api/name', (req, res) => {    
    res.send({
        test:"Ashish",
        test:"Ashish",
        test:"Ashish"
    }); 
});

//Default call
router.get('*', (req, res) => { 
    console.log("I am in routes"); 
    res.sendfile('./index.html'); 
});

module.exports = router;


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }