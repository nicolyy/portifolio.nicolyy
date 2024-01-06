import Link from 'next/link'

import './rodape.scss'

export default function Rodape(){
    return(
        <>
         <footer className='rodape'>
             <Link className='rodape-texto' href="#">
                Desenvolvido por @nicolly.yy </Link>
        </footer>
        </>
    )
}