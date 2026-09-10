import Footer from "components/Footer";
import NavBar from "components/NavBar";

const Contatos = () => {
    return (
      <>
      <NavBar />

      <div className="container">
      <div className="jumbotron">
          <h2 className="display-9">Contatos</h2>
          <hr/>
          <div className="lead">
            <div>
            <a href="https://github.com/AdrielLeao" target="_blank" rel="noreferrer"> Adriel Leão </a>
            </div>
            <div>
                <a href="https://github.com/Carolaynebarret" target="_blank" rel="noreferrer">Carolayne Barreto </a>
            </div>
            <div>
                <a href="https://github.com/danielicapui" target="_blank" rel="noreferrer">Daniel Lucas </a>
            </div>
            <div>
                <a href="https://github.com/fagner73" target="_blank" rel="noreferrer">José Fagner </a>
            </div>
            <div>
                <a href="https://github.com/rodrygocb" target="_blank" rel="noreferrer">Rodrigo Costa </a>
            </div>
          </div>
      </div>
      <hr/>
  </div>
    
       <Footer />
    </>
      );
    }
    
    export default Contatos;
    