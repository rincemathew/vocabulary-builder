const login = async(req,res) => {
    res.render("admin-login",{})
}

const loginTo = async(req,res) => {
    console.log("hello")
    console.log(req.body.email)
    res.render("admin-login",{})
}

const home = async(req,res) =>{
    res.render("admin_home")
}

module.exports = {login, loginTo, home}