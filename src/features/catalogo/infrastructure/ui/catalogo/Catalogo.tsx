"use client";

import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/src/features/common/application/redux/store";
import { addItem, removeItem } from "@/src/features/cart/application/redux/cartSlice";
import type { ICartItem } from "@/src/features/cart/domain/interfaces/ICartState";
import { Typography, Button, List, ListItem, ListItemText, IconButton, Stack, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { IProductItems } from "@/src/features/catalogo/domain/interfaces/ICatalogoState";
import { useEffect } from 'react';
import { setItems } from '@/src/features/catalogo/application/redux/catalogoSlice';
import { sampleProducts } from "@/src/features/catalogo/domain/data/Products.data";

const Catalogo = () => {
    const catalogoItems = useSelector((state: RootState) => state.catalogo.items);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(setItems(sampleProducts));
    }, [dispatch]);

    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'left' }}>
                Catálogo de Productos
            </Typography>

            <List>
                {catalogoItems.map((item: IProductItems) => (
                    <ListItem key={item.id}>
                        <ListItemText
                            primary={item.name}
                            secondary={`Precio: $${item.price} - ${item.description}`}
                        />
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => dispatch(addItem(item))}
                        >
                            Agregar a carrito
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Catalogo;