import Myself from "../Myself/Myself";
import Brother from "../Brother/Brother";
import Sister from "../Sister/Sister";

const Dad = ({ asset }) => {
  return (
    <div>
      <h2 className="text-center text-3xl m-10">This is came from Dad</h2>
      <section className="flex">
        <Myself asset={asset} />
        <Brother />
        <Sister />
      </section>
    </div>
  );
};

export default Dad;
