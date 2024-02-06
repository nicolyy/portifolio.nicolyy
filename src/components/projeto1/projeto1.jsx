// MeusProjetos.jsx
'use client'


import Image from 'next/image'
import Link from 'next/link'
import React from 'react';

export default function MeusProjetos() {

  const entrar = () => {
    console.log('Mouse entrou no componente');
    <p>
        oiiii
    </p>

    
  };

  return (
    <div id="proj1" onMouseEnter={entrar}>
    <p>Oi</p>
    </div>
  );
}