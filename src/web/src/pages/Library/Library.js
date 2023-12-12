import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { toast } from "react-toastify";

import DefaultGameImg from "../../assets/images/user-game-default.jpg";
import { Logo } from "../../components";
import { cleanAuthToken, getAuthToken } from "../../functions";
import { soteroService } from "../../services/soteroService";

import "./style.css";

export default function Library() {
  const [userGames, setUserGames] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const hasToken = getAuthToken();

    if (!hasToken) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    async function handleFetchUserGames() {
      const response = await soteroService.getUserGames();

      setUserGames(response.data.userGames);
    }

    handleFetchUserGames();
  }, []);

  const logout = () => {
    cleanAuthToken();
    toast.success("Usuário deslogado.");
    navigate("/login");
  };

  const handleLibrary = () =>
    !userGames?.length ? (
      <div className="library__content">
        <p className="library__content__no-books">
          Não há jogos na sua biblioteca.
        </p>
        <Link className="library__content__add-game" to="/create-game">
          + Adicionar um jogo
        </Link>
      </div>
    ) : (
      <div className="library__content library__content--with-books">
        <div className="library__content__head">
          <Link className="library__content__add-game" to="/create-game">
            + Adicionar um jogo
          </Link>
        </div>
        <div className="library__content__books">{handleUserGamesList()}</div>
      </div>
    );

  const handleUserGamesList = () =>
    userGames.map((userGame) => {
      const gameCoverImg = userGame.game.cover_url ?? DefaultGameImg;

      const goToGamePage = () => {
        navigate(`/game/${userGame.id}`);
      };

      return (
        <button
          onClick={goToGamePage}
          className="library__content__book"
          key={userGame.id}
        >
          <img src={gameCoverImg} alt={userGame.game.name} />
          <h3>{userGame.game.name}</h3>
        </button>
      );
    });

  return (
    <div className="library">
      <div className="library-container">
        <div className="library__header">
          <Logo />
          <button className="logout-button" onClick={logout}>
            <MdLogout />
            Encerrar sessão
          </button>
        </div>
        {handleLibrary()}
      </div>
    </div>
  );
}
