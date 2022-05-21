import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Qualification from "./components/qualification";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Hiring from "./components/hiring";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Scroll_up from "./components/scroll_up";

import {useEffect} from 'react'

export default function App() {
  useEffect(() => {
    document.title = "Xavier Labarbe - CV"
})
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
        <Hiring></Hiring>
        <Contact></Contact>
      </main>
      <Footer></Footer>
      <Scroll_up></Scroll_up>
    </div>
  )
}
