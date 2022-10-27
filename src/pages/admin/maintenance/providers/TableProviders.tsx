import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import React from "react";
import { DataTypeProvider } from "./DataFlow";

interface IProps {
  data: DataTypeProvider[];
}

const TableProviders = ({ data }: IProps) => {
  const columns: ColumnsType<DataTypeProvider> = [
    {
      title: "RUC",
      dataIndex: "ruc",
      key: "ruc",
    },
    {
      title: "Descripción",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Teléfono",
      dataIndex: "telefono",
      key: "telefono",
    },
    {
      title: "Dirección",
      dataIndex: "direccion",
      key: "direccion",
    },
    {
      title: "Contacto",
      dataIndex: "contacto",
      key: "contacto",
    },
    {
      title: "Estado",
      dataIndex: "estado",
      key: "estado",
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

export default TableProviders;
