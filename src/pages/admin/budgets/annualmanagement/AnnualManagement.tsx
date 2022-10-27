import React from 'react'
import TableAnnualManagement from './TableAnnualManagement'

const AnnualManagement = () => {
  return (
    <div className="pettycash">
      <h2>Gestión de presupuesto anual</h2>
      <div className="card-table">
        <TableAnnualManagement />
      </div>
    </div>
  )
}

export default AnnualManagement
