import { useNavigate } from "react-router-dom";
import { Button, Logo } from "../../components";

import "./styles.css";

export default function Home() {
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate("/sign-up");
  };

  return (
    <section className="intro">
      <div className="intro__container">
        <Logo />
        <h1 className="intro__title">
          Gerencie seus jogos com a Sotero Games.
        </h1>
        <p className="intro__text">
          Explore o universo dos games com facilidade e organização na SOTERO
          GAMES! Nossa aplicação oferece uma plataforma dedicada para gerenciar
          sua coleção de jogos, proporcionando uma experiência única aos
          apaixonados por games.
        </p>
        <Button className="intro__button" onClick={goToSignUp}>
          Comece Agora
        </Button>
      </div>
    </section>
  );
}
