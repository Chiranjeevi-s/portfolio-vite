import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/portfolio-vite">
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;
