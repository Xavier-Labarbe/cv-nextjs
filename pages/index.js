import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Qualification from "./components/qualification";

export default function App() {
  return (
    <div>
      <Header/>
        <main className="main">
            <Home/>
            <About/>
            <Skills/>
            <Qualification/>
        </main>
    </div>
  )
}
