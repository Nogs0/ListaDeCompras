import { tableSchema } from '@nozbe/watermelondb'

export default tableSchema({
    name: 'produtos',
    columns: [
        {
            name: 'nome',
            type: 'string'
        },
        {
            name: 'preco',
            type: 'number'
        },
        {
            name: 'listaDeCompras_id',
            type: 'string'
        }
    ]
})