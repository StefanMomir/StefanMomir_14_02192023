import "./styles/App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import MainRoutes from "./routes/Routes.jsx";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
