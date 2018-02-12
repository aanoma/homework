var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('new');
});

router.get('/home', function(req, res) {
    res.render('home');

});


router.get('/api2',function (req,res) {
    var user = req.param('user');
    var users = [];
    users.push(user);
    res.json(users);
});

router.get('/api',function(req,res){
  var arr = [
      {name: "Harry Potter and the Philosopher's Stone",
      src: 'https://vignette.wikia.nocookie.net/harrypotter/images/0/0e/Philostone.jpg/revision/latest?cb=20170824190451',
      year:2001},
      {name: "Harry Potter and the Chamber of Secrets",
          src: 'https://vignette.wikia.nocookie.net/harrypotter/images/6/6b/Chamba.jpg/revision/latest/scale-to-width-down/326?cb=20150209181936',
          year:2002},
      {name: "Harry Potter and the Prisoner of Azkaban",
          src: 'http://3.bp.blogspot.com/-8H3lZdQhB4k/UQjWEyUWgMI/AAAAAAAABmA/4Z5LYh9L6oo/s1600/harry-potter-and-the-prisoner-of-azkaban-poster-1.jpg',
          year:2004},
      {name: "Harry Potter and the Goblet of Fire",
          src: 'https://www.justwatch.com/images/poster/8680303/s592/hp4',
          year:2005},
      {name: "Harry Potter and the Order of the Phoenix",
          src: 'https://vignette.wikia.nocookie.net/harrypotter/images/6/6e/Harry-potter-and-the-order-of-the-phoenix.jpg/revision/latest?cb=20101208193622',
          year:2007},
      {name: "Harry Potter and the Half-Blood Prince",
          src: 'https://i.pinimg.com/originals/70/ed/7a/70ed7ab8e8bbb87833fd802f1c75fc55.jpg',
          year:2009},
      {name: "Harry Potter and the Deathly Hallows – Part 1",
          src: 'https://pmcdeadline2.files.wordpress.com/2010/11/harry-potter-and-the-deathly-hallows-poster1.jpg',
          year:2010},
      {name: "Harry Potter and the Deathly Hallows – Part 2",
          src: 'https://images-na.ssl-images-amazon.com/images/I/51oNHptoKdL.jpg',
          year:2011}
  ];
  res.json(arr)
});

module.exports = router;
