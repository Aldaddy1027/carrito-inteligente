import { Box } from '@mui/material'
import React from 'react'
import dynamic from 'next/dynamic';

const CatalogoView = dynamic(() => import("@/src/features/catalogo/infrastructure/ui/catalogo/Catalogo").then(module => module.default));

/**
 * Page that displays the Cart.
 *
 * @component
 */
const page = () => {
    return (
        <Box>
            <CatalogoView />
        </Box>
    )
}

export default page