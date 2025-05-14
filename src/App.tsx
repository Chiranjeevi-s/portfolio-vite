import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";

const App = () => {
  const isProd = import.meta.env.PROD;
  return (
    <>
      <BrowserRouter basename={isProd ? "/portfolio-vite" : "/"}>
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;
