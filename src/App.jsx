import "./App.css";
import Card from "./components/Card"

function App() {

  return (
    <>
    <p className="text-xl tracking-wide">React Cards</p>
    <div className="card">
     <Card username="Bangladesh" btnText = "Visit Bangladesh" img="https://cdn.britannica.com/97/189797-050-1FC0041B/Night-view-Dhaka-Bangladesh.jpg"/>
     <Card username="Germany" btnText = "Visit Germany" img="https://lp-cms-production.imgix.net/features/2015/12/GettyRF_465892570-1-571092c9c65f.jpg?auto=format&w=1440&h=810&fit=crop&q=75"/>
     </div>
    </>
  );
}

export default App;
