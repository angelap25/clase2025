import { UserService} from '../services/users.js';

export function user(app) {
    app.get(
        '/login',
       async (req, res) =>  res.send(await UserService.get(req.body))
    );
}