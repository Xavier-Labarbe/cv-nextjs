import Header from "./components/header";
import Home from "./components/home";

export default function App() {
  return (
    <div>
      <Header/>
        <main className="main">
            <Home/>
        </main>
    </div>
  )
}
