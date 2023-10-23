import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite"
import schema from "./schema";
import migrations from "./migrations";
import ProdutosModel from "../Models/produtosModel";
import ListaDeComprasModel from "../Models/listaDeComprasModel";

const adapter = new SQLiteAdapter({
    schema, 
    migrations
});

export const db = new Database({
    adapter,
    modelClasses: [ ProdutosModel, ListaDeComprasModel]
})  