import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const DUMMY_PRODUCT = [
    {id:'p1',price: 6, title: 'First Book', description: 'yoyoyoy'},
    {id:'p2',price: 7, title: 'second Book', description: 'momomom'},
  ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => 
        (<ProductItem
         key = {product.id}
         id = {product.id}
          title = {product.title}
          price={product.price}
          description={product.description}
        />))}

      </ul>
    </section>
  );
};

export default Products;
