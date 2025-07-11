import { Container, Typography } from "@mui/material";

export default function Custom404() {
    return (
        <Container maxWidth="sm" sx={{ mt: 6 }}>
            <Typography variant="h4" gutterBottom>
                404 - Página no encontrada
            </Typography>
            <Typography variant="body1">
                Lo sentimos, la página que estás buscando no existe.
            </Typography>
        </Container>
    );
} 