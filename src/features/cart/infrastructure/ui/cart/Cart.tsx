"use client";

import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/src/features/common/application/redux/store";
import { addItem, removeItem } from "@/src/features/cart/application/redux/cartSlice";
import type { ICartItem } from "@/src/features/cart/domain/interfaces/ICartState";
import { Container, Typography, Button, List, ListItem, ListItemText, IconButton, Stack, Paper, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
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
        <Box>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'left' }}>
                Carrito de compras
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 2, justifyContent: 'flex-start', alignItems: 'center' }}>
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
        </Box>
    );
}

export default Cart;