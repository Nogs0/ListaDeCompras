import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite"
import schema from "./schema";
import migrations from "./migrations";

const adapter = new SQLiteAdapter({
    schema, 
    migrations
});

export const db = new Database({
    adapter,
    modelClasses: [ ]
})  