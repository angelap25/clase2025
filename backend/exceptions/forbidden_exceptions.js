export default class ForbiddenException extends Error {
    constructor() {
        super('Acceso Prohibido');
        this.statusCode = 400;
    }
}