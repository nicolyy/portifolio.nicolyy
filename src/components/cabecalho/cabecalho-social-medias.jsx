import Image from 'next/image'
import Link from 'next/link'

import './cabecalho.scss'

import Email from '../../../public/Email.svg'
import Discord from '../../../public/Discord.svg'
import Linkedin from '../../../public/Linkedin.svg'
import GitHub from '../../../public/GitIcone.svg'

export default function CabecalhoSocialMedias(){
    return(
        <>
         <header>
            <nav className='container-cabecalho-social-media'>
                <Link href="mailto:nicollyoliveira003@gmail.com" target='_blank'>
                    <Image src={Email} alt="Icone e-mail" width={30} height={30}/>
                </Link>
                <Link href="">
                    <Image src={Discord} alt="Icone do Discord" width={30} height={30}/>
                </Link>
                <Link href="https://www.linkedin.com/in/nicoly-oliveira-santos-7917bb1b8/" target='_blank'>
                    <Image src={Linkedin} alt="Icone do Linkedin" width={30} height={30}/>
                </Link>
                <Link href="https://github.com/nicolyy" target='_blank'>
                    <Image src={GitHub} alt="Icone do Github" width={30} height={30}/>
                </Link>
    
            </nav>
        </header>
        </>
    )
}
