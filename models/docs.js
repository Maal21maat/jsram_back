const database = require("../db/database.js");
const initDocs = require("..data/docs.json");

const docs = {
    getAllDocs: async function getAllDocs() {
        let db;

        try {
            db = await database.getDb();

            const allDocs = await db.collection.find().toArray();

            return allDocs;
        } catch (error) {
            return {
                errors: {
                    message: error.message,
                }
            };
        } finally {
            await db.client.close();
        }
    },
    init: async function init() {
        let db;

        try {
            db = await database.getDb();

            const result = await db.collection.insertMany (initDocs);

            console.log(`${result.insertedCount} documents were inserted`);
        } catch (error) {
            console.error(error.message);
        } finally {
            await db.client.close();
        }
    }
};

module.exports = docs