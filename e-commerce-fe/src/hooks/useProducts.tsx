import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import { setProducts } from '../store/slices/products.slice';


const useProducts = () => {
  const { products } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      dispatch(setProducts(response.data.products));
    } catch (error) {
      console.log('Error fetching products: ', error);
    }
  };
  return (
    <div>useProducts</div>
  )
}

export default useProducts;