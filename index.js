const sql = require('mssql');

config = {
    user: 'sa',
    password: 'Guimarares2020#',
    server: 'localhost',
    database: 'testdb',
    port: 1435,
    options: {
        enableArithAbort: true
    }
};
//docker-compose up -d

/*
Ir ao mssms criar uma db chamada testdb e executar essa query:

use testdb;
create table users(id INT, name NVARCHAR(50));
insert into users values(1, 'Bill Gates');
go

*/



const run = async () => {
    let pool;
    try {
        console.log('Connection Opennig...');
        pool = await sql.connect(config);
        const { recordset } = await sql.query('select * from users');

        console.log(recordset);
    } catch (error) {
        console.log(error);
    } finally {
        await pool.close();
        console.log('Connection Closed');
    }
}

run();