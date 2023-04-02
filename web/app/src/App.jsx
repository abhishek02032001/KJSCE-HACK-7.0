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
  AddCase,
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
            <Route path=":reportId" element={<Reports />} />

            <Route path="add">
              <Route index element={<AddCase />} />
              <Route path=":id" element={<AddTreatment />} />
            </Route>
          </Route>

          <Route path="forms">
            <Route path="newcase" element={<Blood />} />
          </Route>
        </Routes>
      </div>

      {/* <Home /> */}
    </div>
  );
}

export default App;
