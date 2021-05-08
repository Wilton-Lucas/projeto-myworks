import Login from '../models/login.model';
import LoginRepository from '../repositories/login.repository';

export default class LoginController {

    fazerLogin(login) {
        return LoginRepository.validarLogin(login);
    }

}