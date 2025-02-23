import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";
import { createContext, useState } from "react";

export const AssetContext = createContext("Gold");
export const MoneyContext = createContext(1000);

const Grandpa = () => {
  const [money, setMoney] = useState(1000);
  const asset = "diamond ring";

  return (
    <div className="grandpa text-center  ">
      <h2 className="text-4xl font-bold text-center m-7 ">Grandpa</h2>
      <p>Net money : {money} </p>

      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="gold">
          <section className="flex justify-between ">
            <Dad asset={asset} />
            <Uncle asset={asset} />
            <Aunty />
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;

/**
 * 1. Create a context and export it
 * 2. Add provider for the context with a value. Value could be anything
 * 3. useContext to access value in the context api
 */
