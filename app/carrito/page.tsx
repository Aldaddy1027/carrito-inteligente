import { Box } from '@mui/material'
import React from 'react'
import dynamic from 'next/dynamic';

const CartView = dynamic(() => import("@/src/features/cart/infrastructure/ui/cart/Cart").then(module => module.default));

/**
 * Page that displays the Cart.
 *
 * @component
 */
const page = () => {
    return (
        <Box>
            <CartView />
        </Box>
    )
}

export default page