import React from 'react'
import SearchProvider from '../providers/SearchProvider'

// administración de materiales
const MaterialsManagement = () => {
  return (
    <div className="pettycash">
      <h2>Administración de Materiales</h2>
      <div className="card-table">
      <SearchProvider/>
      </div>
    </div>
  )
}

export default MaterialsManagement
