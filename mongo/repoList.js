module.exports = function(app) {
	
	app.get('/list/repos', function(req, res) {

		var repoList = app.db.get('repos')

		// execute the query to find those matched limiting to 20
		repoList.find({}, {
			limit: 20
		}, function(err, container) {
			res.render('repoList.jade', {
				repos: container
			})
		})

	})
}