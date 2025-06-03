import { addDependency } from './libs/dependencies.js';
import { LoginService } from './services/login.js';
import { UserService } from './services/users.js';
import  UserModel  from './models/user.js';


export default function configureDependencies() {
addDependency('UserService', UserService);
addDependency('LoginService', LoginService);
addDependency('UserModel', UserModel);
}