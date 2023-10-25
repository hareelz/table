import React, { useState } from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Table from "./components/Table";
import Add from "./components/Add";
import axios from "axios";
import Edit from "./components/Edit";

const App = () => {
  const API = " http://localhost:8000/lyde";
  const [lyde, setLyde] = useState([]);
  const [oneLyd, setOneLyd] = useState(null);
  const addLyde = (newLyde) => {
    axios.post(API, newLyde);
  };

  const getLyde = async () => {
    const result = await axios.get(API);
    setLyde(result.data);
  };

  async function deleteLyde(id) {
    await axios.delete(`${API}/${id}`);
    getLyde();
  }

  async function getOneLyd(id) {
    const result = await axios(`${API}/${id}`);
    setOneLyd(result.data);
  }

  async function saveLyde(id, editedLyd) {
    await axios.patch(`${API}/${id}`, editedLyd);
    getLyde();
  }
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Table getLyde={getLyde} lyde={lyde} deleteLyde={deleteLyde} />
          }
        />
        <Route path="/add" element={<Add addLyde={addLyde} />} />
        <Route
          path="/edit/:id"
          element={
            <Edit getOneLyd={getOneLyd} oneLyd={oneLyd} saveLyde={saveLyde} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
