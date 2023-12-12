import { MdArrowBack } from "react-icons/md";

import "./style.css";
import { useNavigate } from "react-router-dom";

export default function BackButton({ className = "" }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/library");
  };

  return (
    <button onClick={goBack} className="MdArrowBack">
      <MdArrowBack /> Voltar
    </button>
  );
}
