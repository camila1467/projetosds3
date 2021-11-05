import BarCart from "components/Barchart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";


function App() {
  return (
    <>
    <NavBar/>
    <div className="container"> <h1 className="text-primary">ola mundo</h1>
    </div>

    <DataTable />
    <Footer />
  </>
    );

}

export default App;
