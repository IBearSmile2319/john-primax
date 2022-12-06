import React from "react";
import Table, { ColumnsType } from "antd/lib/table";
import { IItemsObjModel } from "../../../../store/items/items.interface";
interface IProps {
  data: IItemsObjModel[];
  deleteAction?: (id: number) => void;
  openModal?: (select?: IItemsObjModel) => void;
}
const TableItems = ({ data, deleteAction, openModal }: IProps) => {
  const columns: ColumnsType<IItemsObjModel> = [
    {
      title: "Descripción",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Código",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "idClassification",
      dataIndex: "idClassification",
      key: "idClassification",
    },
    {
      title: "idRegistrationOfConcepts",
      dataIndex: "idRegistrationOfConcepts",
      key: "idRegistrationOfConcepts",
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
          <button
            className="btn-options deleted"
            title="Eliminar"
            onClick={() => deleteAction && deleteAction(item?.id)}
          >
            <i className="icon-deleted" />
          </button>
          <button
            className="btn-options edit"
            title="Editar"
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
  ];
  return <Table columns={columns} dataSource={data} scroll={{ x: 1500 }} />;
};

export default TableItems;
