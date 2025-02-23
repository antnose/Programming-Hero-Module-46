import Cousin from "../Cousin/Cousin";

const Uncle = ({ asset }) => {
  return (
    <div>
      <h2 className="text-center text-3xl m-10">This is came from uncle</h2>
      <section className="flex">
        <Cousin name={"Rafsan"} asset={asset} />
        <Cousin name={"Shohana"} />
      </section>
    </div>
  );
};

export default Uncle;
