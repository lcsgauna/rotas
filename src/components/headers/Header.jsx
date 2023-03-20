import '../../styles/Headers/styles.css'
import Planet from '../../assets/world.svg'
import Dots from '../../assets/dots_nine.svg'


export default function Header(){
    return (
        <>
            <header>
                <div className='header-container'>
                <h1>Rotas</h1>
                <nav className='header-item-first-menu'>
                    <ul>
                        <li><a href="/">Empresa</a></li>
                        <li><a href="/">Segurança</a></li>
                        <li><a href="/">Ajuda</a></li>
                    </ul>
                </nav>
                <nav className='header-item-second-menu'>
                    <ul>
                        <li>
                            <a href="/">
                                <img className='header-item-img' src={Planet} alt='Geolocalizacao logo'/>
                                PT-BR
                            </a>
                        </li>
                        <li><a href="/">
                            <img className='header-item-img' src={Dots} alt='Produtos logo'/>
                            Produtos
                        </a></li>
                        <li><a href="/">Fazer Login</a></li>
                        <li><button>Cadastre-se</button></li>
                    </ul>
                </nav>
                </div>
            </header>
        </>
    )
}