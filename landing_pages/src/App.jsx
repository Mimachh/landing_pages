import { BrowserRouter, Route, Routes } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas, Techno } from './components';
import { Toaster } from "react-hot-toast";

import Landing_1 from "./Landing_1";
import Landing_2 from "./components/Landing_2";
import Landing_3 from "./components/Landing_3";
import Landing_4 from "./components/Landing_4";



const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-50 bg-primary">
        <Navbar />
        <Toaster/>
      </div>
      <Routes>
        <Route path="/" exact element={<Landing_1 />} />
        <Route path="/landing_2" exact element={<Landing_2 />} />
        <Route path="/landing_3" exact element={<Landing_3 />} />
        <Route path="/landing_4" exact element={<Landing_4 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
