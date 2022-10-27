import React, { useEffect, useState } from 'react'
import { dataRegistrationOfConcepts, DataTypeRegistrationOfConcepts } from './DataFlow'
import TableRegistrationOfConcepts from './TableRegistrationOfConcepts'

const RegistrationOfConcepts = () => {
    const [data, setData] = useState<DataTypeRegistrationOfConcepts[]>([])

    useEffect(() => {
        setData(dataRegistrationOfConcepts)
    }, [])
    return (
        <div className="pettycash">
            <h2>ADMINISTRACIÓN DE CONCEPTOS</h2>
            <div className="card-table">
                <TableRegistrationOfConcepts
                    data={data}
                />
            </div>
        </div>
    )
}

export default RegistrationOfConcepts
