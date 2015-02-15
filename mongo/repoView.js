module.exports = function(app) {

    app.get('/view/repo/:id', function(req, res) {

        var id = parseInt(req.params.id);
        var repoList = app.db.get("repos");

        repoList.findOne({"id": id}, function(err, item){
            res.render('repoView.jade', {
                    repo: item
            })

        });

    })

}