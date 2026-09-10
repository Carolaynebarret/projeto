import Footer from "components/Footer";
import GraficoPizza from "components/DonutChart";
import GraficoBarras from "components/BarChart";
import NavBar from "components/NavBar";

const Dashboard = () => {
    return (
        <>
        <NavBar />

        <div className="container" >
          <h2 className="bs-font-sans-serif " >  Dados  </h2>


        <div className="row px-3">
          <div className="col-sm-6">
            <GraficoPizza />
          </div>
          <div className="col-sm-6">
            <GraficoBarras />
          </div>
        </div>
      </div>

      <Footer />
    </>

  );
}

export default Dashboard;
