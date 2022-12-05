import Table, { ColumnsType } from "antd/lib/table";
import React from "react";
import { IRegOfConceptsObjModel } from "../../../../store/registrationOfConcepts/regOfConcepts.interface";
import { DataTypeRegistrationOfConcepts } from "./DataFlow";
interface IProps {
  data: IRegOfConceptsObjModel[];
}

const TableRegistrationOfConcepts = ({ data }: IProps) => {
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
      render: (data) => (
        <div className="list-btn-options">
          <button className="btn-options view" title="Ver">
            <i className="icon-visible" />
          </button>
          <button className="btn-options deleted" title="Ver">
            <i className="icon-deleted" />
          </button>
          <button className="btn-options edit" title="Ver">
            <i className="icon-edit" />
          </button>
          <button className="btn-options check" title="Ver">
            <i className="icon-check" />
          </button>
          <button className="btn-options close" title="Ver">
            <i className="icon-close" />
          </button>
        </div>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} scroll={{ x: 1500 }} />;
};

export default TableRegistrationOfConcepts;
