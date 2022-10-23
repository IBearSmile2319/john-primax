import Table, { ColumnsType } from 'antd/lib/table';
import React from 'react'

interface DataType {
    key: React.Key;
    date: string;
    operation: string;
    user: string;
    details: string;
    provider: string;
    ruc: string;
    stateContributor: string;
    typeDocument: string;
    NroDocument: string;
    Moneda: string;
    amount: string;
    amountConsumed: string;
    typeDeclaration: string;
}


const TablePettyCash = () => {
    const columns: ColumnsType<DataType> = [
        {
            title: 'Fecha',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Operación',
            dataIndex: 'operation',
            key: 'operation',
        },
        {
            title: 'Usuario',
            dataIndex: 'user',
            key: 'user',
        },
        {
            title: 'Detalles',
            dataIndex: 'details',
            key: 'details',
        },
        {
            title: 'Proveedor',
            dataIndex: 'provider',
            key: 'provider',
        },
        {

            title: 'RUC',
            dataIndex: 'ruc',
            key: 'ruc',
        },
        {
            title: 'Condición del contribuyente',
            dataIndex: 'stateContributor',
            key: 'stateContributor',
        },
        {
            title: 'Tipo de documento',
            dataIndex: 'typeDocument',
            key: 'typeDocument',
        },
        {
            title: 'Nro. de documento',
            dataIndex: 'NroDocument',
            key: 'NroDocument',
        },
        {
            title: 'Moneda',
            dataIndex: 'Moneda',
            key: 'Moneda',
        },
        {
            title: 'Monto',
            dataIndex: 'amount',
            key: 'amount',
        },
        {

            title: 'Monto consumido',
            dataIndex: 'amountConsumed',
            key: 'amountConsumed',
        },
        {
            title: 'Tipo de declaración',
            dataIndex: 'typeDeclaration',
            key: 'typeDeclaration',
        },
        {
            title: 'OPCIONES',
            dataIndex: 'options',
            key: 'options',
            fixed: 'right',
            width: 130,
            render: (data) => <div className="list-btn-options">
                <button className="btn-options view" title="Ver">
                    <i className="icon-visible"/>
                </button>
                <button className="btn-options deleted" title="Ver">
                    <i className="icon-deleted"/>
                </button>
                <button className="btn-options edit" title="Ver">
                    <i className="icon-edit"/>
                </button>
                <button className="btn-options check" title="Ver">
                    <i className="icon-check"/>
                </button>
                <button className="btn-options close" title="Ver">
                    <i className="icon-close"/>
                </button>
            </div>,
        }
    ];
    const data: DataType[] = [
        {
            key: '1',
            date: '12/12/2020',
            operation: 'Compra',
            user: 'Juan Perez',
            details: 'Compra de materiales',
            provider: 'Juan Perez',
            ruc: '123456789',
            stateContributor: 'Contribuyente',
            typeDocument: 'Factura',
            NroDocument: '123456789',
            Moneda: 'Soles',
            amount: '100',
            amountConsumed: '100',
            typeDeclaration: 'Compra',
        },
        {
            key: '2',
            date: '12/12/2020',
            operation: 'Compra',
            user: 'Juan Perez',
            details: 'Compra de materiales',
            provider: 'Juan Perez',
            ruc: '123456789',
            stateContributor: 'Contribuyente',
            typeDocument: 'Factura',
            NroDocument: '123456789',
            Moneda: 'Soles',
            amount: '100',
            amountConsumed: '100',
            typeDeclaration: 'Compra',
        },
        {
            key: '3',
            date: '12/12/2020',
            operation: 'Compra',
            user: 'Juan Perez',
            details: 'Compra de materiales',
            provider: 'Juan Perez',
            ruc: '123456789',
            stateContributor: 'Contribuyente',
            typeDocument: 'Factura',
            NroDocument: '123456789',
            Moneda: 'Soles',
            amount: '100',
            amountConsumed: '100',
            typeDeclaration: 'Compra',
        },
        {
            key: '4',
            date: '12/12/2020',
            operation: 'Compra',
            user: 'Juan Perez',
            details: 'Compra de materiales',
            provider: 'Juan Perez',
            ruc: '123456789',
            stateContributor: 'Contribuyente',
            typeDocument: 'Factura',
            NroDocument: '123456789',
            Moneda: 'Soles',
            amount: '100',
            amountConsumed: '100',
            typeDeclaration: 'Compra',
        },
    ]
    return (
        <Table 
        columns={columns} dataSource={data} scroll={{ x: 1500 }} />
    )
}

export default TablePettyCash