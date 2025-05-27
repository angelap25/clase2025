export class UserMockup {
    static users = [
        {
            id: '1',
            username: 'admin',
            password: '1234',
            hashedPassword: '$2b$10$gJZXLj5/iR6pIIEg476iBOkD8Krxg4sbG1phb.qVFPJoSVDUoHRiK',
            fullName: 'Admin',
            email: 'admin@fake.com',
        },
        {
            id: '2',
            username: 'operator',
            password: '12345',
            hashedPassword: '$2b$10$MUJIgtHywGcPRdHWJ.mQ2.HBckt3IYk/F5Ub8JQyvlPTT9xUIgFsS',
            fullName: 'Operador',
            email: 'operador@fake.com'
        }
    ];

    static async getSingleOrNullByUsername(username) {
        return this.users.find(u => u.username == username);
    }
}