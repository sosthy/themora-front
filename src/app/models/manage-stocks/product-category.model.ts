import {Product} from './product.model';
import {Category} from './category.model';

export interface ProductCategory extends Category {
 products: Product;
}
