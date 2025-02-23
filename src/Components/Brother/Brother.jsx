import { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Brother = () => {
  const [money] = useContext(MoneyContext);
  return (
    <div>
      <p>Brother</p>
      <p>Grandpa money: {money} </p>
    </div>
  );
};

export default Brother;
