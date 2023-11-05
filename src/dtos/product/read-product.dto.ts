import { Exclude } from 'class-transformer';
import { BaseProductDto } from './base-product.dto';


@Exclude()
export class ReadProductDto extends BaseProductDto{
    @Expose()
    readonly id;
}