import React, { useEffect } from "react";
import SearchNav from "../../../../components/SearchNav";
import { useAppDispatch, useAppSelector } from "../../../../hooks/useReducer";
import { getMaterialsManagementThunk } from "../../../../store/MaterialsManagement/materialsManagement.thunk";
import SearchProvider from "../providers/SearchProvider";
import TableMaterialsManagement from "./TableMaterialsManagement";

// administración de materiales
const MaterialsManagement = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, materialsManagement } = useAppSelector(
    (state) => state.materialsManagement
  );

  useEffect(() => {
    dispatch(getMaterialsManagementThunk());
  }, []);
  return (
    <div className="pettycash">
      <h2>Administración de Materiales</h2>
      <div className="card-table">
        <SearchNav/>
        <TableMaterialsManagement data={materialsManagement} />
      </div>
    </div>
  );
};

export default MaterialsManagement;
