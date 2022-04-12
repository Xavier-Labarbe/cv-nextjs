import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";

export default function App() {
  return (
    <div>
      <Header/>
        <main className="main">
            <Home/>
            <About/>
        </main>
    </div>
  )
}
