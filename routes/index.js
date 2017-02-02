var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var dcClass=["Sean", "Drew", "Daniel", "Kyle", "Rishi", "Liz", "Anna", "Ryan", "Casey", "Connie", "Sarah", "Andy", "Michael", "Paul", "Mason"];

	var kindsOfTea=["green", "jasmine", "earl grey", "oolong", "darjeeling"];
	//now inside of classArray, there is a variable you can use
  res.render('index', { classArray:dcClass, teaArray:kindsOfTea });
});

router.get('/reverse', function(req, res, next){
	var reverseClass=["Sean", "Drew", "Daniel", "Kyle", "Rishi", "Liz", "Anna", "Ryan", "Casey", "Connie", "Sarah", "Andy", "Michael", "Paul", "Mason"];
	res.render('reverse', {classArrayReverse: reverseClass});
});

module.exports = router;

//JavaScript between <% %> executed
// JavaScript between <%= %> adds HTML to the result. = sign is different.
