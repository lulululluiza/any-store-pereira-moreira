import "./NavBar.css"
import logo from './logo-placeholder.png'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
//'@fortawesome/free-brands-svg-icons'
//'@fortawesome/free-regular-svg-icons'
//'@fortawesome/free-solid-svg-icons'

export default function NavBar() {    
    return (
        <div className="NavBar">
            <div className="NavSuperior">
                <Link to='/'>
                    <img src={logo} alt="logo"/>
                </Link>
                <div className="NavBusca">
                    <input type="text" name="" id="" placeholder="Digite o item procurado..."/>
                    <a href="#">
                        <FontAwesomeIcon icon={faMagnifyingGlass} size={"xl"} />
                    </a>
                </div>
                <div className="NavIcones">
                    <a href="#" className="NavPerfil">
                        <FontAwesomeIcon icon={faUser} style={{color: "#74C0FC",}} />
                    </a>
                    <a href="#" className="NavFavorito">                    
                        <FontAwesomeIcon icon={faHeart} style={{color: "#FF4D4D",}}/>
                    </a>
                    <CartWidget />
                </div>
            </div>
            <nav>
                <div className="NavCategorias">
                    <a href="#">
                        <FontAwesomeIcon icon={faBars} />
                        Categorias
                    </a>
                </div>
                <div className="NavCategoriasPopular">                    
                    <Link to={`/category/blusas`}>Blusas</Link>
                    <Link to={`/category/vestidos`}>Vestidos</Link>
                    <Link to={`/category/calcados`}>Calçados</Link>
                    <Link to={`/category/calcas`}>Calças</Link>
                    <Link to={`/category/moletons`}>Moletons</Link>
                </div>
            </nav>
        </div>
    )
}

//TODO
/*
- Uma barra de busca
*/ 
