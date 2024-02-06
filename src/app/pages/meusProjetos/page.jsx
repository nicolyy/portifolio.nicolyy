import Image from 'next/image'
import Link from 'next/link'

import Cabecalho from '@/components/cabecalho/cabecalho-principal'
import Rodape from '@/components/rodape/rodape'
import Github from '../../../../public/GitIconewhite.svg'



export default function meusProjetos(){


   const textToType = 'Pegue o seu café, projeto em desenvolvimento...';
    return(
        <>
        <Cabecalho/>
        <div className='main-meus-projetos'>
            <h1>Meus Projetos</h1>
        </div>
        <div className='projetos'>
            <div className='container-projeto' id='proj1'>
               <Link href='https://allankelwin-portifolio.netlify.app/' target='_blank'>
               <div className='projeto-item proj1'></div>
               </Link>
               <div className='github-rep'>
               <Link href='https://github.com/nicolyy/allanKelwin.portifolio'target='_blank'>
                  <Image src={Github} alt='' width={40} height={40}/>
                  </Link>
               </div>
            </div>
           

            <div className='container-projeto'>
               <Link href='https://netflix-clone-me4yo81qm-nicolyy.vercel.app/' target='_blank'>
               <div className='projeto-item proj2'></div>
               </Link>
               <div className='github-rep'>
                  <Link href='https://github.com/nicolyy/netflix' target='_blank'>
                  <Image src={Github} alt='' width={40} height={40}/>
                  </Link>
               </div>
            </div>

            <div className='container-projeto'>
               <Link href='https://dev-links-projeto-discover-r8ckiqa3n-nicolyy.vercel.app/' target='_blank'>
               <div className='projeto-item proj3'></div>
               </Link>
               <div className='github-rep'>
               <Link href='https://github.com/nicolyy/dev.links.projeto.discover'target='_blank'>
                  <Image src={Github} alt='' width={40} height={40}/>
                  </Link>
               </div>
            </div>

            <div className='container-projeto'>
               <div  className='projeto-item proj4'>
               <div className='typewriter'>
                        
                        <h3>Projeto em desenvolvimento...</h3>
                  </div>
   
               </div>
               <div className='github-rep'>
               <Link href='#'>
                  <Image src={Github} alt='' width={40} height={40}/>
                  </Link>
               </div>
               
            </div>

            <div className='container-projeto'>
               <div  className='projeto-item proj5'>
               <div className='typewriter'>
                     <h3>Projeto em desenvolvimento...</h3>
                  </div>
               </div>
               <div className='github-rep'>
               <Link href='#'>
                  <Image src={Github} alt='' width={40} height={40}/>
                  </Link>
               </div>
               
            </div>

            <div className='container-projeto'>
               <div  className='projeto-item proj6'>
               <div className='typewriter'>
                     <h3>Projeto em desenvolvimento...</h3>
                  </div>
               </div>
               <div className='github-rep'>
               <Link href='#'>
                  <Image src={Github} alt='' width={40} height={40}/>
                  </Link>
               </div>
               
            </div>
            
            <div className='container-projeto'>
               <div  className='projeto-item proj7'>
               <div className='typewriter'>
                     <h3>Projeto em desenvolvimento...</h3>
                  </div>

               </div>
               <div className='github-rep'>
               <Link href='#'>
                  <Image src={Github} alt='' width={40} height={40}/>
                  </Link>
               </div>
               
            </div>

            <div className='container-projeto'>
               <div  className='projeto-item proj8'>
                  <div className='typewriter'>
                     <h3>Projeto em desenvolvimento...</h3>
                  </div>
               </div>
               <div className='github-rep'>
               <Link href='#'>
                  <Image src={Github} alt='' width={40} height={40}/>
                  </Link>
               </div>
               
            </div>

          
        </div>
        <Rodape/>
        </>
    )
}