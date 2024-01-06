import Image from 'next/image'
import '../../../components/styles/style.scss'

import Cabecalho from '@/components/cabecalho/cabecalho-principal'

import Seta from '../../../../public/Seta.svg'

import Certificado1 from '../../../../public/Certificados/logica-de-programacao/Logica de Programação - FIAP - NANO COURSE.png'

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
                <div>
                    <Image src={Certificado1} alt='' width={500} height={300}/>
                </div>
            </div>
        </details>

        <details>
            <summary>User Experience e Metodologias Ágeis
            <Image src={Seta} alt=''width={80} height={100}/>
            </summary>
            <div className='summary-open'>
                <p></p>
            </div>
        </details>

        <details>
            <summary>Lógica de Programação
            <Image src={Seta} alt=''width={80} height={100}/>
            </summary>
            <div className='summary-open'>
                <p></p>
            </div>
        </details>

        <details>
            <summary>Inglês
            <Image src={Seta} alt=''width={80} height={100}/>
            </summary>
            <div className='summary-open'>
                <p></p>
            </div>
        </details>

    <section>

    </section>
        </>
    )
}