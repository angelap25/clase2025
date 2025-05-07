export function loginService(username, password) {
    if (!username || !password
        || typeof username != 'string'
        || typeof password != 'string'
    ) {
        return {
            error: 'Argumentos inválidos.',
        };
    }

    if (username != 'admin') {
        return {
            error: 'Usuario no encontrado.',
        };
    }

    if (password != '1234' ) {
        return {
            error: 'Crendenciales inválidas.',
        };
}

    return {
   token: 'Token de acceso'
    };
}