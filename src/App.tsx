import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table3 from './Table3'
import Table2 from './Table2'
import Table1 from './Table1'
import TableDetail from './TableDetail'
export default function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" index element={<Table3 />} />
        <Route path="table3" element={<Table3 />} />
        <Route path="table2" element={<Table2 />} />
        <Route path="table1" element={<Table1 />} />
        <Route path="TableDetail" element={<TableDetail />} />
      </Routes>
    </BrowserRouter>
  );
}