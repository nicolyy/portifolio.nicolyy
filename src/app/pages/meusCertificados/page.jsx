import Image from 'next/image'
import '../../../components/styles/style.scss'

import Cabecalho from '@/components/cabecalho/cabecalho-principal'

import Seta from '../../../../public/Seta.svg'

import Certificado1 from '../../../../public/Certificados/logica-de-programacao/Logica de Programação - FIAP - NANO COURSE.png'
import Certificado2 from '../../../../public/Certificados/desenvolvimento-web/Nicoly Oliveira Santos - Curso Git e GitHub_ repositório, commit e versões - Alura-1.png'
import Certificado3 from '../../../../public/Certificados/desenvolvimento-web/Nicoly Oliveira Santos - Curso HTML e CSS_ responsividade com mobile-first - Alura-1.png'
import Certificado4 from '../../../../public/Certificados/desenvolvimento-web/Nicoly Oliveira Santos - Formação A partir do zero_ HTML e CSS para projetos web - Alura-1.png'
import Certificado5 from '../../../../public/Certificados/ingles/Certificado SKILL IDIOMAS-1.png'
import Certificado6 from '../../../../public/Certificados/ingles/English for Career Development-1.png'
import Certificado7 from '../../../../public/Certificados/logica-de-programacao/Nicoly Oliveira Santos - Curso Lógica de programação_ comece em lógica com o jogo Pong e JavaScript - Alura-1.png'
import Certificado8 from '../../../../public/Certificados/ux-ui/usp ui.ux-1.png'
import Certificado9 from '../../../../public/Certificados/ux-ui/Design Thinking FIAP.png'
import Certificado10 from '../../../../public/Certificados/ux-ui/User-Experience.png'


export default function meusCertificados(){
    return(
        <>
        <Cabecalho/>

    <section className='pag-cursos-certificados'>
        <div>
            <h1 className='pag-certificados-titulo'>Meus Cursos e Certificados</h1>
        </div>
    </section>
        <details>
            <summary>Desenvolvimento Web
                <Image src={Seta} alt=''width={80} height={100}/>
            </summary>
            <div className='summary-open'>
                <div className='certificado-img'>
                    <Image src={Certificado2} alt='' width={600} height={400}/>
                </div>
                <div className='certificado-img'>
                    <Image src={Certificado3} alt='' width={600} height={400}/>
                </div>
                <div className='certificado-img'>
                    <Image src={Certificado4} alt='' width={600} height={400}/>
                </div>
                
            </div>
        </details>

        <details>
            <summary>User Experience e Metodologias Ágeis
            <Image src={Seta} alt=''width={80} height={100}/>
            </summary>
            <div className='summary-open'>
                <div className='certificado-img'>
                    <Image src={Certificado8} alt='' width={600} height={400}/>
                </div>
                <div className='certificado-img'>
                    <Image src={Certificado9} alt='' width={600} height={400}/>
                </div>
                <div className='certificado-img'>
                    <Image src={Certificado10} alt='' width={600} height={400}/>
                </div>
                
            </div>
        </details>

        <details>
            <summary>Lógica de Programação
            <Image src={Seta} alt=''width={80} height={100}/>
            </summary>
            <div className='summary-open'>
                <div className='certificado-img'>
                    <Image src={Certificado1} alt='' width={600} height={400}/>
                </div>
                <div className='certificado-img'>
                    <Image src={Certificado7} alt='' width={600} height={400}/>
                </div>
             
            </div>
        </details>

        <details>
            <summary>Inglês
            <Image src={Seta} alt=''width={80} height={100}/>
            </summary>
            <div className='summary-open'>
                <div className='certificado-img'>
                    <Image src={Certificado5} alt='' width={600} height={400}/>
                </div>
                <div className='certificado-img'>
                    <Image src={Certificado6} alt='' width={600} height={400}/>
                </div>
                
            </div>
        </details>

    <section>

    </section>
        </>
    )
}