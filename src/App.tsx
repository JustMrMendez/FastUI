import Navbar from "./components/navigation/Navbar"
import Home from "./views/home"

function App() {

  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col bg-indigo-200/50">
      <Navbar />
      <Home />
    </div>
  )
}

export default App
