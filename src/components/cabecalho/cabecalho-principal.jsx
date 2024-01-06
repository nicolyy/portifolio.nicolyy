
import Link from 'next/link'
import './cabecalho.scss'


export default function CabecalhoPrincipal(){
    return(
        <>
          <header className='cabecalho-principal'>
            <nav className='container-cabecalho-principal'>
                <Link className='cabecalho-item' href='/'>
                    HOME
                </Link>
                <Link className='cabecalho-item' href='/pages/meusProjetos'>
                    ACESSAR PORTIFÓLIO
                </Link>
                <Link className='cabecalho-item' href='/pages/meusCertificados'>
                    CERTIFICADOS
                </Link>
            </nav>
        </header>
        
        </>
    )

}