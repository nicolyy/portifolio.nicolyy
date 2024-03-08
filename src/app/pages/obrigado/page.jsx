import Image from 'next/image'
import Link from 'next/link'

import '@/components/styles/style.scss'

import Obrigado from '../../../../public/obrigado.svg'

export default function ObrigadoPage (){
    return(
        <>
        <main className='container-obrigado'>
            <div className='texto-obrigado'>
            <Image src={Obrigado} alt='' width={400} height={200}/>
            <p>Obrigada pelo envio.</p>
            <p>Em breve entrarei em contato!</p>
            <Link className='obrigado-home' href='./page'>Voltar para HOME</Link>
            </div>
        </main>
        </>
    )
}