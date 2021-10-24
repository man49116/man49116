const Course = require('../models/Course');

class SiteController {
  // [GET]  /
  home(req, res) {
    Course.find({}, function (err, courses) {
      if (err) {
        res.status(400).json({ err: 'message' });
        return;
      }
      res.json(courses);
    });

    // res.render('home')
  }

  //[GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
