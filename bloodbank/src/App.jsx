// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import 'bootstrap/dist/css/bootstrap.min.css';
import Form4 from "./components/Forms/Form4";
import Form1 from "./components/Forms/Form1";
import Form2 from "./components/Forms/Form2";
import Form3 from "./components/Forms/Form3";
import Form5 from "./components/Forms/Form5";
import Form12 from "./components/Forms/Form12";
import Form13 from "./components/Forms/Form13";
import Form14 from "./components/Forms/Form14";
import Form19 from "./components/Forms/Form19";
import Form20 from "./components/Forms/Form20";
import Form6 from "./components/Forms/Form6";
import Form7 from "./components/Forms/Form7";
import Form8 from "./components/Forms/Form8";
import Form9 from "./components/Forms/Form9";
import Form10 from "./components/Forms/Form10";
import Form11 from "./components/Forms/Form11";
import Form21 from "./components/Forms/Form21";
import Form22 from "./components/Forms/Form22";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/1" element={<Form1 />} />
          <Route path="/4" element={<Form4 />} />
          <Route path="/2" element={<Form2 />} />
          <Route path="/3" element={<Form3 />} />
          <Route path="/5" element={<Form5 />} />
          <Route path="/6" element={<Form6 />} />
          <Route path="/7" element={<Form7 />} />
          <Route path="/8" element={<Form8 />} />
          <Route path="/9" element={<Form9 />} />
          <Route path="/10" element={<Form10 />} />
          <Route path="/11" element={<Form11 />} />
          <Route path="/12" element={<Form12 />} />
          <Route path="/13" element={<Form13 />} />
          <Route path="/14" element={<Form14 />} />
          <Route path="/15" element={<Form19 />} />
          <Route path="/16" element={<Form20 />} />
          <Route path="/17" element={<Form21 />} />
          <Route path="/18" element={<Form22 />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
