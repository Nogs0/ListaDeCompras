import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/SQLiteAdapter"
import schema from "./schema";

const adapter = new SQLiteAdapter(){
    schema, 
    migrations
}