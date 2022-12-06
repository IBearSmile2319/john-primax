import { useEffect } from "react";
import SearchNav from "../../../../components/SearchNav";
import DownloadExcel from "../../../../helpers/DownloadExcel";
import { useAppDispatch, useAppSelector } from "../../../../hooks/useReducer";
import { getFetchExportProviders } from "../../../../services/providers.service";
import { getProviders } from "../../../../store/providers/profivders.thunks";

import SearchProvider from "./SearchProvider";
import TableProviders from "./TableProviders";

const Providers = () => {
  const dispatch = useAppDispatch();
  const { providers, isLoading, error } = useAppSelector(
    (state) => state.providers
  );

  useEffect(() => {
    dispatch(getProviders());
  }, []);

  return (
    <div className="pettycash">
      <h2>Proveedores</h2>
      <div className="card-table">
        <SearchNav
          // onSearch={onSearch}
          // onReset={() => setData(dataProvider)}
          downloadExcel={() =>
            DownloadExcel(getFetchExportProviders, "proveedores")
          }
        />
        <TableProviders data={providers} />
      </div>
    </div>
  );
};

export default Providers;
