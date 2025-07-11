"use client";

import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/src/features/common/application/redux/store";
import { addItem, removeItem } from "@/src/features/cart/application/redux/cartSlice";
import type { ICartItem } from "@/src/features/cart/domain/interfaces/ICartState";
import { Container, Typography, Button, List, ListItem, ListItemText, IconButton, Stack, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

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
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Carrito de compras (Redux + MUI)
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          <Button variant="contained" color="primary" onClick={handleAdd}>
            Agregar producto
          </Button>
        </Stack>
        <List>
          {items.map((item: ICartItem) => (
            <ListItem
              key={item.id}
              secondaryAction={
                <IconButton edge="end" color="error" onClick={() => dispatch(removeItem(item.id))}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}
