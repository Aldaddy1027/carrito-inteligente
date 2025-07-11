import { Box, Button, Typography } from '@mui/material';
import { redirect } from 'next/navigation';

/**
 * Component that displays the Not Found view
 *
 * @component
 */
export const NotFoundView = () => {
  // Redirect to the home page
  const handleButtonClick = () => {
    redirect("/");
  }
  return (
    <Box
    >
      <Typography sx={{ my: 1 }} variant="h6" gutterBottom>
        Not Found
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        No pudimos encontrar la página que estas buscando, comprueba que la url sea la correcta.
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
