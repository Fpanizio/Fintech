import Header from "./Components/Header/Header";
import Sidenav from "./Components/Sidenav/Sidenav";
import { DataContextProvider } from "./Context/DataContext";
import Resumo from "./pages/Resumo";
import "./Style.css";

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Resumo />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
