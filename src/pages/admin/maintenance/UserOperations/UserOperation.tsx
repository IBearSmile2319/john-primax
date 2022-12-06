import React from 'react'
import SearchProvider from '../providers/SearchProvider'

// operaciones por usuario
const UserOperation = () => {
  return (
    <div className="pettycash">
    <h2>Operaciones por Usuario</h2>
    <div className="card-table">
    <SearchProvider/>
    </div>
  </div>
  )
}

export default UserOperation
