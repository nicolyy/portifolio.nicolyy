
import Image from 'next/image'
import './modal.scss'


import Formacao from '../../../public/Formacao.svg'
import SoftSkills from '../../../public/SoftSkills.svg'
import Profissional from '../../../public/Profissional.svg'

export default function MeuModal(){
    return(
        <div className='container-modal'>
              <div className='modal-item'>
                <button className='modal formacao' id='openModalBtn'>
                    <Image src={Formacao} alt="" width={50} height={50}/>
                </button>
                <p className='modal-titulo'>Formação</p>
              </div>

              <div className='modal-item'>
                <button className='modal soft-skills'>
                    <Image src={SoftSkills} alt="" width={50} height={50}/>
                </button>
                <p  className='modal-titulo'>Soft Skills</p>
              </div>

              <div className='modal-item'>
                <button className='modal profissional'>
                    <Image src={Profissional} alt="" width={50} height={50}/>
                </button>
                <p  className='modal-titulo'>Profissional</p>
              </div>
            </div>
    )
}