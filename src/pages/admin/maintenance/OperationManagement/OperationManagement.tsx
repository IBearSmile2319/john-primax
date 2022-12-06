import { useEffect } from 'react';
import SearchNav from '../../../../components/SearchNav';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useReducer';
import { getOperationManagementThunk } from '../../../../store/operationManagement/operationManagement.thunk';
import TableOperationManagement from './TableOperationManagement';

// gestion de operaciones
const OperationManagement = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, operationManagement } = useAppSelector(
    (state) => state.operationManagement
  );

  useEffect(() => {
    dispatch(getOperationManagementThunk());
  }, []);
  return (
     <div className="pettycash">
      <h2>Gestión de Operaciones</h2>
      <div className="card-table">
      <SearchNav/>
      <TableOperationManagement data={operationManagement} />
      </div>
    </div>
  )
}

export default OperationManagement
