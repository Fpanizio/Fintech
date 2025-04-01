import { useData } from "../Context/DataContext";
import ItemSale from "../Components/ItemSale";

const Sales = () => {
  const { data } = useData();

  if (data === null) return null;
  return (
    <ul>
      {data.map((venda) => (
        <li key={venda.id}><ItemSale venda={venda}/></li>
      ))}
    </ul>
  );
};

export default Sales;
