import Table, { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { IDocumentRegistrationObjModel } from '../../../../store/documentRegistration/documentRegistration.interface'

interface IProps {
    data: IDocumentRegistrationObjModel[],
    deleteAction?: (id: number) => void,
    openModal?: (select?: IDocumentRegistrationObjModel) => void
}

const TableDocumentRegistration = ({ data, deleteAction, openModal }: IProps) => {
    const columns: ColumnsType<IDocumentRegistrationObjModel> = [
        {
            title: 'Código',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: 'Descripción',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Tipo de Impuesto',
            dataIndex: 'typeOfTax',
            key: 'typeOfTax',
        },
        {
            title: 'Valor de Afectación',
            dataIndex: 'affectionValue',
            key: 'affectionValue',
        },
        {
            title: 'RUCs Válidos',
            dataIndex: 'validRucs',
            key: 'validRucs',
        },
        {
            title: 'Serie',
            dataIndex: 'serial',
            key: 'serial',
        },
        {
            title: 'Correlativo',
            dataIndex: 'correlative',
            key: 'correlative',
        },
        {
            title: 'Observación',
            dataIndex: 'observation',
            key: 'observation',
        },
        {
            title: 'Estado',
            dataIndex: 'state',
            key: 'state',
        },
        {
            title: 'Fecha de Actualización',

            dataIndex: 'updateDate',
            key: 'updateDate',
        },
        {
            title: 'OPCIONES',
            dataIndex: 'options',
            key: 'options',
            fixed: 'right',
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
                </div>
            ),
        },
    ];


        return <Table columns={columns} dataSource={data} scroll={{ x: 1500 }} />;
}

export default TableDocumentRegistration