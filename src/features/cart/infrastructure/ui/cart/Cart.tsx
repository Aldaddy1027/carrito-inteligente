"use client";

import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/src/features/common/application/redux/store";
import { addItem, removeItem } from "@/src/features/cart/application/redux/cartSlice";
import type { ICartItem } from "@/src/features/cart/domain/interfaces/ICartState";
import { Typography, Button, List, ListItem, ListItemText, IconButton, Stack, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
    const items = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch<AppDispatch>();

    const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleQuantityChange = (id: number, amount: number) => {
        const item = items.find(item => item.id === id);
        if (item) {
            const newQuantity = Math.max(0, item.quantity + amount);
            if (newQuantity > 0) {
                dispatch(addItem({ ...item, quantity: newQuantity - item.quantity }));
            } else {
                dispatch(removeItem(id));
            }
        }
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'left' }}>
                Carrito de compras
            </Typography>
            <List>
                {items.map((item: ICartItem) => (
                    <ListItem key={item.id}>
                        <ListItemText
                            primary={item.name}
                            secondary={`Cantidad: ${item.quantity} - Precio: $${item.price}`}
                        />
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Button onClick={() => handleQuantityChange(item.id, -1)}>-</Button>
                            <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                            <Button onClick={() => handleQuantityChange(item.id, 1)}>+</Button>
                        </Box>
                        <IconButton edge="end" color="error" onClick={() => dispatch(removeItem(item.id))}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
            <Typography variant="h6" sx={{ textAlign: 'right', mt: 2 }}>
                Total: ${totalAmount.toFixed(2)}
            </Typography>
        </Box>
    );
}

export default Cart;