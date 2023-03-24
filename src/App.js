import './App.css';
import SampleAmcharts from './SampleAmcharts';
import SampleEcharts from './SampleEcharts';
import SamplePlotly from './SamplePlotly';

function App() {
  return (
    <div className="App">
      <div>
        <SampleAmcharts chartID="amchrts1" />
      </div>
      <div>
        <SampleEcharts />
      </div>
      <div>
        <SamplePlotly />
      </div>
    </div>
  );
}

export default App;
