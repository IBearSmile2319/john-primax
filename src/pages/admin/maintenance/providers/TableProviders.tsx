import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import React from "react";
import { IProviderObjModel } from "../../../../store/providers/providers.interface";
import { DataTypeProvider } from "./DataFlow";

interface IProps {
  data: IProviderObjModel[];
}

const TableProviders = ({ data }: IProps) => {
  const columns: ColumnsType<IProviderObjModel> = [
    {
      title: "RUC",
      dataIndex: "ruc",
      key: "ruc",
    },
    {
      title: "Razón Social",
      dataIndex: "businessName",
      key: "businessName",
    },
    {
      title: "UBIGEO",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "DIRECCIÓN",
      dataIndex: "direction",
      key: "direction",
    },
    {
      title: "PERSONA ENCARGADA",
      dataIndex: "personInCharge",
      key: "personInCharge",
    },
    {
      title: "TEL. O CELULAR",
      dataIndex: "cellPhone",
      key: "cellPhone",
    },
    {
      title: "ESTADO",
      dataIndex: "state",
      key: "state",
      render: (state: boolean) => {
        return state ? "Activo" : "Inactivo";
      },
    },
    {
      title: "ESTADO DEL CONTRIBUYENTE",
      dataIndex: "taxpayerStatus",
      key: "taxpayerStatus",
    },
    {
      title: "FECHA DE REGISTRO",
      dataIndex: "registrationDate",
      key: "registrationDate",
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
