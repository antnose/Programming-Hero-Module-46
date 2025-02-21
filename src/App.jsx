import "./App.css";
import SimgpleForm from "./Components/SimpleForm/SimgpleForm";
import StatefulForm from "./Components/StatefulForm/StatefulForm";
import RefForm from "./Components/RefForm/RefForm";
import HookForm from "./Components/HookForm/HookForm";
import Reusableform from "./Components/ReusableForm/Reusableform";
import Grandpa from "./Components/Grandpa/Grandpa";

function App() {
  // const handleSingUpSubmit = (data) => {
  //   console.log(data);
  // };

  // const handleUpdateSubmit = (data) => {
  //   console.log("Update Form Data", data);
  // };

  return (
    <>
      {/* <SimgpleForm /> */}
      {/* <StatefulForm /> */}
      {/* <RefForm /> */}
      {/* <HookForm /> */}
      {/* <Reusableform formTitle={"Sign Up"} handleSubmit={handleSingUpSubmit}>
        <h2>SingUp</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis,
          perferendis?
        </p>
      </Reusableform>
      <Reusableform
        formTitle={"Profile Update"}
        submitBtnText="Update"
        handleSubmit={handleUpdateSubmit}
      /> */}
      <Grandpa />
    </>
  );
}

export default App;
