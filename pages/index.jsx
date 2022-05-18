import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Qualification from "./components/qualification";
import Services from "./components/services";
import Portfolio from "./components/portfolio";

export default function App() {
  return (
    <div>
      <Header/>
        <main className="main">
            <Home/>
            <About/>
            <Skills/>
            <Qualification/>
            <Services></Services>
            <Portfolio></Portfolio>
        </main>
    </div>
  )
}
