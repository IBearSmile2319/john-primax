import Table, { ColumnsType } from 'antd/lib/table';
import React from 'react'
import { DataTypeRegistrationOfConcepts } from './DataFlow';
interface IProps {
    data: DataTypeRegistrationOfConcepts[];
}

const TableRegistrationOfConcepts = ({ data }: IProps) => {
    const columns: ColumnsType<DataTypeRegistrationOfConcepts> = [
        {
            title: 'COD. CONCEPTO',
            dataIndex: 'codConcepto',
            key: 'codConcepto',
        },
        {

            title: 'DESCRIPCION DEL CONCEPTO',
            dataIndex: 'descriptionConcepto',
            key: 'descriptionConcepto',
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
}

export default TableRegistrationOfConcepts