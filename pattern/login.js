class Login {
    Checklogin(user) {
            if (user.username && user.password) { return true }
            else
                return false
        }; 
}
module.exports = Login;