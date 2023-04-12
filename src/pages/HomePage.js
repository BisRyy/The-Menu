import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Card, Link } from '@mui/material';
import axios from 'axios';
import { decrement, increment, incrementByAmount } from '../redux/counterSlice';
import { add, get, remove } from '../redux/productSlice';
// import Hero from "../sections/home/hero";

export default function HomePage() {
  const count = useSelector((state) => state.counter.value);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://dummyjson.com/products/').then((res) => {
      dispatch(get(res.data.products));
    });
  }, []);

  return (
    <>
      {/* <Hero /> */}

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
          p: 5,
        }}
      >
        {products.products.map((product, index) => (
          <Card
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
              p: 5,
              width: 400,
              border: '1px solid #ccc',
            }}
          >
            <Link href={`product/${product.id}`}>
              <img src={product.images[0]} alt={product.name} height={200} />
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </Link>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                p: 2,
              }}
            >
              <Button variant="contained" onClick={() => dispatch(add(product))}>
                Add to cart
              </Button>
              <Button variant="contained" onClick={() => dispatch(remove(product.id))}>
                Remove from cart
              </Button>
            </Box>
          </Card>
        ))}
      </Box>

      <div>
        <Box sx={{ display: 'flex', gap: 2, p: 5 }}>
          <Button variant="contained" label="Increment value" onClick={() => dispatch(decrement())}>
            Increment
          </Button>
          <Button variant="outlined">{count}</Button>
          <Button variant="contained" label="Decrement value" onClick={() => dispatch(increment())}>
            Decrement
          </Button>
        </Box>
      </div>
    </>
  );
}
