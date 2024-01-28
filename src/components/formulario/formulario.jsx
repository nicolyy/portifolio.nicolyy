import Link from 'next/link'
import Image from 'next/image'

import './formulario.scss'

import Email from '../../../public/Email.svg'
import Discord from '../../../public/Discord.svg'
import Linkedin from '../../../public/Linkedin.svg'
import GitHub from '../../../public/GitIcone.svg'

export default function Formulario(){
    return(

    <>
    <section className='formulario'>
                <form  action="https://formsubmit.co/nicollyoliveira003@gmail.com" class="form-contato" id="formulario" method="POST" name="formulario" >
                    <h3 className='form-titulo'>ENTRE EM CONTATO</h3>
                    <label></label>
                    <input className='form-input' type="text" name="name" id="name" placeholder='Nome Completo' required/>

                    <label></label>
                    <input className='form-input' type="email" name='email' id='email' placeholder='Email' required/>

                    <label></label>
                    <input className='form-input' type="text" name='assunto' id='assunto' placeholder='Assunto' required/>

                    <label></label>
                    <textarea className='form-input-text-area' type="text" name="mensagemt" id="mensagem" cols="30" rows="10" placeholder='Digite sua mensagem...' required></textarea>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <input type="hidden" name="_next" value="../Obrigado/index.jsx"></input>

                    <button className='btn-enviar-form' id='enviar'> Enviar</button>
                    <div>
                    
                        <nav className='container-form-social-medias'>
                            <Link href="mailto:nicollyoliveira003@gmail.com" target='_blank'>
                                <Image src={Email} alt="Icone e-mail" width={30} height={30}/>
                            </Link>
                            <Link href="#">
                                <Image src={Discord} alt="Icone do Discord" width={30} height={30}/>
                            </Link>
                            <Link href="https://www.linkedin.com/in/nicoly-oliveira-santos-7917bb1b8/" target='_blank'>
                                <Image src={Linkedin} alt="Icone do Linkedin" width={30} height={30}/>
                            </Link>
                            <Link href="https://github.com/nicolyy" target='_blank'>
                                <Image src={GitHub} alt="Icone do Github" width={30} height={30}/>
                            </Link>
                        </nav>
    
                    </div>
                </form>
            </section>
        </>
    )
}