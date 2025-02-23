import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunty = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2 className="text-center text-3xl m-10">This is came from Aunty</h2>
      <section className="flex">
        <Cousin name={"Mamshad"} />
        <Cousin name={"Rubaiya"} />
      </section>
      <p>Money: {money} </p>
      <button
        onClick={() => setMoney(money + 1000)}
        className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 hover:cursor-pointer "
      >
        Add 1k Tk
      </button>
    </div>
  );
};

export default Aunty;

// 7.51
