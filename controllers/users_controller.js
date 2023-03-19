const User = require('../models/user')
//get the sign up data
module.exports.createUser = async(req,res) => {
    if(req.body.password !== req.body.confirm_password){
        return res.redirect('back');
    }

    // Cheking if email already exists
    let user = await User.findOne({email: req.body.email})

    if(!user) {
        let result = await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
        })
        console.log(result);
        return res.redirect('profile');
    }
    return res.redirect('back');
}

//  sign in and create session for the user
module.exports.createSession = (req,res) => {

}

module.exports.profile = (req, res)  => {
    return res.render('user_profile', {
        title: 'abcd',
    });
}

module.exports.signUp = (req,res) => {
    return res.render('user_sign_up',{
        title: 'snapGram',
    })
}

module.exports.signIn = (req,res) => {
    return res.render('user_sign_in',{
        title: 'snapGram',
    })
}