import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mainlayout from "./Layout/Mainlayout";
import Home from "./Components/Home";
import Aboutus from "./Components/Aboutus";
import WhatWeDo from "./Components/Whatwedo";
import Insights from "./Components/Insights";
import Careers from "./Components/Careers";
import Media from "./Components/Media";
import Contact from "./Components/Contact";
import Icon from "./Components/Icon";
import Rural from "./Pages/Rural";
import Health from "./Pages/Health";
import Arts from "./Pages/Arts";
import Education from "./Pages/Education";
import Sports from "./Pages/Sports";
import Womenempowerment from "./Pages/Womenempowerment";
import Urban from "./Pages/Urban";
import Disaster from "./Pages/Disaster";
import Environment from "./Pages/Environment";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/whatwedo" element={<WhatWeDo />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rural" element={<Rural/>}/>
        <Route path="/health" element={<Health/>}/>
        <Route path="/arts" element={<Arts/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/sports" element={<Sports/>}/>
        <Route path="/woman" element={<Womenempowerment/>}/>
        <Route path="/urban" element={<Urban/>}/>
        <Route path="/disaster" element={<Disaster/>}/>
        <Route path="/environment" element={<Environment/>}/>
      </Route>
    </Routes>
  );
}

export default App;
