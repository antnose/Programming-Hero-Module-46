import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";
import { createContext } from "react";

const AssetContext = createContext("Gold");

const Grandpa = () => {
  const asset = "diamond ring";

  return (
    <div className="grandpa text-center  ">
      <h2 className="text-4xl font-bold text-center m-7 ">Grandpa</h2>
      <AssetContext.Provider value="gold">
        <section className="flex justify-between ">
          <Dad asset={asset} />
          <Uncle asset={asset} />
          <Aunty />
        </section>
      </AssetContext.Provider>
    </div>
  );
};

export default Grandpa;

/**
 * 1. Create a context and export it
 * 2. Add provider for the context with a value
 */
