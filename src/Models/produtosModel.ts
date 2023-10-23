import { Model } from '@nozbe/watermelondb'
import { field, relation } from '@nozbe/watermelondb/decorators'
import listaDeComprasModel from './listaDeComprasModel';

export default class produtos extends Model {

    static table: 'produtos';
    static associations: {
        listaDeCompras: { type: 'belongs_to', key: 'listaDeCompra_id'}
    }
    
    @relation('listaDeCompras', 'listaDeCompras_id') listaDeCompras!: listaDeComprasModel;
    @field('preco') preco!: string;
    @field('nome') nome!: string;
}