module.exports = function(app) {

    app.get('/view/pull/:id', function(req, res) {

        var id = parseInt(req.params.id);
        var pullList = app.db.get("pulls");

        pullList.findOne({"id": id}, function(err, item){
            res.render('pullView.jade', {
                    pull: item
            })

        });

    })

}