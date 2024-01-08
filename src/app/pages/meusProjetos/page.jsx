import Image from 'next/image'
import Link from 'next/link'

import Cabecalho from '@/components/cabecalho/cabecalho-principal'
import Rodape from '@/components/rodape/rodape'

export default function meusProjetos(){
    return(
        <>
        <Cabecalho/>
        <div>
            <h1>Meus Projetos</h1>
        </div>
        <div className='projetos'>
            <div className='projeto-item'>
               <Link href='https://www.youtube.com/'></Link>
               <div className='github-rep'>
                <Link href='https://www.google.com.br/?hl=pt-BR'></Link>
               </div>
            </div>
            <div className='projeto-item'>
               <Link href='#'></Link>
            </div>
            <div className='projeto-item'>
               <Link href='#'></Link>
            </div>
            <div className='projeto-item'>
               <Link href='#'></Link>
            </div>
            <div className='projeto-item'>
               <Link href='#'></Link>
            </div>
            <div className='projeto-item'>
               <Link href='#'></Link>
            </div>
            <div className='projeto-item'>
               <Link href='#'></Link>
            </div>
            <div className='projeto-item'>
               <Link href='#'></Link>
            </div>

        </div>
        <Rodape/>
        </>
    )
}