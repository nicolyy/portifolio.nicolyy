'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import '../components/styles/style.scss'



{/* Importando os componentes*/}
import Cabecalho from '../components/cabecalho/cabecalho-social-medias'
import Rodape from '@/components/rodape/rodape'
import Formulario from '@/components/formulario/formulario'
import Curriculo from '@/components/curriculo/curriculo'

import FadeInUp from '@/components/FadeInUp/fadeinup';


{/* Importando os Modals*/}
import ModalFormacao from '@/components/modal-formacao/modal'
import ModalSoftskills from '@/components/modal-softskills/modal'
import ModalProfissional from '@/components/modal-profissional/modal'

{/* Importando logotipo dos Modals*/}
import Formacao from '../../public/Formacao.svg'
import SoftSkills from '../../public/SoftSkills.svg'
import Profissional from '../../public/Profissional.svg'


{/* Importando logotipo das habilidades*/}
import Html from '../../public/html.svg'
import Css from '../../public/Css.svg'
import JavaScript from  '../../public/JavaScript.svg'
import React from  '../../public/React.svg'
import Figma from '../../public/Figma.svg'
import Github from '../../public/GitHub.svg'
import Block from '../../public/Block.svg'


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
                    <FadeInUp delay={0}>
                    <div id='section2'>
                        <h1 className='titulo1'>Olá!, meu nome é</h1>
                        <h1>Nicoly Oliveira</h1>
                        <p className='subtitulo'>Eu sou Desenvolvedora em processo...</p>
                    </div>
                    </FadeInUp>
                </div>
                <FadeInUp delay={200}>
                <div id='section2'>
                <div className='botoes-titulo'>
                    <Link className='btn-conhecer glow-on-hover' href="#"> Conhecer</Link>
                    <Curriculo fileUrl={documentoUrl} fileName={nomeDoDocumento}/>
                </div>
                </div>
                </FadeInUp>

        </main>
        

        <section className='sobre-mim'>
        <FadeInUp delay={400}>
        <div id='section1'>
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
                    <div className='modal-transicao'>
                        <div className='cont-modal'>
                                <button onClick={openModalFormacao} className='btn-modal'>
                                    <Image src={Formacao} alt="logotipo representando a formacao" width={50} height={50}/>
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
                        <div className='modal-transicao'>
                            <button onClick={openModalSoftskills} className='btn-modal'>
                                <Image src={SoftSkills} alt='logotipo representando as softskills' width={50} height={50}/>
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
                        <div className='modal-transicao'>
                            <button onClick={openModalProfissional} className='btn-modal'>
                                <Image src={Profissional} alt='logotipo representand o profissional' width={50} height={50}/>
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
            </div>
            </FadeInUp>
        </section>
        
        <section className='habilidades'>    
            <h2>Minhas habilidades</h2>
            <div className='container-habilidades'>
                <div className='habilidade-item'>
                    <Image className='hover-zoom' src={Html} alt=" Logo HTML"/>
                </div>
                <div className='habilidade-item'>
                    <Image className='hover-zoom'  src={Css} alt="Logo CSS"/>
                </div>
                <div className='habilidade-item'>
                    <Image className='hover-zoom'  src={JavaScript} alt="Logo JAVASCRIPT"/>
                </div>
                <div className='habilidade-item'>
                    <Image className='hover-zoom'  src={React} alt="Logo REACT"/>
                </div>
                <div className='habilidade-item'>
                    <Image className='hover-zoom'  src={Figma} alt="Logo FIGMA"/>
                </div>
                <div className='habilidade-item'>
                    <Image className='hover-zoom'  src={Github} alt="Logo GITHUB"/>
                </div>
                <div className='habilidade-item'>
                    <Image className='hover-zoom'  src={Block} alt="Logo BLOCK"/>
                </div>
                <div className='habilidade-item'>
                    <Image className='hover-zoom'  src={Block} alt="Logo BLOCK"/>
                </div>
                <div className='habilidade-item'>
                    <Image className='hover-zoom'  src={Block} alt="Logo BLOCK"/>
                </div>
                <div className='habilidade-item'>
                    <Image className='hover-zoom'  src={Block} alt="Logo BLOCK"/>
                </div>
                <div className='habilidade-item'>
                    <Image className='hover-zoom'  src={Block} alt="Logo BLOCK"/>
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
