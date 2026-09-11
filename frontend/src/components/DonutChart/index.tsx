import { Chart } from "react-google-charts";

const options = {
  title: 'Gráfico de Pizza'
};

const data = [
  ['Linguagens', 'Quantidade'],
  ['React', 100],
  ['Angula', 80],
  ['Vue', 50],
];

const GraficoPizza = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex" }}>
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            data={data}
            options={options}
          />

        </div>
      </header>
    </div>
  );
}

export default GraficoPizza;
