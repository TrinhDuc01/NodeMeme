import { useSelector } from "react-redux";
import Router from "./routers/Router";


function App() {
  let color = useSelector(state => state.color.currentColor)
  document.body.style = `background: ${color?.backgroundColor}`;
  return (
    <div className="container">
      <Router />
    </div>
  );
}

export default App;
