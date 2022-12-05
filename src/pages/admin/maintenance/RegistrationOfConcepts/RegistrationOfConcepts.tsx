import { useEffect } from "react";
import SearchNav from "../../../../components/SearchNav";
import DownloadExcel from "../../../../helpers/DownloadExcel";
import { useAppDispatch, useAppSelector } from "../../../../hooks/useReducer";
import { getFetchExportRegisterOfConcepts } from "../../../../services/regOfConcepts.service";
import { getRegisterOfConcepts } from "../../../../store/registrationOfConcepts/regOfConcepts.thunk";
import TableRegistrationOfConcepts from "./TableRegistrationOfConcepts";

const RegistrationOfConcepts = () => {
  const dispatch = useAppDispatch();
  const { regOfConcepts, isLoading, error } = useAppSelector(
    (state) => state.regOfConcepts
  );
  useEffect(() => {
    dispatch(getRegisterOfConcepts());
  }, []);
  return (
    <div className="pettycash">
      <h2>ADMINISTRACIÓN DE CONCEPTOS</h2>
      <div className="card-table">
        <SearchNav
          downloadExcel={() =>
            DownloadExcel(
              getFetchExportRegisterOfConcepts,
              "registro_conceptos"
            )
          }
        />
        <TableRegistrationOfConcepts data={regOfConcepts} />
      </div>
    </div>
  );
};

export default RegistrationOfConcepts;
