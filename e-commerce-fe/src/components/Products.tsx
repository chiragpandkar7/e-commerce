import useProducts from '../hooks/useProducts';
import ProductCard from './ProductCard';

const Products = () => {
  const { products } = useProducts();

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', padding: '15px' }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>
  );
}

export default Products;
