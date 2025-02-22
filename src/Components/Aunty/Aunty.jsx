import Cousin from "../Cousin/Cousin";

const Aunty = () => {
  return (
    <div>
      <h2 className="text-center text-3xl m-10">This is came from Aunty</h2>
      <section className="flex">
        <Cousin name={"Mamshad"} />
        <Cousin name={"Rubaiya"} />
      </section>
    </div>
  );
};

export default Aunty;
