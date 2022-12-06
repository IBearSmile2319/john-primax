import { useEffect } from 'react';
import SearchNav from '../../../../components/SearchNav';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useReducer';
import { getUserOperationsThunk } from '../../../../store/userOperations/userOperations.thunk';
import TableUserOperation from './TableUserOperation';

// operaciones por usuario
const UserOperation = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, userOperations } = useAppSelector(
    (state) => state.userOperations
  );

  useEffect(() => {
    dispatch(getUserOperationsThunk());
  }, []);
  return (
    <div className="pettycash">
    <h2>Operaciones por Usuario</h2>
    <div className="card-table">
    <SearchNav/>
    <TableUserOperation data={userOperations} />
    </div>
  </div>
  )
}

export default UserOperation
