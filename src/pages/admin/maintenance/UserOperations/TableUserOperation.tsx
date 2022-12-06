import Table, { ColumnsType } from "antd/lib/table";
import { IUserOperationsObjModel } from "../../../../store/userOperations/userOperations.interface";
interface IProps {
  data: IUserOperationsObjModel[];
  deleteAction?: (id: number) => void;
  openModal?: (select?: IUserOperationsObjModel) => void;
}
const TableUserOperation = ({ data, deleteAction, openModal }: IProps) => {
  const columns: ColumnsType<IUserOperationsObjModel> = [
    {
      title: "COD. USUARIO",
      dataIndex: "idUsers",
      key: "idUsers",
    },
    {
      title: "COD. OPERACION",
      dataIndex: "idOperationManagement",
      key: "idOperationManagement",
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

export default TableUserOperation;
