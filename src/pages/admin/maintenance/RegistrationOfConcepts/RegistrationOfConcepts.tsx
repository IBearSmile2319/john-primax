import { useEffect, useState } from "react";
import SearchNav from "../../../../components/SearchNav";
import DownloadExcel from "../../../../helpers/DownloadExcel";
import { useAppDispatch, useAppSelector } from "../../../../hooks/useReducer";
import { getFetchExportRegisterOfConcepts } from "../../../../services/regOfConcepts.service";
import { IRegOfConceptsObjModel } from "../../../../store/registrationOfConcepts/regOfConcepts.interface";
import { setSelectedRegOfConcept } from "../../../../store/registrationOfConcepts/regOfConcepts.slice";
import { deleteRegisterOfConceptsThunk, getRegisterOfConcepts } from "../../../../store/registrationOfConcepts/regOfConcepts.thunk";
import FormRegOfConcepts from "./FormRegOfConcepts";
import TableRegistrationOfConcepts from "./TableRegistrationOfConcepts";

const RegistrationOfConcepts = () => {
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);
  const { regOfConcepts, isLoading, error, selectedRegOfConcept } = useAppSelector(
    (state) => state.regOfConcepts
  );
  useEffect(() => {
    dispatch(getRegisterOfConcepts());
  }, []);

  // delete 
  const deleteAction = (id: number) => {
    dispatch(deleteRegisterOfConceptsThunk(id)).then(() => {
      console.log("delete");
    }).catch((err) => {
      console.log(err);
    });
  }

  const OpenModal = async (select?: IRegOfConceptsObjModel) => {
    if (select) {
      await dispatch(setSelectedRegOfConcept(select));
    }
    setOpen(true);
  };

  const CloseModal = () => {
    dispatch(setSelectedRegOfConcept(null));
    setOpen(false);
  };

  return (
    <div className="pettycash">
      <h2>REGISTRO DE CONCEPTOS</h2>
      <FormRegOfConcepts
        open={open}
        handleOk={CloseModal}
        handleCancel={CloseModal}
        title={(selectedRegOfConcept as IRegOfConceptsObjModel)?.id ? "Editar" : "Nuevo"}
        dataSelected={(selectedRegOfConcept as IRegOfConceptsObjModel) || null}
      />
      <div className="card-table">
        <SearchNav
          downloadExcel={() =>
            DownloadExcel(
              getFetchExportRegisterOfConcepts,
              "registro_conceptos"
            )
          }
          addNew={OpenModal}
        />
        <TableRegistrationOfConcepts data={regOfConcepts} 
          deleteAction={deleteAction}
          openModal={OpenModal}
        />
      </div>
    </div>
  );
};

export default RegistrationOfConcepts;
