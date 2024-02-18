import React from 'react';
import Modal from 'react-modal';
import Image from 'next/image'


import Profissional from '../../../public/Profissional.svg'
import Close from '../../../public/fechar.png'



const ModalProfissional = ({ isOpen, closeModal, contentLabel }) => {
  return (
    <Modal className="modal"
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel={contentLabel}
    >

    <div className='modal-tela-profissional'>
          <button className='close-button' onClick={closeModal}>
            <Image src={Close}  alt=''/>
          </button>
    <div className='modal-open'>
      <div className='modal-icone'>
        <Image src={Profissional} alt=''/>
      </div>
      <div className='modal-profissional'>
        <div>
          <h3 className='modal-open-titulo'>Auxiliar Administrativo - Secretaria</h3>
          <p>Maio - (Atualmente) </p>
          <p >Poliedro Educação, São Paulo, Brasil</p>
          <p className='modal-open-texto'>Atendimento presencial e telefônico, organização de Prontuários,
            cadastro de alunos, rescisão de contrato e novas matriculas,
            desenvolvimento de planilhas e utilização do pacote office</p>
        </div>
        <div>
          <h3 className='modal-open-titulo'>Jovem Aprendiz - Secretaria</h3>
          <p >Fevereiro 2023 - Maio 2023 </p>
          <p >Poliedro Educação, São Paulo, Brasil</p>
          <p className='modal-open-texto'>Atendimento presencial e telefônico, 
            organização de Prontuários, impressão de documentos e cadastro de alunos.</p>
        </div>
        <div>
          <h3 className='modal-open-titulo'>Empreendedora - Loja Online</h3>
          <p >Novembro 2020 - Fevereiro 2022</p>
          <p >Poliedro Educação, São Paulo, Brasil</p>
          <p className='modal-open-texto'>Criação de papelaria personalizada, presentes, convites, 
            lembranças e artes digitais. 
            Utilização dos softwares Adobe Firework, 
            Illustrator, Silhouette Studio. 
            Impressões jato de tinta, plastificação.</p>
        </div>
      </div>
      </div>
        
    </div>
    </Modal>
  );
};

export default ModalProfissional;