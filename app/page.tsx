"use client";

import { Container, Typography, Button, Paper } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          ¡Bienvenido a Carrito Inteligente!
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Explora nuestras características y descubre cómo podemos ayudarte a gestionar tus compras de manera eficiente.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={() => router.push('/catalogo')}>
          Comenzar
        </Button>
      </Paper>
    </Container>
  );
}
