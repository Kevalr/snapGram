function getAllPosts(req,res) {
    console.log(req.url);
    res.send('<h1>All posts from a users is Here : </h1>');
}

module.exports = {getAllPosts};