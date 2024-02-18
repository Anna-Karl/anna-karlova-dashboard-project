import './App.scss';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from './components/header/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
  <>
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        {/* 
        <Route
          path="/warehouses/:warehouseId"
          element={<WarehouseDetailsPage />}
        />
        <Route
          path="/warehouses/:warehouseid/edit"
          element={<EditWarehousePage />} 
        />
        <Route path="/warehouses/new" element={<NewWarehousePage />} />

        <Route path="/inventories" element={<InventoryPage />} />
        <Route
          path="/inventories/:inventoryid"
          element={<InventoryItemPage />}
        />
        <Route
          path="/inventories/:inventoryid/edit"
          element={<EditInventoryPage inventoryDetails={inventoryDetails} />}
        />
        <Route path="/inventories/new" element={<NewInventoryPage />} />

        <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  </>
  );
}

export default App;
