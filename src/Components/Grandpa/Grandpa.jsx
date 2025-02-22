import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";

const Grandpa = () => {
  return (
    <div className="grandpa text-center  ">
      <h2 className="text-4xl font-bold text-center m-7 ">Grandpa</h2>
      <section className="flex justify-between ">
        <Dad />
        <Uncle />
        <Aunty />
      </section>
    </div>
  );
};

export default Grandpa;
