import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { RootState } from '../store/reducer';

const Products = () => {
  const { products } = useSelector((state: RootState) => state.products);

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
