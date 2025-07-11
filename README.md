This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Estructura Hexagonal basada en Features

Este proyecto utiliza una estructura hexagonal (puertos y adaptadores) organizada por features. Cada feature tiene su propio directorio dentro de `src/features` y se divide en las siguientes capas:

- **domain**: Entidades, Value Objects, interfaces y lógica de dominio puro.
- **application**: Casos de uso, servicios de aplicación y puertos (interfaces) que definen la comunicación con el exterior.
- **infrastructure**: Implementaciones concretas de los puertos, acceso a datos, APIs externas, etc.

### Ejemplo de estructura para una feature `cart`:

```
src/
  features/
    cart/
      domain/
      application/
      infrastructure/
```

### ¿Cómo agregar una nueva feature?

1. Crea una carpeta dentro de `src/features` con el nombre de la feature.
2. Dentro de esa carpeta, crea los subdirectorios: `domain`, `application`, `infrastructure`, `adapters`.
3. Implementa la lógica de dominio en `domain`, los casos de uso en `application`, las integraciones externas en `infrastructure` y los adaptadores necesarios en `adapters`.

Esta estructura promueve la separación de responsabilidades y facilita la escalabilidad y mantenibilidad del proyecto.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
