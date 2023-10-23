import { Model } from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'

export class listaDeComprasModel extends Model {
    static table = 'listaDeCompras';
    static associations: {
        produtos: { type: 'belongs_to', key: 'listaDeCompra_id'}
    }

    @field('statusCompras') statusCompras!: number;
    @field('dentroDoLimite') dentroDoLimite!: boolean;
}