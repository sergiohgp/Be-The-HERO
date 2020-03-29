const connection = require('../database/connection'); // to make the connection with the database
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, phone, city, province } = request.body;

        const id = crypto.randomBytes(4).toString('HEX'); // encrypts the id

        // await is used to force the return wait the connection function finish run
        await connection('ongs').insert({  
            id,
            name,
            email,
            phone,
            city,
            province,
        });

        return response.json({ id });
        }
};