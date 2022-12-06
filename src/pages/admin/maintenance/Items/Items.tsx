import { useEffect } from "react";
import SearchNav from "../../../../components/SearchNav";
import { useAppDispatch, useAppSelector } from "../../../../hooks/useReducer";
import { getFetchItemsThunk } from "../../../../store/items/items.thunk";
import TableItems from "./TableItems";

// Partidas
const Items = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, items } = useAppSelector(
    (state) => state.items
  );

  useEffect(() => {
    dispatch(getFetchItemsThunk());
  }, []);
  return (
    <div className="pettycash">
      <h2>Partidas</h2>
      <div className="card-table">
      <SearchNav/>
      <TableItems data={items} />
      </div>
    </div>
  );
};

export default Items;
