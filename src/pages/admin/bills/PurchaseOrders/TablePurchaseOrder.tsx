import React from 'react'
import Table, { ColumnsType } from "antd/lib/table";
import { IPurchaseOrdersObjModel } from '../../../../store/purchaseOrders/purchaseOrders.interface';
interface IProps {
  data: IPurchaseOrdersObjModel[];
  deleteAction?: (id: number) => void;
  openModal?: (select?: IPurchaseOrdersObjModel) => void;
}
const TablePurchaseOrder = ({ data, deleteAction, openModal }: IProps) => {
  const columns: ColumnsType<IPurchaseOrdersObjModel> = [
  //   id: number;
  // operationCode: string;
  // purchaseAmount: number;
  // documentNumber: string;
  // registrationDate: string;
  // state: boolean;
    {
      title: "COD. OPERACION",
      dataIndex: "operationCode",
      key: "operationCode",
    },
    {
      title: "MONTO DE COMPRA",
      dataIndex: "purchaseAmount",
      key: "purchaseAmount",
    },
    {
      title: "NRO. DOCUMENTO",
      dataIndex: "documentNumber",
      key: "documentNumber",
    },
    {
      title: "OPCIONES",
      dataIndex: "options",
      key: "options",
      fixed: "right",
      width: 130,
      render: (_, item) => (
        <div className="list-btn-options">
          <button className="btn-options view" title="Ver">
            <i className="icon-visible" />
          </button>
          <button className="btn-options deleted" title="Eliminar"
            onClick={() => deleteAction && deleteAction(item?.id)}
          >
            <i className="icon-deleted" />
          </button>
          <button className="btn-options edit" title="Editar"
            onClick={() => openModal && openModal(item)}
          >
            <i className="icon-edit" />
          </button>
          <button className="btn-options check" title="Seleccionar">
            <i className="icon-check" />
          </button>
          <button className="btn-options close" title="Cerrar">
            <i className="icon-close" />
          </button>
        </div>
      ),
    },
  ]
  return <Table columns={columns} dataSource={data} scroll={{ x: 1500 }} />;
}
export default TablePurchaseOrder