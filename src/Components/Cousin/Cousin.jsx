import Special from "../Special/Special";
import Friend from "../Friend/Friend";

const Cousin = ({ name, asset }) => {
  return (
    <div>
      <h2>Cousin</h2>
      <p> {name} </p>
      <section>{asset && <Special asset={asset} />}</section>
      {/* <Special /> */}
      {name === "Rubaiya" && <Friend />}
    </div>
  );
};

export default Cousin;
