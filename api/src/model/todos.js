const db = require('../config/db');

class Todo {
    constructor(what_todo, when, period) {
        this.what_todo = what_todo;
        this.when_todo = when;
        this.period_todo = period;
    }

     async save() {
         await db.query(
             "INSERT INTO activities (what_todo, when_todo, period_todo) VALUES ($1, $2, $3)",
             [this.what_todo, this.when_todo, this.period_todo]
         );
    }

    static async getAllTodos (){
        const sqlQuery = "SELECT * FROM activities";
        return await db.query(sqlQuery);
    }

    static async getById (id){
        return await db.query("SELECT * FROM activities WHERE id = $1", [id]);
    }

    static async updateTodo(id, updatedData) {
        return await db.query("UPDATE activities SET what_todo = $1, when_todo = $2, period_todo = $3 WHERE id = $4",
         [updatedData.what_todo, updatedData.when, updatedData.period, id]);
    }

    static async deleteTodo(id) {
        return await db.query("DELETE FROM activities WHERE id = $1",
            [id]);
    }
}

module.exports = Todo