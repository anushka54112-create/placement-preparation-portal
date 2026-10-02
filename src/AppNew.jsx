import { BrowserRouter } from "react-router-dom";
import Home from "./home";

function AppNew() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default AppNew;