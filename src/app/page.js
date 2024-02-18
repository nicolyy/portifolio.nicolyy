'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import '../components/styles/style.scss'

import Cabecalho from '../components/cabecalho/cabecalho-social-medias'
import Rodape from '@/components/rodape/rodape'
import Carrossel from '@/components/carrossel/carrossel'
import Formulario from '@/components/formulario/formulario'
import Curriculo from '@/components/curriculo/curriculo'



import ModalFormacao from '@/components/modal-formacao/modal'
import ModalSoftskills from '@/components/modal-softskills/modal'
import ModalProfissional from '@/components/modal-profissional/modal'

import Formacao from '../../public/Formacao.svg'
import SoftSkills from '../../public/SoftSkills.svg'
import Profissional from '../../public/Profissional.svg'



import Html from '../../public/html.svg'
import Css from '../../public/Css.svg'
import JavaScript from  '../../public/JavaScript.svg'
import React from  '../../public/React.svg'
import Figma from '../../public/Figma.svg'
import Github from '../../public/Github.svg'
import Block from '../../public/Block.svg'


import TypingEffect from '@/components/typingEffect/TypingEffect'



export default function Home() {

        const [modalFormacaoIsOpen, setModalFormacaoIsOpen] = useState(false);
        const [modalSoftskillsIsOpen, setModalSoftskillsIsOpen] = useState(false);
        const [modalProfissionalIsOpen, setModalProfissionalIsOpen] = useState(false);
    
        const openModalFormacao = () => {
          setModalFormacaoIsOpen(true);
        };
      
        const openModalSoftskills = () => {
          setModalSoftskillsIsOpen(true);
        };
      
        const openModalProfissional = () => {
          setModalProfissionalIsOpen(true);
        };
      
        const closeModal = () => {
          setModalFormacaoIsOpen(false);
          setModalSoftskillsIsOpen(false);
          setModalProfissionalIsOpen(false);
        };

        const documentoUrl = '../../public/curriculo.pdf';
        const nomeDoDocumento = 'curriculo.pdf';
 
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
                <Link className='btn-conhecer glow-on-hover' href="#"> Conhecer</Link>
                <Curriculo fileUrl={documentoUrl} fileName={nomeDoDocumento}/>
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
              uma oportunidade para desenvolver minhas habilidades.</p>
            </div>

          
        

            <div className='container-modal'>
                    <div>
                        <div className='cont-modal'>
                                <button onClick={openModalFormacao} className='btn-modal'>
                                    <Image src={Formacao} alt="" width={50} height={50}/>
                                </button>
                                <p className='modal-titulo'>Formação</p>
                        </div>
                        <div>
                                <ModalFormacao
                                    isOpen={modalFormacaoIsOpen}
                                    closeModal={closeModal}
                                    contentLabel=""
                                />
                        </div>
                    </div>
                    <div>
                        <div>
                            <button onClick={openModalSoftskills} className='btn-modal'>
                                <Image src={SoftSkills} alt='' width={50} height={50}/>
                                </button>
                                <p className='modal-titulo'>Soft Skills</p>
                        </div>
                        <div>
                            <ModalSoftskills
                                isOpen={modalSoftskillsIsOpen}
                                closeModal={closeModal}
                                contentLabel=""
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <button onClick={openModalProfissional} className='btn-modal'>
                                <Image src={Profissional} alt='' width={50} height={50}/>
                                </button>
                                <p className='modal-titulo'>Profissional</p>
                        </div>
                        <div>
                            <ModalProfissional
                                isOpen={modalProfissionalIsOpen}
                                closeModal={closeModal}
                                contentLabel=""
                            />
                        </div>
                    </div>
            </div>

            
          

           
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
            

            <div className='nav-projetos'>
              <Link className='nav-projetos-item' href="/pages/meusProjetos" >Portifólio</Link>
              <Link className='nav-projetos-item' href="/pages/meusCertificados">Certificados</Link>
            </div>
        </section>
        
       <Formulario/>
       <Rodape/>

    </>
    
  )
};
