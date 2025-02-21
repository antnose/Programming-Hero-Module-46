import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";

const Grandpa = () => {
  return (
    <div className="grandpa flex">
      <Dad />
      <Uncle />
      <Aunty />
    </div>
  );
};

export default Grandpa;
