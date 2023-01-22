import { useEffect, useState } from "react";
import SearchNav from "../../../../components/SearchNav";
import DownloadExcel from "../../../../helpers/DownloadExcel";
import { useAppDispatch, useAppSelector } from "../../../../hooks/useReducer";
import { getFetchExportDocumentRegistration } from "../../../../services/documentRegistration.service";
import { IDocumentRegistrationObjModel } from "../../../../store/documentRegistration/documentRegistration.interface";
import { setSelectedDocumentRegistration } from "../../../../store/documentRegistration/documentRegistration.slice";
import { getFetchDocumentRegistrationThunk } from "../../../../store/documentRegistration/documentRegistration.thunk";
import { setSelectedRegOfConcept } from "../../../../store/registrationOfConcepts/regOfConcepts.slice";
import { getSystemParametersThunk } from "../../../../store/systemParameters/systemParameter.thunk";
import FormDocumentRegistration from "./FormDocumentRegistration";
import TableDocumentRegistration from "./TableDocumentRegistration";
// registro de documentos
const DocumentRegistration = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const {
    documentRegistration: { isLoading, error, documentRegistration, selectedDocumentRegistration },
    systemParameters: { systemParameters },
  } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(getFetchDocumentRegistrationThunk());
    dispatch(getSystemParametersThunk());
  }, []);

  const deleteAction = (id: number) => {
    console.log("delete");
  };

  const OpenModal = async (select?: IDocumentRegistrationObjModel) => {
    if (select) {
      await dispatch(setSelectedDocumentRegistration(select));
    }
    setOpen(true);
  };

  const CloseModal = () => {
    dispatch(setSelectedDocumentRegistration(null));
    setOpen(false);
  };

  return (
    <div className="pettycash">
      <h2>Registro de Documentos</h2>
      <FormDocumentRegistration
        open={open}
        handleOk={CloseModal}
        handleCancel={CloseModal}
        title={(selectedDocumentRegistration as any)?.id ? "Editar" : "Nuevo"}
        dataSelected={selectedDocumentRegistration}
        listSystemParameters={systemParameters}
      />
      <div className="card-table">
        <SearchNav downloadExcel={() => DownloadExcel(getFetchExportDocumentRegistration, "registro_documentos")} addNew={OpenModal} />
        <TableDocumentRegistration data={documentRegistration} deleteAction={deleteAction} openModal={OpenModal} />
      </div>
    </div>
  );
};

export default DocumentRegistration;
