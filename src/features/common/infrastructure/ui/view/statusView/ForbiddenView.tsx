import { Box, Typography, Button } from "@mui/material"
import { redirect } from "next/navigation"

/**
 * Component that displays the Forbidden view
 *
 * @component
 */
export const ForbiddenView = () => {
    // Redirect to the home page
    const handleButtonClick = () => {
        redirect("/");
    }
    return (
        <Box
        >
            <Typography sx={{ my: 1 }} variant="h6" gutterBottom>
                Forbidden
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
                No tienes acceso a estas funciones.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                sx={{ mt: 3 }}
                onClick={handleButtonClick}
            >
                Volver a la página de inicio
            </Button>
        </Box>
    )
}
