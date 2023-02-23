import { AuthUser } from "../../context/Auth.jsx";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const { showState, setShowState, setFormData } = AuthUser();
  const navigate = useNavigate();

  /* GOTO EMPLOYEE PAGE AFTER SUBMIT */
  const handleNavigate = () => {
    navigate("/employees");
    setShowState(true);
    setFormData({});
  };

  return (
    <div className={"modal" && (showState === true ? "hide" : "modal show")}>
      <div className="content">
        <div className="title">
          <picture>
            <source type="image/webp" srcSet="logoc.webp" />
            <img src="logoc.jpg" alt="logoc" />
          </picture>
          <p>Employee Created Successfully !</p>
        </div>
        <span
          title="Close Modal"
          className="material-symbols-outlined icon"
          onClick={(e) => {
            handleNavigate();
          }}
        >
          close
        </span>
      </div>
    </div>
  );
};

export default Modal;
