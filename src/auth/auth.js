export default class Auth {
    static getToken= () => {
        const tokenString = localStorage.getItem('login');
        const userToken = JSON.parse(tokenString);
        return userToken
    }

    static isAuthenticated = () => {
        let token = this.getToken()
        if(token){
            return true;
        } else {
            return false
        }
    }
}