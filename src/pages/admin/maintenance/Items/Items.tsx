import React from "react";
import SearchProvider from "../providers/SearchProvider";

// Partidas
const Items = () => {
  return (
    <div className="pettycash">
      <h2>Partidas</h2>
      <div className="card-table">
      <SearchProvider/>
      </div>
    </div>
  );
};

export default Items;
