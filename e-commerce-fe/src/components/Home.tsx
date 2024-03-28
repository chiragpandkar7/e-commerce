import { Typography, Container, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import { Product } from '../Types/product.types';

const Home = () => {
  const allProducts: Product[] = useSelector((state: RootState) => state.products.products);
  const products = allProducts.slice(0, 3);
  return (
    <div>
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Featured Products
        </Typography>
        <Grid container spacing={3}>
          {products.map(product => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.images[0]}
                  alt={product.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: ${product.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <footer style={{ backgroundColor: '#f5f5f5', padding: '20px', marginTop: '20px', textAlign: 'center' }}>
        <Typography variant="body1">
          &copy; 2024 E-Commerce Website. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
}

export default Home;
