import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import React from "react";
interface DataType {
  key: React.Key;
  // AÑO	COD.OPER.	OPERACION CC	COD.PART.	PARTIDA	MONEDA	MONTO ANUAL
  year: string;
  codOperation: string;
  operationCC: string;
  codPart: string;
  part: string;
  currency: string;
  annualAmount: string;
}
const TableAnnualManagement = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: "AÑO",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "COD.OPER.",
      dataIndex: "codOperation",
      key: "codOperation",
    },
    {
      title: "OPERACION CC",
      dataIndex: "operationCC",
      key: "operationCC",
    },
    {
      title: "COD.PART.",
      dataIndex: "codPart",
      key: "codPart",
    },
    {
      title: "PARTIDA",
      dataIndex: "part",
      key: "part",
    },
    {
      title: "MONEDA",
      dataIndex: "currency",
      key: "currency",
    },
    {
      title: "MONTO ANUAL",
      dataIndex: "annualAmount",
      key: "annualAmount",
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
  const data: DataType[] = [
    //         2014	351378	PIERINA	ALQUILER	ALQUILERES	SOLES	182,809.00	header=[Edicion]  body=[Edicion de partida]   header=[Eliminacion]  body=[Eliminar partida]
    // 2022	352043	COIMOLACHE	ALQUILER	ALQUILERES	DOLARES	28,989.00	header=[Edicion]  body=[Edicion de partida]   header=[Eliminacion]  body=[Eliminar partida]
    // 2013	350302	CERRO CORONA	ALQUILER	ALQUILERES	SOLES	333,700.00	header=[Edicion]  body=[Edicion de partida]   header=[Eliminacion]  body=[Eliminar partida]
    // 2014	350029	SIDER PERU	ALQUILER	ALQUILERES	SOLES	84,000.00	header=[Edicion]  body=[Edicion de partida]   header=[Eliminacion]  body=[Eliminar partida]
    // 2022	351336	OFICINA PRINCIPAL	ALQUILER	ALQUILERES	DOLARES	1,000.00	header=[Edicion]  body=[Edicion de partida]   header=[Eliminacion]  body=[Eliminar partida]
    // 2015	351727	ARES	ALQUILER	ALQUILERES	SOLES	27,516.00	header=[Edicion]  body=[Edicion de partida]   header=[Eliminacion]  body=[Eliminar partida]
    // 2021	151122	C. Costos - Jose Collante	ALQUILER	ALQUILERES	DOLARES	1.00	header=[Edicion]  body=[Edicion de partida]   header=[Eliminacion]  body=[Eliminar partida]
    // 2022	351827	VEGUETA	ALQUILER	ALQUILERES	SOLES	1,000.00	header=[Edicion]  body=[Edicion de partida]   header=[Eliminacion]  body=[Eliminar partida]
    // 2021	352230	CONSTANCIA	ALQUILER	ALQUILERES	DOLARES	330,503.86	header=[Edicion]  body=[Edicion de partida]   header=[Eliminacion]  body=[Eliminar partida]
    // 2015	350000	PRUEBA2015	ALQUILER	ALQUILERES	SOLES	10,000.00
    {
      key: "1",
      year: "2014",

      codOperation: "351378",
      operationCC: "PIERINA",
      codPart: "ALQUILER",
      part: "ALQUILERES",
      currency: "SOLES",
      annualAmount: "182,809.00",
    },
    {
      key: "2",
      year: "2022",
      codOperation: "352043",
      operationCC: "COIMOLACHE",
      codPart: "ALQUILER",
      part: "ALQUILERES",
      currency: "DOLARES",
      annualAmount: "28,989.00",
    },
    {
      key: "3",
      year: "2013",
      codOperation: "350302",
      operationCC: "CERRO CORONA",
      codPart: "ALQUILER",
      part: "ALQUILERES",
      currency: "SOLES",
      annualAmount: "333,700.00",
    },
    {
      key: "4",
      year: "2014",
      codOperation: "350029",
      operationCC: "SIDER PERU",
      codPart: "ALQUILER",
      part: "ALQUILERES",

      currency: "SOLES",
      annualAmount: "84,000.00",
    },
    {
      key: "5",
      year: "2022",
      codOperation: "351336",
      operationCC: "OFICINA PRINCIPAL",
      codPart: "ALQUILER",
      part: "ALQUILERES",
      currency: "DOLARES",
      annualAmount: "1,000.00",
    },
    {
      key: "6",
      year: "2015",
      codOperation: "351727",
      operationCC: "ARES",
      codPart: "ALQUILER",
      part: "ALQUILERES",
      currency: "SOLES",
      annualAmount: "27,516.00",
    },
    {
      key: "7",
      year: "2021",

      codOperation: "151122",

      operationCC: "C. Costos - Jose Collante",
      codPart: "ALQUILER",
      part: "ALQUILERES",
      currency: "DOLARES",
      annualAmount: "1.00",
    },
    {
      key: "8",
      year: "2022",
      codOperation: "351827",
      operationCC: "VEGUETA",
      codPart: "ALQUILER",

      part: "ALQUILERES",
      currency: "SOLES",
      annualAmount: "1,000.00",
    },
    {
      key: "9",
      year: "2021",
      codOperation: "352230",
      operationCC: "CONSTANCIA",
      codPart: "ALQUILER",
      part: "ALQUILERES",
      currency: "DOLARES",
      annualAmount: "330,503.86",
    },
    {
      key: "10",
      year: "2015",

      codOperation: "350000",
      operationCC: "PRUEBA2015",
      codPart: "ALQUILER",
      part: "ALQUILERES",
      currency: "SOLES",
      annualAmount: "10,000.00",
    },
  ];
  return <Table columns={columns} dataSource={data} scroll={{ x: 1500 }} />;
};

export default TableAnnualManagement;
