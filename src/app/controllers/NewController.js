class NewController {

    // [GET]  /news
    index(req ,res) {
        res.render('news')
    }   

    //[GET] /news/slut
    show(req, res){
       res.send('detail')
    }
}

module.exports = new NewController;