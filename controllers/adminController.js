const userModel = require("../models/users")

const login = async(req,res) => {
    res.render("admin-login",{})
}

const loginTo = async(req,res) => {
    const {email, password} = req.body
    const userData = await userModel.findOne({user_name:email})
    console.log(userData)
    if(userData) {
        if(userData.password === password) {
            return res.render("admin-home", {sucess:"successfully logged in"})
        }
    } else {
        return res.render("admin-login",{error:"username passoword missmatch"})
    }
    res.render("admin-login",{})
}

const home = async(req,res) =>{
    res.render("admin_home")
}

module.exports = {login, loginTo, home}