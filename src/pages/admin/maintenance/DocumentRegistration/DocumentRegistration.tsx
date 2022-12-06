import React from "react";
import SearchProvider from "../providers/SearchProvider";
// registro de documentos
const DocumentRegistration = () => {
  return (
    <div className="pettycash">
      <h2>Registro de Documentos</h2>
      <div className="card-table">
      <SearchProvider/>
      </div>
    </div>
  );
};

export default DocumentRegistration;
