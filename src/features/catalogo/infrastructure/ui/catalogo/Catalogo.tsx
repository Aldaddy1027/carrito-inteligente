"use client";

import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/src/features/common/application/redux/store";
import { addItem } from "@/src/features/cart/application/redux/cartSlice";
import { Typography, Button, List, ListItem, ListItemText, Box, Select, MenuItem, Snackbar } from "@mui/material";
import { IProductItems } from "@/src/features/catalogo/domain/interfaces/ICatalogoState";
import { useEffect, useState } from 'react';
import { setItems } from '@/src/features/catalogo/application/redux/catalogoSlice';
import { sampleProducts } from "@/src/features/catalogo/domain/data/Products.data";

const Catalogo = () => {
    const dispatch = useDispatch<AppDispatch>();

    // UseSelectors
    const catalogoItems = useSelector((state: RootState) => state.catalogo.items);

    // UseStates
    const [quantities, setQuantities] = useState<{ [key: number]: number }>(() => {
        const initialQuantities: { [key: number]: number } = {};
        sampleProducts.forEach(product => {
            initialQuantities[product.id] = 1;
        });
        return initialQuantities;
    });

    const [selectedVariations, setSelectedVariations] = useState<{ [key: number]: string }>({});

    /**
     * Effect hook that initializes the catalog items on component mount
     * Dispatches the sample products to the Redux store
     * Re-runs only when dispatch function changes
     */
    useEffect(() => {
        dispatch(setItems(sampleProducts));
    }, []);

    /**
     * Updates the quantity of a specific product in the local state
     * @param {number} id - The ID of the product to update
     * @param {number} amount - The amount to change the quantity by (positive or negative)
     */
    const handleQuantityChange = (id: number, amount: number) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: Math.max(0, (prev[id] || 0) + amount),
        }));
    };

    const handleVariationChange = (id: number, variation: string) => {
        setSelectedVariations((prev) => ({
            ...prev,
            [id]: variation,
        }));
    };

    /**
     * Adds an item to the shopping cart with the selected quantity
     * @param {IProductItems} item - The product item to add to cart
     * @returns {Promise<void>}
     */
    const handleAddToCart = async (item: IProductItems) => {
        try {
            const quantity = quantities[item.id] || 1;

            await dispatch(addItem({
                ...item,
                quantity: quantity,
                variation: selectedVariations[item.id]
            }));

            setQuantities((prev) => ({
                ...prev,
                [item.id]: 1
            }));

            setSelectedVariations((prev) => ({
                ...prev,
                [item.id]: ''
            }));

            // TODO: Add snackbar state management
            // setSnackbarOpen(true);
            // setSnackbarMessage('Producto agregado al carrito exitosamente');
        } catch (_) {
            // TODO: Add error handling
        }
    };

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
                        {item.variations && (
                            <Select
                                value={selectedVariations[item.id] || ''}
                                onChange={(e) => handleVariationChange(item.id, e.target.value)}
                                displayEmpty
                            >
                                <MenuItem value="" disabled>Selecciona una variación</MenuItem>
                                {item.variations.map((variation) => (
                                    <MenuItem key={variation} value={variation}>{variation}</MenuItem>
                                ))}
                            </Select>
                        )}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Button onClick={() => handleQuantityChange(item.id, -1)} disabled={quantities[item.id] <= 1}>-</Button>
                            <Typography sx={{ mx: 2 }}>{quantities[item.id] || 1}</Typography>
                            <Button onClick={() => handleQuantityChange(item.id, 1)} disabled={quantities[item.id] >= item.stock}>+</Button>
                        </Box>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => handleAddToCart(item)}
                            disabled={item.stock === 0}
                        >
                            {item.stock === 0 ? 'Agotado' : 'Agregar a carrito'}
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Catalogo;