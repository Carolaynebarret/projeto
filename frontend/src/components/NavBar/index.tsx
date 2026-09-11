import Img from 'assets/img/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
            <div className="container">

                <nav id="menu">
                    <img src={Img} alt="Projeto Final" width="100" />
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Formulario">Formulário </Link></li>
                        <li><Link to="/dashboard"> Gráficos </Link></li>
                        <li><Link to="/contatos">Contato</Link></li>
                    </ul>
                </nav>

            </div>
        </div>
    );
}

export default NavBar;
