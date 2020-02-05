const express = require("express");
const mysql = require("mysql");
const app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(methodOverride());

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Origin not allowed by CORS"));
    }
  }
};

app.options("*", cors(corsOptions));

const allowedOrigins = [
  "capacitor://localhost",
  "ionic://localhost",
  "http://localhost",
  "http://localhost:8080",
  "http://localhost:8100",
  "http://localhost:8101"
];

const db = mysql.createPool({
  connectionLimit: 100,
  host: "182.50.133.88",
  user: "foodie",
  password: "foodie12345",
  database: "foodie"
});

db.getConnection(err => {
  console.log("Connecting mySQL....");
  if (err) {
    throw err;
  }

  console.log("mysql connected....");
  db.query("select * from pdp_profile;", function(err2, result, field) {
    if (!err2) {
      console.log(result);
    } else {
      console.log(err2);
    }
  });
});

app.get("/discoverprofiles", cors(corsOptions), function(request, response) {
  console.log("Connected to /discoverprofiles");
  db.query(
    "SELECT * FROM foodie.pdp_profile INNER JOIN foodie.pdp_menu ON foodie.pdp_profile.fName = foodie.pdp_menu.fName;",
    function(err, result, fields) {
      if (err) {
        console.log("Error message: ", err);
        throw err;
      }
      string = JSON.stringify(result);
      json = JSON.parse(string);
      response.send(json);
      console.log(json);
    }
  );
});

app.get("/getmenu", cors(corsOptions), function(request, response) {
  console.log("Connected to /getmenu");
  db.query("SELECT * FROM foodie.pdp_menu_items", function(
    err,
    result,
    fields
  ) {
    if (err) {
      console.log("Error message: ", err);
      throw err;
    }
    string = JSON.stringify(result);
    json = JSON.parse(string);
    response.send(json);
    console.log(json);
  });
});

app.get("/getpdpprofile", cors(corsOptions), function(request, response) {
  console.log("Connected to /getmenu");
  var name = request.body.name;
  const statement =
    "SELECT id FROM foodie.pdp_profile WHERE fName = '" + name + "'";
  db.query(statement, function(err, result, fields) {
    if (err) {
      console.log("Error message: ", err);
      throw err;
    }
    string = JSON.stringify(result);
    json = JSON.parse(string);
    response.send(json);
    console.log(json);
  });
});

app.route("/addUser", cors(corsOptions)).post(function(request, response) {
  console.log("In addUser");

  var UID = request.body.userID;
  var Name = request.body.userName;
  var Password = request.body.userPassword;
  var Type = request.body.userType;

  db.query("SELECT * FROM food_information;", function(error, result, fields) {
    if (!error) {
      if (result.length == 0) {
        response.send(false);
      } else {
        db.query(
          "INSERT INTO userInfo (userID,userPassword, userName, userType) VALUES (?,?,?,?);",
          [UID, Password, Name, Type],
          function(error, result, fields) {
            // update
            if (!error) {
              var string = JSON.stringify(result);
              var json = JSON.parse(string);
              console.log("Row inserted:", json);
            } else {
              console.log(error);
            }
            response.send(true);
          }
        );
      }
    } else {
      console.log(error);
    }
  });
});

app.route("/makeBooking", cors(corsOptions)).post(function(request, response) {
  // Values from JSON in editStudent.page.ts
  var bookDate = request.body.bookDate;
  var bookTime = request.body.bookTime;
  var bookPax = request.body.bookPax;
  var bookNotes = request.body.bookNotes;
  var name = request.body.name;
  var menuId = request.body.menuID;

  const statement =
    "SELECT id FROM foodie.pdp_profile WHERE fName = '" + name + "'";
  db.query(statement, function(error, result, fields) {
    if (!error) {
      var pdpIdString = JSON.stringify(result);
      var pdpJson = JSON.parse(pdpIdString);
      var pdpId = pdpJson[0].id;
      db.query("SELECT * FROM booking_detail", function(error, result, fields) {
        if (!error) {
          if (result.length == 0) {
            response.send(false);
          } else {
            db.query(
              "INSERT INTO booking_detail (bookDate, bookTime, bookPax, bookNotes, custID, pdpID, menuID) VALUES (?,?,?,?,?,?,?);",
              [bookDate, bookTime, bookPax, bookNotes, pdpId, menuId, 1],
              function(error, result, fields) {
                if (!error) {
                  var string = JSON.stringify(result);
                  var json = JSON.parse(string);
                  console.log("Row inserted: ", json);
                } else {
                  response.send(true);
                }
              }
            );
          }
        } else {
          console.log(error);
        }
      });
    }
  });

  // db.query(
  //   "UPDATE userInfo SET userName = ?,userPassword = ?,userType = ? WHERE userID = ?;",
  //   [Name, Password, Type, UID],
  //   function(err, result, fields) {
  //     if (err) {
  //       console.log("Error message:", error);
  //       throw error;
  //     } else {
  //       response.send("sucessfully updated!");
  //     }
  //   }
  // );
});

app.route("/updateUser", cors(corsOptions)).post(function(request, response) {
  // Values from JSON in editStudent.page.ts
  var UID = request.body.userID;
  var Name = request.body.userName;
  var Password = request.body.userPassword;
  var Type = request.body.userType;

  db.query(
    "UPDATE userInfo SET userName = ?,userPassword = ?,userType = ? WHERE userID = ?;",
    [Name, Password, Type, UID],
    function(err, result, fields) {
      if (err) {
        console.log("Error message:", error);
        throw error;
      } else {
        response.send("sucessfully updated!");
      }
    }
  );
});

app.route("/deleteUser", cors(corsOptions)).post(function(request, response) {
  var UserID = request.body.userID;
  db.query("SELECT * FROM userInfo WHERE userID = ?;", [UserID], function(
    err1,
    result1,
    fields1
  ) {
    if (result1.length > 0) {
      db.query("DELETE FROM userInfo WHERE userID = ?;", [UserID], function(
        err,
        result,
        fields
      ) {
        if (err) {
          console.log("Error message: ", error);
          throw error;
        } else {
          console.log("successfully updated!");
        }
      });
      response.send(true);
    } else {
      response.send(false);
    }
  });
});

//Add this to display something on the screen
app.get("/", (_req, res) => {
  res.json("Welcome to my 1st node.js app hosted in Heroku Testing 123");
});

var checkInfo = false;
app
  .route("/login", cors(corsOptions))
  .post(function(request, response) {
    var AdminNum = request.body.AdminNum;
    var Password = request.body.Password;
    var IMEINo = request.body.IMEINo;
    // Check account details and imei no.
    db.query(
      "SELECT * FROM userInfo WHERE userID = ? AND userPassword = ?;",
      [AdminNum, IMEINo],
      function(error, result, fields) {
        if (!error) {
          console.log(result);
        } else {
          console.log(error);
        }
        if (result.length > 0) {
          if (res == true) {
            response.send(result);
            correctAdmin = AdminNum;
            checkInfo = true;
          } else {
            response.send(null);
            checkInfo = false;
          }
        } else {
          response.send(null);
          checkInfo = false;
        }
      }
    );
  })
  .get(function(request, response) {
    if ((checkInfo = true)) {
      db.query(
        "SELECT * FROM StudentRecord WHERE StudentID = ?;",
        [correctAdmin],
        function(error, result, fields) {
          if (error) {
            console.log("Error message: ", error);
            throw error;
          }
          console.log(result);
          response.send(result);
        }
      );
    } else {
      response.send("Error authenticating!");
    }
  });

//Basic things to include
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), function() {
  console.log("Application starting");
  console.log("Listening to Port", app.get("port"));
});
