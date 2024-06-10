const mysql2 = require("mysql2/promise")

const newconnection = async () => {
    const connection = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'bdtlp',
    });
        return connection
}
module.exports = {
    newconnection
}
