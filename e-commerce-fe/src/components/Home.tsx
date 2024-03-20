import React from 'react';
import { Typography, Container, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';

const Home = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 10, imageUrl: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 20, imageUrl: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 30, imageUrl: 'product3.jpg' },
  ];

  return (
    <div>
      {/* <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-Commerce Website
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar> */}
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
                  image={product.imageUrl}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: ${product.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Add to Cart</Button>
                </CardActions>
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
