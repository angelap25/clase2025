import { InvalidArgumentException } from '../exceptions/invalid_argument_exceptions.js';
import { InvalidCredentialsException } from '../exceptions/invalid_credentials_exceptions.js';

export class LoginService {
    static async login(credentials) {
        if (!credentials
            || !credentials.username
            || !credentials.password
            || typeof credentials.username != 'string'
            || typeof credentials.password != 'string'
        )
        throw new InvalidArgumentException();
    

        if (credentials.username != 'admin') {
             throw new InvalidCredentialsException();
        }

        if (credentials.password != '1234' ) {
          throw new InvalidCredentialsException();
        }

        return {
            token: 'Token de acceso'
        };
     }
}