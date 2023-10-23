import { tableSchema } from '@nozbe/watermelondb'

export default tableSchema({
    name: 'listaDeCompras',
    columns: [
        {
            name: 'statusCompras',
            type: 'number'
        },
        {
            name: 'dentroDoLimite',
            type: 'boolean',
            isOptional: true
        }
    ]
})