''

import Image from 'next/image'
import Link from 'next/link'
import '../components/styles/style.scss'

import Cabecalho from '../components/cabecalho/cabecalho-social-medias'
import Rodape from '@/components/rodape/rodape'
import Carrossel from '@/components/carrossel/carrossel'
import Formulario from '@/components/formulario/formulario'
import Modal from '@/components/modal/modal'



import Html from '../../public/html.svg'
import Css from '../../public/Css.svg'
import JavaScript from  '../../public/JavaScript.svg'
import React from  '../../public/React.svg'
import Figma from '../../public/Figma.svg'
import Github from '../../public/Github.svg'
import Block from '../../public/Block.svg'




export default function Home() {
 
  return (
    <>
    <Cabecalho/>
       
        
        <main className='container-principal'>
            <div className='container-titulo'>
                <h1 className='titulo1'>Olá!, meu nome é</h1>
                <h1>Nicoly Oliveira</h1>
                <p className='subtitulo'>Eu sou Desenvolvedora em processo...</p>
            </div>
            <div className='botoes-titulo'>
                <Link className='btn-conhecer' href="#"> Conhecer</Link>
                <Link className='btn-curriculo' href="#"> Curriculo</Link>
            </div>
        </main>
        <section className='sobre-mim'>
          <div className='sobre-mim-texto'>
              <h2>Sobre Mim</h2>
              <p>Prazer, Nicoly! Sou estudante de análise e desenvolvimento de sistenas, 
              morando em São Paulo. Eu me interesso pela área desde os meus 15 anos, 
              quando tive o meu primeiro contato por meio do técnico, através do curso
              consegui ter a certeza que era o que eu queria. Sou apaixonada por Design
              Digital e Desenvolvimento Web, tenho como objetivo seguir com a carreira 
              de Front End e User Experience, mas disposta a conhecer novos caminhos. 
              Há um ano, consegui minha bolsa de 100% através do Prouni, onde tive a 
              oportunidade de iniciar a minha graduação, agora, estou em busca de 
              uma oportunidade para desenvolver minhas habilidades. <button className='texto-curriculo'>Meu Curriculo</button></p>
            </div>
            <Modal/>
            
        </section>


        <section className='habilidades'>
            <h2>Minhas habilidades</h2>
            <div className='container-habilidades'>
                <div className='habilidade-item'>
                    <Image className='hover-zoom' src={Html} alt=""/>
                </div>
                <div className='habilidade-item'>
                    <Image className='hover-zoom'  src={Css} alt=""/>
                </div>
                <div className='habilidade-item'>
                    <Image className='hover-zoom'  src={JavaScript} alt=""/>
                </div>
                <div className='habilidade-item'>
                    <Image className='hover-zoom'  src={React} alt=""/>
                </div>
                <div className='habilidade-item'>
                    <Image className='hover-zoom'  src={Figma} alt=""/>
                </div>
                <div className='habilidade-item'>
                    <Image className='hover-zoom'  src={Github} alt=""/>
                </div>
                <div className='habilidade-item'>
                    <Image className='hover-zoom'  src={Block} alt=""/>
                </div>
                <div className='habilidade-item'>
                    <Image className='hover-zoom'  src={Block} alt=""/>
                </div>
                <div className='habilidade-item'>
                    <Image className='hover-zoom'  src={Block} alt=""/>
                </div>
                <div className='habilidade-item'>
                    <Image className='hover-zoom'  src={Block} alt=""/>
                </div>
                <div className='habilidade-item'>
                    <Image className='hover-zoom'  src={Block} alt=""/>
                </div>
            </div>
        </section>
        <section className='projetos-desenvolvidos'>
            <h2>Projetos Desenvolvidos</h2>
            <Carrossel/>

            <div className='nav-projetos'>
              <Link className='nav-projetos-item' href="/pages/meusProjetos" >Acessar Portifólio</Link>
              <Link className='nav-projetos-item' href="/pages/meusCertificados">Certificados</Link>
            </div>
        </section>
        
       <Formulario/>
       <Rodape/>

    </>
    
  )
}
