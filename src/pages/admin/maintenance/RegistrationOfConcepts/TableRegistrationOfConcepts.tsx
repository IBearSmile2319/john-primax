import Table, { ColumnsType } from "antd/lib/table";
import { IRegOfConceptsObjModel } from "../../../../store/registrationOfConcepts/regOfConcepts.interface";

interface IProps {
  data: IRegOfConceptsObjModel[];
  deleteAction?: (id: number) => void;
  openModal?: (select?: IRegOfConceptsObjModel) => void;
}

const TableRegistrationOfConcepts = ({ data, deleteAction, openModal }: IProps) => {
  const columns: ColumnsType<IRegOfConceptsObjModel> = [
    {
      title: "COD. CONCEPTO",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "DESCRIPCION DEL CONCEPTO",
      dataIndex: "description",
      key: "description",
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
  ];

  return <Table columns={columns} dataSource={data} scroll={{ x: 1500 }} />;
};

export default TableRegistrationOfConcepts;
