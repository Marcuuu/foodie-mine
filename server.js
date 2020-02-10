const express = require('express');
const mysql = require('mysql');
const app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
//babyG1
var cors = require('cors'); 

//babyG1
app.use(cors());

app.use(bodyParser.json());
app.use(methodOverride());

//babyG1
const corsOptions = {
    origin: (origin, callback) => {
       if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
       } 
	   else {
         callback(new error('origin not allowed by cors'));
       }
    }
}
//babyG1
app.options('*', cors(corsOptions));

//babyG1
const allowedOrigins = [
    'capacitor://localhost',
    'ionic://localhost',
    'http://localhost',
    'http://localhost:8080',
    'http://localhost:8100',
    'http://localhost:8101',
	'http://localhost:8200'
];


// Update the details if DB's details changed --important
const db = mysql.createPool({
    connectionLimit: 100,
    host: '182.50.133.88',
    user: 'foodie',
    password: 'foodie12345',
    database: 'foodie'
});

db.getConnection((err) => {
    console.log('Connecting mySQL.....');
    if (err) {
        throw err;
    }

    console.log('mySql connected....');
    db.query('show tables;', function (err2, result, field) {
        if (!err2) {
            console.log(result);
        }
        else {
            console.log(err2)
        }
    });
});

// here is where we store our '/users as json in our own heroku
//*/users' stored as json in   https://itj153herokusample.herokuapp.com/

//babyG1
//variable1
app.get('/updateDashboard',cors(corsOptions), function (request, response) {
    console.log('Connected to /updateDashboard');
    db.query('update foodie.booking_detail set booking_detail.bookStatus = "Completed" where (booking_detail.bookDate < curdate() and booking_detail.bookTime < curtime()) and booking_detail.bookStatus != "Cancelled";', function (err, result, fields) {
       if(err) {
           console.log('Error message: ', err);
           throw err;
        };
        var string = JSON.stringify(result);
        var json = JSON.parse(string)
        console.log(json);
        response.send(json)
        console.log(json);
    }) 
});

app.get('/getBookingsDashboard',cors(corsOptions), function (request, response) {
    console.log('Connected to /getBookingsDashboard');
    db.query('SELECT booking_detail.bookID, customer_profile.custName, DATE_FORMAT(booking_detail.bookDate, "%D %M %Y") AS bookDate, DATE_FORMAT(booking_detail.bookTime, "%h:%m %p") AS bookTime, booking_detail.bookPax, booking_detail.bookNotes, booking_detail.bookStatus from foodie.booking_detail inner join foodie.customer_profile on booking_detail.custID = customer_profile.custID WHERE (booking_detail.bookDate >= CURDATE() AND booking_detail.bookDate < CURDATE() + INTERVAL 7 DAY) AND (booking_detail.bookTime >= "13:00:00" AND booking_detail.bookTime < "21:00:00") AND booking_detail.bookStatus = "Ongoing" order by booking_detail.bookDate ASC, booking_detail.bookTime ASC;', function (err, result, fields) {
       if(err) {
           console.log('Error message: ', err);
           throw err;
        };
        var string = JSON.stringify(result);
        var json = JSON.parse(string)
        console.log(json);
        response.send(json)
        console.log(json);
    }) 
});

app.get('/getBookings',cors(corsOptions), function (request, response) {
    console.log('Connected to /getBookings');
    db.query('SELECT booking_detail.bookID, customer_profile.custName, DATE_FORMAT(booking_detail.bookDate, "%D %M %Y") AS bookDate, DATE_FORMAT(booking_detail.bookTime, "%h:%m %p") AS bookTime, booking_detail.bookPax, booking_detail.bookNotes, booking_detail.bookStatus from foodie.booking_detail inner join foodie.customer_profile on booking_detail.custID = customer_profile.custID order by booking_detail.bookDate ASC, booking_detail.bookTime ASC;', function (err, result, fields) {
       if(err) {
           console.log('Error message: ', err);
           throw err;
        };
        var string = JSON.stringify(result);
        var json = JSON.parse(string)
        console.log(json);
        response.send(json)
        console.log(json);
    }) 
});

app.post('/cancelBooking',cors(corsOptions), function (request, response) {
    console.log('Connected to /cancelBooking');
    var bookingID = request.body.bookingID;
    db.query('update foodie.booking_detail set booking_detail.bookStatus = "Cancelled" where booking_detail.bookID = ?;', [bookingID], function (err, result, fields) {
       if(err) {
           console.log('Error message: ', err);
           throw err;
        };
        var string = JSON.stringify(result);
        var json = JSON.parse(string)
        console.log(json);
        response.send(json)
        console.log(json);
    }) 
});

app.post('/updateProfile',cors(corsOptions), function (request, response) {
    console.log('Connected to /updateProfile');
    var profileName = request.body.profileName;
    var profileLocation = request.body.profileLocation;
    var profileDesc = request.body.profileDesc;
    var profilePhone = request.body.profilePhone;
    var profileEmail = request.body.profileEmail;
    var profileImg = request.body.profileImg;
    var profileID = request.body.profileID;
    db.query('update pdp_profile set pdp_profile.fname = ?, pdp_profile.location = ?, pdp_profile.description = ?, pdp_profile.phone = ?, pdp_profile.email = ?, pdp_profile.img = ? where pdp_profile.id = ?;', [profileName, profileLocation, profileDesc, profilePhone, profileEmail, profileImg, profileID], function (err, result, fields) {
       if(err) {
           console.log('Error message: ', err);
           throw err;
        };
        var string = JSON.stringify(result);
        var json = JSON.parse(string)
        console.log(json);
        response.send(json)
        console.log(json);
    }) 
});

app.get('/getProfile',cors(corsOptions), function (request, response) {
    console.log('Connected to /getProfile');
    db.query('SELECT pdp_profile.id, pdp_profile.fName, pdp_profile.description, pdp_profile.location, pdp_profile.phone, pdp_profile.email, pdp_profile.img FROM foodie.pdp_profile;', function (err, result, fields) {
       if(err) {
           console.log('Error message: ', err);
           throw err;
        };
        var string = JSON.stringify(result);
        var json = JSON.parse(string)
        console.log(json);
        response.send(json)
        console.log(json);
    }) 
});

app.post('/getMenus',cors(corsOptions), function (request, response) {
    console.log('Connected to /getMenus');
    var profileID = request.body.profileID;
    db.query('SELECT pdp_menu.menuId, pdp_menu.menuName, pdp_menu.menu_category, pdp_menu.menu_image, pdp_menu.pdp_id FROM foodie.pdp_menu where pdp_menu.pdp_id=?;', [profileID], function (err, result, fields) {
       if(err) {
           console.log('Error message: ', err);
           throw err;
        };
        var string = JSON.stringify(result);
        var json = JSON.parse(string)
        console.log(json);
        response.send(json)
        console.log(json);
    }) 
});

app.get('/getMenuItems',cors(corsOptions), function (request, response) {
    console.log('Connected to /getMenuItems');
    db.query('SELECT pdp_menu_items.id, pdp_menu_items.menuItem, pdp_menu_items.menuImg, pdp_menu_items.price, pdp_menu_items.menuId FROM foodie.pdp_menu_items order by id;', function (err, result, fields) {
       if(err) {
           console.log('Error message: ', err);
           throw err;
        };
        var string = JSON.stringify(result);
        var json = JSON.parse(string)
        console.log(json);
        response.send(json)
        console.log(json);
    }) 
});

app.post('/createNewMenu',cors(corsOptions), function (request, response) {
    console.log('Connected to /createNewMenu');
    var menuName = request.body.menuName;
    var menuCategory = request.body.menuCategory;
    var menuImg = request.body.menuImg;
    var pdpID = request.body.pdpID;
    db.query('insert into foodie.pdp_menu (pdp_menu.menuName, pdp_menu.menu_category, pdp_menu.menu_image, pdp_menu.pdp_id) values (?, ?, ?, ?);', [menuName, menuCategory, menuImg, pdpID], function (err, result, fields) {
       if(err) {
           console.log('Error message: ', err);
           throw err;
        };
        var string = JSON.stringify(result);
        var json = JSON.parse(string)
        console.log(json);
        response.send(json)
        console.log(json);
    }) 
});

app.post('/updateMenu',cors(corsOptions), function (request, response) {
    console.log('Connected to /updateMenu');
    var menuName = request.body.menuName;
    var menuCategory = request.body.menuCategory;
    var menuImg = request.body.menuImg;
    var menuID = request.body.menuID;
    db.query('update foodie.pdp_menu set pdp_menu.menuName = ?, pdp_menu.menu_category = ?, pdp_menu.menu_image = ? where pdp_menu.menuId = ?;', [menuName, menuCategory, menuImg, menuID], function (err, result, fields) {
       if(err) {
           console.log('Error message: ', err);
           throw err;
        };
        var string = JSON.stringify(result);
        var json = JSON.parse(string)
        console.log(json);
        response.send(json)
        console.log(json);
    }) 
});

app.post('/deleteMenu',cors(corsOptions), function (request, response) {
    console.log('Connected to /deleteMenu');
    var menuID = request.body.menuID;
    db.query('delete from foodie.pdp_menu where pdp_menu.menuId = ?;', [menuID], function (err, result, fields) {
       if(err) {
           console.log('Error message: ', err);
           throw err;
        };
        var string = JSON.stringify(result);
        var json = JSON.parse(string)
        console.log(json);
        response.send(json)
        console.log(json);
    }) 
});

app.post('/createNewDish',cors(corsOptions), function (request, response) {
    console.log('Connected to /createNewDish');
    var menuItemName = request.body.menuItemName;
    var menuItemPrice = request.body.menuItemPrice;
    var menuItemImg = request.body.menuItemImg;
    var menuID = request.body.menuID;
    db.query('insert into foodie.pdp_menu_items (pdp_menu_items.menuItem, pdp_menu_items.price, pdp_menu_items.menuImg, pdp_menu_items.menuId) values (?, ?, ?, ?);', [menuItemName, menuItemPrice, menuItemImg, menuID], function (err, result, fields) {
       if(err) {
           console.log('Error message: ', err);
           throw err;
        };
        var string = JSON.stringify(result);
        var json = JSON.parse(string)
        console.log(json);
        response.send(json)
        console.log(json);
    }) 
});

app.post('/updateDish',cors(corsOptions), function (request, response) {
    console.log('Connected to /updateDish');
    var dishName = request.body.dishName;
    var dishPrice = request.body.dishPrice;
    var dishImg = request.body.dishImg;
    var dishID = request.body.dishID;
    db.query('update foodie.pdp_menu_items set pdp_menu_items.menuItem = ?, pdp_menu_items.price = ?, pdp_menu_items.menuImg = ? where pdp_menu_items.id = ?;', [dishName, dishPrice, dishImg, dishID], function (err, result, fields) {
       if(err) {
           console.log('Error message: ', err);
           throw err;
        };
        var string = JSON.stringify(result);
        var json = JSON.parse(string)
        console.log(json);
        response.send(json)
        console.log(json);
    }) 
});

app.post('/deleteDish',cors(corsOptions), function (request, response) {
    console.log('Connected to /deleteDish');
    var dishID = request.body.dishID;
    db.query('delete from foodie.pdp_menu_items where pdp_menu_items.id = ?;', [dishID], function (err, result, fields) {
       if(err) {
           console.log('Error message: ', err);
           throw err;
        };
        var string = JSON.stringify(result);
        var json = JSON.parse(string)
        console.log(json);
        response.send(json)
        console.log(json);
    }) 
});

app.get('/getPDP',cors(corsOptions), function (request, response) {
    console.log('Connected to /users');
    db.query('select * from pdp_profile;', function (err, result, fields) {
       if(err) {
           console.log('Error message: ', err);
           throw err;
        };
        var string = JSON.stringify(result);
        var json = JSON.parse(string)
        console.log(json);
        response.send(json)
        console.log(json);
    }) 
});

app.get('/getMenu',cors(corsOptions), function (request, response) {
    console.log('Connected to /getMenu');
    db.query('select * from pdp_menu;', function (err, result, fields) {
       if(err) {
           console.log('Error message: ', err);
           throw err;
        };
        var string = JSON.stringify(result);
        var json = JSON.parse(string)
        console.log(json);
        response.send(json)
        console.log(json);
    }) 
});

app.get('/getCust',cors(corsOptions), function (request, response) {
    console.log('Connected to /getCust');
    db.query('select * from customer_profile;', function (err, result, fields) {
       if(err) {
           console.log('Error message: ', err);
           throw err;
        };
        var string = JSON.stringify(result);
        var json = JSON.parse(string)
        console.log(json);
        response.send(json)
        console.log(json);
    }) 
});

app.route('/getTopReview',cors(corsOptions))  
.post(function(request, response) {
    console.log('In getTopReview');
      // Values from JSON in register.page.ts
	  var menuId = request.body.menuId;

      db.query('SELECT b.custName,a.comments,a.datein,a.rating,a.cleanlinessRating,a.foodQualityRating,a.priceRating FROM review a join customer_profile b WHERE a.menuId = ? AND b.custId = a.custId order by a.reviewId desc Limit 2;', [menuId], function(error, result, fields) { 
        if (error) {
            console.log('Error message: ', error);
            throw error;
        } else {
            if (result.length > 0) {
                response.send(result);
            } else {
                response.send(false);
            }
        }
   });}
)

app.route('/getFavAnot',cors(corsOptions))  
.post(function(request, response) {
    console.log('In getFavAnot');
      // Values from JSON in register.page.ts
	  var menuId = request.body.menuId;
	  var loginId = request.body.loginId;

      db.query('SELECT * FROM fav_menu WHERE menuId = ? AND custId = ? ;', [menuId,loginId], function(error, result, fields) { 
        if (error) {
            console.log('Error message: ', error);
            throw error;
        } else {
            if (result.length > 0) {
                response.send(true);
            } else {
                response.send(false);
            }
        }
   });}
)

app.route('/getPDPfName',cors(corsOptions))  
.post(function(request, response) {
    console.log('In getPDPInfo');
      // Values from JSON in register.page.ts
	  var menuId = request.body.menuId;

      db.query('SELECT fName FROM pdp_menu WHERE menuId = ?;', [menuId], function(error, result, fields) { 
        if (error) {
            console.log('Error message: ', error);
            throw error;
        } else {
            if (result.length > 0) {
                response.send(result);
            } else {
                response.send(false);
            }
        }
   });}
)

app.route('/getMenuInfo',cors(corsOptions))  
.post(function(request, response) {
    console.log('In getPDPInfo');
      // Values from JSON in register.page.ts
	  var menuId = request.body.menuId;

      db.query('SELECT * FROM pdp_menu WHERE menuId = ?;', [menuId], function(error, result, fields) { 
        if (error) {
            console.log('Error message: ', error);
            throw error;
        } else {
            if (result.length > 0) {
                response.send(result);
            } else {
                response.send(false);
            }
        }
   });}
)

app.route('/getMenuName',cors(corsOptions))  
.post(function(request, response) {
    console.log('In getMenuName');
      // Values from JSON in register.page.ts
	  var menuId = request.body.menuId;

      db.query('SELECT menuId, menuName FROM pdp_menu WHERE menuId = ?;', [menuId], function(error, result, fields) { 
        if (error) {
            console.log('Error message: ', error);
            throw error;
        } else {
            if (result.length > 0) {
                response.send(result);
            } else {
                response.send(false);
            }
        }
   });}
)

app.route('/getReviewName',cors(corsOptions))  
.post(function(request, response) {
    console.log('In getReviewName');
      // Values from JSON in register.page.ts
	  var menuId = request.body.menuId;

      db.query('SELECT b.custName,a.comments,a.datein,a.rating,a.cleanlinessRating,a.foodQualityRating,a.priceRating FROM review a join customer_profile b WHERE a.menuId = ? AND b.custId = a.custId order by a.reviewId desc;', [menuId], function(error, result, fields) { 
        if (error) {
            console.log('Error message: ', error);
            throw error;
        } else {
            if (result.length > 0) {
                response.send(result);
            } else {
                response.send(false);
            }
        }
   });}
)

app.route('/getFavs',cors(corsOptions))  
.post(function(request, response) {
    console.log('In getReviewName');
      // Values from JSON in register.page.ts
	  var custId = request.body.custId;

      db.query('SELECT * FROM pdp_menu a join fav_menu b WHERE a.menuId = b.menuId AND b.custId = ?;', [custId], function(error, result, fields) { 
        if (error) {
            console.log('Error message: ', error);
            throw error;
        } else {
            if (result.length > 0) {
                response.send(result);
            } else {
                response.send(false);
            }
        }
   });}
)

app.route('/getAvgRating',cors(corsOptions))  
.post(function(request, response) {
    console.log('In getAvgRating');
      // Values from JSON in register.page.ts
	  var menuId = request.body.menuId;

      db.query('SELECT CAST(AVG(rating) AS Decimal (3,1)) as avgFood FROM review WHERE menuId = ?;', [menuId], function(error, result, fields) { 
        if (error) {
            console.log('Error message: ', error);
            throw error;
        } else {
            if (result.length > 0) {
                response.send(result);
            } else {
                response.send(false);
            }
        }
   });}
)

app.route('/getInsertFavMenu',cors(corsOptions))  
.post(function(request, response) {
    console.log('In getInsertFavMenu');
      // Values from JSON in register.page.ts
	  var menuId = request.body.menuId;
	  var loginId = request.body.loginId;

      db.query('INSERT INTO fav_menu (menuId,custId) VALUES (?,?);', 
      [menuId,loginId], function(error, result, fields) { 
        if (!error) {
           var string = JSON.stringify(result);
           var json = JSON.parse(string)
           console.log('Row inserted:',json);
       } else {
           console.log(error);
       }
       response.send(true);
   });}
)

app.route('/getDeleteFavMenu',cors(corsOptions))  
.post(function(request, response) {
    console.log('In getDeleteFavMenu');
      // Values from JSON in register.page.ts
	  var menuId = request.body.menuId;
	  var loginId = request.body.loginId;

      db.query('DELETE FROM fav_menu where menuId = ? AND custId = ?;', 
      [menuId,loginId], function(error, result, fields) { 
        if (!error) {
           var string = JSON.stringify(result);
           var json = JSON.parse(string)
           console.log('Row inserted:',json);
       } else {
           console.log(error);
       }
       response.send(true);
   });}
)

app.route('/submitReview',cors(corsOptions))  
.post(function(request, response) {
    console.log('In submitReview');
      // Values from JSON in register.page.ts
	  var menuId = request.body.menuId;
	  var custId = request.body.custId;
	  var rating = request.body.rating;
      var cleanlinessRating = request.body.cleanlinessRating;   
      var foodQualityRating = request.body.foodQualityRating;       
      var priceRating = request.body.priceRating;
      var myText = request.body.comments;
	  var datein = request.body.datein;

      db.query('INSERT INTO review (menuId,custId,rating,cleanlinessRating,foodQualityRating, priceRating, comments,datein) VALUES (?,?,?,?,?,?,?,?);', 
      [menuId,custId,rating,cleanlinessRating,foodQualityRating, priceRating,myText,datein], function(error, result, fields) { 
        if (!error) {
           var string = JSON.stringify(result);
           var json = JSON.parse(string)
           console.log('Row inserted:',json);
       } else {
           console.log(error);
       }
       response.send(true);
   });}
)
/*  		Customer LOGIN 		*/
app.route('/custLogin',cors(corsOptions))
.post(function (request, response) {
    var custId = request.body.custId;   
    db.query('SELECT * FROM customer_profile WHERE custId = ?;', [custId], function (err, result, fields) {
        if (err) {
            console.log('Error message: ', error);
            throw error;
        } else {
            if (result.length > 0) {
				var string = JSON.stringify(result);
				var json = JSON.parse(string)
                response.send(json);
				console.log(json);
            } else {
                response.send(false);
            }
        }
    });
})

//Customer Ongoing Booking Category
app.get('/getCustBookings',cors(corsOptions), function (request, response) {
    console.log('Connected to /getCustBookings');
    db.query('SELECT booking_detail.bookID, pdp_profile.fName, pdp_profile.img, pdp_profile.location, pdp_profile.phone, pdp_profile.email, DATE_FORMAT(booking_detail.bookDate, "%D %M %Y") AS bookDate, DATE_FORMAT(booking_detail.bookTime, "%h:%m %p") AS bookTime, booking_detail.bookPax, booking_detail.bookNotes, booking_detail.bookStatus, SUM(pdp_menu_items.price) AS totalPrice, pdp_menu.menu_image FROM foodie.booking_detail INNER JOIN foodie.pdp_profile ON booking_detail.pdpID = pdp_profile.id INNER JOIN foodie.pdp_menu_items ON booking_detail.menuID = pdp_menu_items.menuId INNER JOIN foodie.pdp_menu ON booking_detail.menuID = pdp_menu.menuId INNER JOIN foodie.customer_profile ON booking_detail.custID = customer_profile.custID WHERE (booking_detail.bookDate >= CURDATE() AND booking_detail.bookDate < CURDATE() + INTERVAL 7 DAY) AND booking_detail.bookStatus = "Ongoing" ORDER BY booking_detail.bookDate DESC, booking_detail.bookTime DESC;', function (err, result, fields) {
       if(err) {
           console.log('Error message: ', err);
           throw err;
        };
        var string = JSON.stringify(result);
        var json = JSON.parse(string)
        console.log(json);
        response.send(json)
        console.log(json);
    }) 
});

//Customer Past Booking Category
app.get('/getCustPastBookings',cors(corsOptions), function (request, response) {
    console.log('Connected to /getCustPastBookings');
    db.query('SELECT booking_detail.bookID, pdp_profile.fName, pdp_profile.img, pdp_profile.location, pdp_profile.phone, pdp_profile.email, DATE_FORMAT(booking_detail.bookDate, "%D %M %Y") AS bookDate, DATE_FORMAT(booking_detail.bookTime, "%h:%m %p") AS bookTime, booking_detail.bookPax, booking_detail.bookNotes, booking_detail.bookStatus, pdp_menu_items.price, pdp_menu_items.menuItem, pdp_menu_items.menuImg, pdp_menu.menu_image FROM foodie.booking_detail INNER JOIN foodie.pdp_profile ON booking_detail.pdpID = pdp_profile.id INNER JOIN foodie.pdp_menu_items ON booking_detail.menuID = pdp_menu_items.menuId INNER JOIN foodie.pdp_menu ON booking_detail.menuID = pdp_menu.menuId WHERE (booking_detail.bookDate <= CURDATE() AND booking_detail.bookDate > CURDATE() - INTERVAL 31 DAY) AND (booking_detail.bookStatus = "Completed" OR booking_detail.bookStatus = "Cancelled") ORDER BY booking_detail.bookDate DESC, booking_detail.bookTime DESC;', function (err, result, fields) {
       if(err) {
           console.log('Error message: ', err);
           throw err;
        };
        var string = JSON.stringify(result);
        var json = JSON.parse(string)
        console.log(json);
        response.send(json)
        console.log(json);
    }) 
});

//Customer Menu Items Booked
app.post('/getCustMenuItemsDet',cors(corsOptions), function (request, response) {
    console.log('Connected to /getCustMenuItemsDet');
    var bookingID = request.body.bookingID;
    db.query('SELECT pdp_menu_items.menuItem, pdp_menu_items.menuImg, pdp_menu_items.price FROM foodie.pdp_menu_items INNER JOIN foodie.booking_detail ON pdp_menu_items.menuId = booking_detail.menuID WHERE booking_detail.bookID = ?;', [bookingID], function (err, result, fields) {
       if(err) {
           console.log('Error message: ', err);
           throw err;
        };
        var string = JSON.stringify(result);
        var json = JSON.parse(string)
        console.log(json);
        response.send(json)
        console.log(json);
    }) 
});

//Add this to display something on the screen
app.get("/", (_req, res) => {
    res.json("Welcome to my 1st node.js app hosted in Heroku Testing 123");
  });


  var checkInfo = false;
  app.route('/login',cors(corsOptions))
      .post(function(request, response) {
          var AdminNum = request.body.AdminNum;
          var Password = request.body.Password;
          var IMEINo = request.body.IMEINo
          // Check account details and imei no.
          db.query('SELECT * FROM userInfo WHERE userID = ? AND userPassword = ?;', [AdminNum,IMEINo], function(error, result, fields){
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
          })
      })
      .get(function(request, response) {
          if (checkInfo = true){
              db.query('SELECT * FROM StudentRecord WHERE StudentID = ?;', [correctAdmin], function(error, result, fields){
                  if(error) {
                      console.log('Error message: ', error);
                      throw error;
                  };
                  console.log(result)
                  response.send(result);
              })
          } else {
              response.send("Error authenticating!")
          }
      })
  

  
//Basic things to include
app.set('port', process.env.PORT ||3000);

app.listen(app.get('port'), function() {
    console.log("Application starting");
    console.log("Listening to Port", app.get("port"));
});