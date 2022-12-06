import React from 'react'
import SearchProvider from '../providers/SearchProvider'

// gestion de operaciones
const OperationManagement = () => {
  return (
     <div className="pettycash">
      <h2>Gestión de Operaciones</h2>
      <div className="card-table">
      <SearchProvider/>
      </div>
    </div>
  )
}

export default OperationManagement
