import React from 'react';
import Modal from 'react-modal';
import Image from 'next/image'


import SoftSkills from '../../../public/SoftSkills.svg'
import Close from '../../../public/fechar.png'



const ModalSoftskills= ({ isOpen, closeModal, contentLabel }) => {
  return (
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
            <Image src={SoftSkills} alt=''/>
          </div>
        <ul>
            <li>Aprendizado Ativo</li>
            <li>Inteligência Emocional</li>
            <li>Proatividade</li>
            <li>Planejamento</li>
            <li>Trabalho em Equipe</li>
            <li>Adaptabilidade</li>
        </ul>
        </div>'
      </div>
      
    
     
    </Modal>
  );
};

export default ModalSoftskills;