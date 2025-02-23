import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Friend = () => {
  const Gift = useContext(AssetContext);
  return (
    <div>
      <h2>Friend</h2>
      <p>has: {Gift}</p>
    </div>
  );
};

export default Friend;
