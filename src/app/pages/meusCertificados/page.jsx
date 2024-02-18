import Image from 'next/image'
import '../../../components/styles/style.scss'

import Cabecalho from '@/components/cabecalho/cabecalho-principal'

import Seta from '../../../../public/Seta.svg'

import Certificado1 from '../../../../public/Certificados/logica-de-programacao/logica.png'
import Certificado2 from '../../../../public/Certificados/desenvolvimento-web/github.png'
import Certificado3 from '../../../../public/Certificados/desenvolvimento-web/htmlcssalura1.png'
import Certificado4 from '../../../../public/Certificados/desenvolvimento-web/apartirdozeroalurahtmlcss.png'
import Certificado5 from '../../../../public/Certificados/ingles/skillidiomas.png'
import Certificado6 from '../../../../public/Certificados/ingles/englishcursera.png'
import Certificado7 from '../../../../public/Certificados/logica-de-programacao/logicajs.png'
import Certificado8 from '../../../../public/Certificados/ux-ui/uspui.ux-1.png'
import Certificado9 from '../../../../public/Certificados/ux-ui/DesignThinkingFIAP.png'
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
                <div className='certificado-img-container'>
                    <Image className='certificado-img' src={Certificado2} alt='Certificado' />
                </div>
                <div className='certificado-img-container'>
                    <Image  className='certificado-img' src={Certificado3} alt='Certificado' />
                </div>
                <div className='certificado-img-container'>
                    <Image  className='certificado-img' src={Certificado4} alt='Certificado'/>
                </div>
                
            </div>
        </details>

        <details>
            <summary>User Experience e Metodologias Ágeis
            <Image src={Seta} alt=''width={80} height={100}/>
            </summary>
            <div className='summary-open'>
                <div className='certificado-img-container'>
                    <Image  className='certificado-img' src={Certificado8} alt='Certificado' />
                </div>
                <div className='certificado-img-container'>
                    <Image  className='certificado-img' src={Certificado9} alt='Certificado' />
                </div>
                <div className='certificado-img-container'>
                    <Image  className='certificado-img' src={Certificado10} alt='Certificado'/>
                </div>
                
            </div>
        </details>

        <details>
            <summary>Lógica de Programação
            <Image src={Seta} alt=''width={80} height={100}/>
            </summary>
            <div className='summary-open'>
                <div className='certificado-img-container'>
                    <Image  className='certificado-img' src={Certificado1} alt='Certificado' />
                </div>
                <div className='certificado-img-container'>
                    <Image  className='certificado-img' src={Certificado7} alt='Certificado' />
                </div>
             
            </div>
        </details>

        <details>
            <summary>Inglês
            <Image src={Seta} alt=''width={80} height={100}/>
            </summary>
            <div className='summary-open'>
                <div className='certificado-img-container'>
                    <Image  className='certificado-img' src={Certificado5} alt='Certificado' />
                </div>
                <div className='certificado-img-container'>
                    <Image  className='certificado-img' src={Certificado6} alt='Certificado'/>
                </div>
                
            </div>
        </details>
        <details>
            <summary>Github
            <Image src={Seta} alt=''width={80} height={100}/>
            </summary>
            <div className='summary-open'>
                <div className='certificado-img-container'>
                    <Image  className='certificado-img' src={Certificado6} alt='Certificado'/>
                </div>
                
            </div>
        </details>

    <section>

    </section>
        </>
    )
}