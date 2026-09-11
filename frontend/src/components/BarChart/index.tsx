import { Chart } from "react-google-charts";

const optionsBar = {
  title: 'Gráfico de Barra'
};

const dataBar = [
  ['Cidades', '2010 População', '2000 População'],
  ['New York City, NY', 8175000, 8008000],
  ['Los Angeles, CA', 3792000, 3694000],
  ['Chicago, IL', 2695000, 2896000],
  ['Houston, TX', 2099000, 1953000],
  ['Philadelphia, PA', 1526000, 1517000],
];

const GraficoBarras = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex" }}>
          <Chart
            width={'300px'}
            height={'300px'}
            chartType="BarChart"
            data={dataBar}
            options={optionsBar}
          />
        </div>
      </header>
    </div>
  );
}

export default GraficoBarras;
