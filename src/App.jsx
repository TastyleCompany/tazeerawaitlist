// App.jsx
import Navbar from "./components/navbar/navbar.jsx"
import Hero from "./components/hero/hero.jsx"
import Phone from "./components/handphone/handphone.jsx"
import ProductCard from "./components/product-card/product-card.jsx"
import About from "./components/about/about.jsx"
import Fiture from "./components/fiture/fiture.jsx"
import Home from "./page/home/home.jsx"
import './index.css' // Pastikan mengimpor file CSS-nya

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
    </div>
  )
}

export default App