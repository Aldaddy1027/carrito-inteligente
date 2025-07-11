"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from 'react-redux';
import { store } from '@/src/features/common/application/redux/store';

const APP_NAME = 'Carrito Inteligente'
const APP_DESCRIPTION = 'Sistema de carrito inteligente'

/**
 * Root layout component of the application
 * @function RootLayout
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Child components to render within the layout
 * @returns {JSX.Element} HTML element containing the main layout
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es' dir='ltr' data-lt-installed="true" suppressHydrationWarning={true}>
      <head>
        <meta name='application-name' content={APP_NAME} />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content={APP_NAME} />
        <meta name='description' content={APP_DESCRIPTION} />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='theme-color' content='#FFFFFF' />
        <title>{APP_NAME}</title>

        <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.webmanifest' />
        <link rel='shortcut icon' href='/favicon/favicon.ico' />

      </head>
      <body className={`antialiased`}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
