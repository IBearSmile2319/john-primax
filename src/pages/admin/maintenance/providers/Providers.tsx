import React, { useEffect, useState } from 'react'
import { dataProvider, DataTypeProvider } from './DataFlow'
import SearchProvider from './SearchProvider'
import TableProviders from './TableProviders'

interface IFilter {
  search: string
  option: number
}


const Providers = () => {
  const [data, setData] = useState<DataTypeProvider[]>([])

  useEffect(() => {
    setData(dataProvider)
  }, [])

  const onSearch = (data: IFilter) => {
    const filter: DataTypeProvider[] = dataProvider.filter((item) => {
      if (data.option === 1) {
        return item.ruc === data.search
      } else {
        return item.telefono === data.search
      }
    }
    )
    setData(filter)
  }

  return (
    <div className="pettycash">
      <h2>Proveedores</h2>
      <div className="card-table">
        <SearchProvider 
          onSearch={onSearch}
          onReset={() => setData(dataProvider)}
        />
        <TableProviders 
          data={data}
        />
      </div>
    </div>
  )
}

export default Providers
