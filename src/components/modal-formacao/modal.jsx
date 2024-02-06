import React from 'react';
import Modal from 'react-modal';
import Image from 'next/image'


import Formacao from '../../../public/Formacao.svg'
import Close from '../../../public/fechar.png'

import './modal.scss'

const ModalFormacao = ({ isOpen, closeModal, contentLabel }) => {
  return (
    <main className='modal-principal'>
    <Modal className="modal"
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel={contentLabel}
    >
   
      
        <div className='modal-tela'>
          <button className='close-button' onClick={closeModal}>
            <Image src={Close}  alt=''/>
          </button>
          
              <div className='modal-open'>
                <div className='modal-icone'>
                  <Image className='modal-img img-formacao' src={Formacao} alt=''/>
                </div>
                <div className='modal-profissional'>
                    <div>
                      <h3 className='modal-open-titulo'>Superior em Análise e Desenvolvimento de Sistemas</h3>
                      <p className='modal-open-texto'>2023 - Atualmente</p>
                      <p className='modal-open-texto'>FIAP</p>
                    </div>
                    <div>
                      <h3 className='modal-open-titulo'>Ensino Médio Técnico (Informática) </h3>
                      <p className='modal-open-texto'>2020-2022 (Completo) </p>
                      <p className='modal-open-texto'>ETEC de Sapopemba</p>
                    </div>
                    <div >
                      <h3 className='modal-open-titulo'>Inglês Teen</h3>
                      <p className='modal-open-texto'>2018 - 2021 (Completo)</p>
                      <p className='modal-open-texto'>Skill Idiomas</p>
                    </div>
                    
                </div>
              </div>
      </div>
    </Modal>
    </main>
  );
};

export default ModalFormacao;