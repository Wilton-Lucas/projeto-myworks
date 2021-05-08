import Login from '../models/login.model';

class LoginRepository {



    constructor() {
        this.admLogin = new Login("admin", "admin");
    }

    validarLogin(login) {
        if (login.username == this.admLogin.username && login.password == this.admLogin.password) {
            return true;
        } else {
            return false;
        }

    }
}

export default new LoginRepository();