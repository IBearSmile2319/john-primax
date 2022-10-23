import React from 'react'
import SearchContent from './SearchContent'
import './stylePettyCash.css'
import TablePettyCash from './TablePettyCash'
const PettyCash = () => {
  return (
    <div className="pettycash">
        <h2>Caja chica</h2>
        <div className="card-table">
            <SearchContent/>
            <TablePettyCash/>
        </div>
    </div>
  )
}

export default PettyCash
