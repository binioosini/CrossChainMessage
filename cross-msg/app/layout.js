'use client'

import React, { useState } from "react";
import { Inter } from 'next/font/google';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { Button } from "@tremor/react";
import { Goerli, PolygonZkevmTestnet } from '@thirdweb-dev/chains';
import './globals.css'

const inter = Inter({ subsets: ['latin'] });

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', 
  justifyContent: 'center',
  minHeight: '100vh', 
};

export default function RootLayout({ children }) {
  const [active, setActive] = useState(PolygonZkevmTestnet);

  const switchActiveChain = () => {
    setActive((currentActive) => {
      return currentActive === Goerli ? PolygonZkevmTestnet : Goerli;
    });
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={containerStyle}>
          <ThirdwebProvider
            activeChain={active}
            supportedChains={[Goerli, PolygonZkevmTestnet]}
          >
            {children}
            <Button 
              onClick={switchActiveChain} 
            >
              {active === Goerli ? "Switch to Polygon to Read" : "Switch to Goerli to Write"}
            </Button>
          </ThirdwebProvider>
        </div>
      </body>
    </html>
  );
}
