const authLogin = (req, res) => {
    res.render('login');
}

const home = (req, res) => {
    res.render('home');
}

module.exports = {
    authLogin,
    home
}