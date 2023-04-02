import { Routes, Route } from 'react-router-dom';

import './App.scss';
import { Sidebar } from './components';
import {
  Home,
  Blood,
  CTscan,
  Mri,
  Sonography,
  Xray,
  AllPatients,
  Patient,
  Treatment,
  Cases,
  AddTreatment,
  Reports,
} from './pages';

function App() {
  return (
    <div className="App">
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>

          <Route path="patients">
            <Route index element={<AllPatients />} />
            <Route path=":id">
              <Route index element={<Patient />} />
              <Route path="treatments">
                <Route path=":treatmentid" element={<Treatment />} />
              </Route>
            </Route>
          </Route>

          <Route path="cases">
            <Route index element={<Cases />} />
            <Route path=':reportId' element={<Reports />} />

            <Route path="add">
              <Route index element={<AddTreatment />} />
              <Route path=":id" element={<AddTreatment />} />
            </Route>
          </Route>

          <Route path="forms">
            <Route path="blood" element={<Blood />} />
            <Route path="ctscan" element={<CTscan />} />
            <Route path="mri" element={<Mri />} />
            <Route path="sonography" element={<Sonography />} />
            <Route path="xray" element={<Xray />} />
          </Route>
        </Routes>
      </div>

      {/* <Home /> */}
    </div>
  );
}

export default App;
