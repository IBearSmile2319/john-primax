import { useEffect, useState } from "react";
import SearchNav from "../../../../components/SearchNav";
import DownloadExcel from "../../../../helpers/DownloadExcel";
import { useAppDispatch, useAppSelector } from "../../../../hooks/useReducer";
import { getFetchExportPurchaseOrders } from "../../../../services/purchaseOrders.service";
import { getOperationManagementThunk } from "../../../../store/operationManagement/operationManagement.thunk";
import { setSelectedPurchaseOrder } from "../../../../store/purchaseOrders/purchaseOrders.slice";
import {
  deletePurchaseOrdersThunk,
  getPurchaseOrdersThunk,
} from "../../../../store/purchaseOrders/purchaseOrders.thunk";
import FormPurchaseOrders from "./FormPurchaseOrders";
import TablePurchaseOrder from "./TablePurchaseOrder";

const PurchaseOrders = () => {
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);
  const {
    purchaseOrders: { purchaseOrders, isLoading, error, selectedPurchaseOrder },
    operationManagement: { operationManagement },
  } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(getOperationManagementThunk());
    dispatch(getPurchaseOrdersThunk());
  }, []);

  const deleteAction = (id: number) => {
    dispatch(deletePurchaseOrdersThunk(id))
      .then(() => {
        console.log("delete");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const OpenModal = async (select?: any) => {
    if (select) {
      await dispatch(setSelectedPurchaseOrder(select));
    }
    setOpen(true);
  };

  const CloseModal = () => {
    dispatch(setSelectedPurchaseOrder(null));
    setOpen(false);
  };

  return (
    <div className="pettycash">
      <h2>ORDENES DE COMPRA</h2>
      <FormPurchaseOrders
        open={open}
        handleOk={CloseModal}
        handleCancel={CloseModal}
        title={(selectedPurchaseOrder as any)?.id ? "Editar" : "Nuevo"}
        dataSelected={selectedPurchaseOrder}
        listOperationCode={operationManagement}
      />
      <div className="card-table">
        <SearchNav
          downloadExcel={() =>
            DownloadExcel(getFetchExportPurchaseOrders, "Ordenes de Compra")
          }
          addNew={OpenModal}
        />
        <TablePurchaseOrder
          data={purchaseOrders}
          deleteAction={deleteAction}
          openModal={OpenModal}
        />
      </div>
    </div>
  );
};

export default PurchaseOrders;
