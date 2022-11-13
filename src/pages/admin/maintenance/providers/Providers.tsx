import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/useReducer";
import { getProviders } from "../../../../store/providers/profivders.thunks";
import { dataProvider, DataTypeProvider } from "./DataFlow";
import SearchProvider from "./SearchProvider";
import TableProviders from "./TableProviders";
import * as XLSX from "xlsx";
import { getFetchExportProviders } from "../../../../services/providers.service";

interface IFilter {
  search: string;
  option: number;
}

const Providers = () => {
  const dispatch = useAppDispatch();
  const { providers, isLoading, error } = useAppSelector(
    (state) => state.providers
  );
  const [data, setData] = useState<DataTypeProvider[]>([]);

  useEffect(() => {
    dispatch(getProviders());
  }, []);

  const onSearch = (data: IFilter) => {
    const filter: DataTypeProvider[] = dataProvider.filter((item) => {
      if (data.option === 1) {
        return item.ruc === data.search;
      } else {
        return item.telefono === data.search;
      }
    });
    setData(filter);
  };

  const downloadExcel = async () => {
    const data = await getFetchExportProviders();
    const { objModel } : any = data; // base64
    const wb = XLSX.read(objModel, { type: "base64" });
    const wsname = wb.SheetNames[0];
    const ws = wb.Sheets[wsname];
    XLSX.utils.sheet_to_json(ws, { header: 1 });
    const wscols = [
      { wch: 15 },
      { wch: 30 },
      { wch: 15 },
      { wch: 30 },
      { wch: 30 },
      { wch: 15 },
      { wch: 15 },
      { wch: 15 },
      { wch: 15 },
      { wch: 15 },
    ];
    ws["!cols"] = wscols;
    XLSX.write(wb, { bookType: "xlsx", type: "binary" });
    function s2ab(s: any) {
      const buf = new ArrayBuffer(s.length);
      const view = new Uint8Array(buf);
      for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
      return buf;
    }
    XLSX.writeFile(wb, "proveedores.xlsx");
  };

  return (
    <div className="pettycash">
      <h2>Proveedores</h2>
      <div className="card-table">
        <SearchProvider
          onSearch={onSearch}
          onReset={() => setData(dataProvider)}
          downloadExcel={()=>downloadExcel()}
        />
        <TableProviders data={providers} />
      </div>
    </div>
  );
};

export default Providers;
