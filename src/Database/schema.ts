import { appSchema, tableSchema } from '@nozbe/watermelondb'
import produtosSchema from './Schemas/produtosSchema'
import listaDeComprasSchema from './Schemas/listaDeCompras'

export default appSchema({
  version: 1,
  tables: [ produtosSchema, listaDeComprasSchema ]
})