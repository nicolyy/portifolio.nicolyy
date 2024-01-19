import Image from 'next/image'
import Link from 'next/link'

import Cabecalho from '@/components/cabecalho/cabecalho-principal'
import Rodape from '@/components/rodape/rodape'

import TypingEffect from '@/components/typingEffect/TypingEffect'

export default function meusProjetos(){

   const textToType = 'Pegue o seu café, projeto em desenvolvimento...';
    return(
        <>
        <Cabecalho/>
        <div className='main-meus-projetos'>
            <h1>Meus Projetos</h1>
        </div>
        <div className='projetos'>

            <div className='container-projeto'>
               <Link href='https://allankelwin-portifolio.netlify.app/' target='_blank'>
               <div className='projeto-item proj1'></div>
               </Link>
               <Link href="#" className='githup-rep'></Link>
            </div>

            <div className='container-projeto'>
               <Link href='https://netflix-clone-me4yo81qm-nicolyy.vercel.app/' target='_blank'>
               <div className='projeto-item proj2'></div>
               </Link>
            </div>

            <div className='container-projeto'>
               <Link href='https://dev-links-projeto-discover-r8ckiqa3n-nicolyy.vercel.app/' target='_blank'>
               <div className='projeto-item proj3'></div>
               </Link>
            </div>

            <div className='container-projeto'>
               <div  className='projeto-item proj4'>
               <h3 className='typingEffect'>Pegue o seu café, projeto em desenvolvimento...</h3>
               </div>
               
            </div>

            <div className='container-projeto'>
               <div  className='projeto-item proj5'>
               <h3 className='typingEffect'>Pegue o seu café, projeto em desenvolvimento...</h3>
               </div>
               
            </div>

            <div className='container-projeto'>
               <div  className='projeto-item proj6'>
               <h3 className='typingEffect'>Pegue o seu café, projeto em desenvolvimento...</h3>
               </div>
               
            </div>
            
            <div className='container-projeto'>
               <div  className='projeto-item proj7'>
               <h3 className='typingEffect'>Pegue o seu café, projeto em desenvolvimento...</h3>
               </div>
               
            </div>

            <div className='container-projeto'>
               <div  className='projeto-item proj8'>
               <h3 className='typingEffect'>Pegue o seu café, projeto em desenvolvimento...</h3>
               </div>
               
            </div>

          
        </div>
        <Rodape/>
        </>
    )
}