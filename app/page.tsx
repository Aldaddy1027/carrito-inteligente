"use client";

import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/src/features/common/application/redux/store";
import { addItem } from "@/src/features/cart/application/redux/cartSlice";
import type { ICartItem } from "@/src/features/cart/domain/interfaces/ICartState";
import { Container, Typography, Button, Paper } from "@mui/material";

export default function Home() {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();

  const handleAdd = () => {
    const newItem: ICartItem = {
      id: Date.now(),
      name: `Producto ${items.length + 1}`,
    };
    dispatch(addItem(newItem));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          ¡Bienvenido a Carrito Inteligente!
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Explora nuestras características y descubre cómo podemos ayudarte a gestionar tus compras de manera eficiente.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 3 }}>
          Comenzar
        </Button>
      </Paper>
    </Container>
  );
}
