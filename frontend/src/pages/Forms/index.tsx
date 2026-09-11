import Footer from "components/Footer";
import Form from "components/Form";
import NavBar from "components/NavBar";

const Formulario = () => {
    return (
        <>
        <NavBar />
  
        <div className="container" >
          <h2 className = "bs-font-sans-serif " >  Dados Pessoais </h2>
          <Form /> 
        </div>
    
         
                
         <Footer />
      </>
    );
}

export default Formulario;
