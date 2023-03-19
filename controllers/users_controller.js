function profile(req, res) {
    return res.render('user_profile', {
        title: 'abcd',
    });
}

module.exports = {profile};