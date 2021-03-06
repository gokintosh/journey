class AuthenticationService{
    registerSuccessfulLogin(username,password){
        console.log("successfull authentication")
        sessionStorage.setItem('authenticatedUser',username);
    }
    logout(){
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn(){
        let user=sessionStorage.getItem('authenticatedUser')
        if(user===null){
            return false
        } 
        else{
            return true
        }
        
    }
    getUserLoggedIn(){
        let user=sessionStorage.getItem('authenticatedUser')
        if(user===null){
            return ""
        } 
        else{
            return user
        }
        
    }


}

export default new AuthenticationService()