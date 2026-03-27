// App.jsx
import Navbar from "./components/navbar/navbar.jsx"
import Home from "./page/home/home.jsx"
import Footer from "./components/footer/footer.jsx"
import './index.css' // Pastikan mengimpor file CSS-nya

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <Footer />
    </div>
  )
}

export default App