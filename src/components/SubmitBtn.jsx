import { useNavigation } from "react-router-dom";

function SubmitBtn({ text }) {
  const navigation = useNavigation();
  const isSubmiting = navigation.state == "submitting";
  return (
    <>
      <button className=" btn btn-primary  btn-block">
        {isSubmiting ? (
          <>
            <span className="loading loading-spinner loading-xs"></span> Loading
          </>
        ) : (
          text || "Submit"
        )}
      </button>
    </>
  );
}

export default SubmitBtn;
