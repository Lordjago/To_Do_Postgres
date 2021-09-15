const db = require('../config/db');

class User {
    constructor(first_name, last_name, email, password) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password
    }

    async save() {
        return await db.query("INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)",
        [this.first_name, this.last_name, this.email, this.password]);
    }

    static async checkIfExist(email) {
        return await db.query("SELECT * FROM users WHERE email = $1",
            [email]);
    }


    static async login(email){
        return await db.query("SELECT * FROM users WHERE email = $1", [email])
    }
}

module.exports = User;



// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//     first_name:{
//         type: String,
//         default: null
//     },
//     last_name: {
//         type: String,
//         default: null
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// });

// module.exports = mongoose.model('User', userSchema);