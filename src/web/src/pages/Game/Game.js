import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import DefaultGameImg from "../../assets/images/user-game-default.jpg";
import { BackButton, Button, Logo, Rating } from "../../components";
import { getAuthToken } from "../../functions";
import { useDialog } from "../../providers/dialogProvider";
import { soteroService } from "../../services";

import "./styles.css";
import { toast } from "react-toastify";

export default function Game() {
  const navigate = useNavigate();

  useEffect(() => {
    const hasToken = getAuthToken();

    if (!hasToken) {
      navigate("/login");
    }
  }, [navigate]);

  const { gameId } = useParams();

  const [game, setGame] = useState({});

  const { handleOpen, handleClose } = useDialog();

  useEffect(() => {
    async function fetchGameData() {
      const response = await soteroService.getUserGame(gameId);

      setGame(response?.data?.userGame);
    }

    fetchGameData();
  }, [gameId]);

  const gameCoverImg = game.cover_url ?? DefaultGameImg;

  const handleRemoveGame = async () => {
    try {
      await soteroService.deleteUserGame(gameId);

      handleClose();
      toast.success("Jogo removido da sua biblioteca!");
      navigate("/library");
    } catch (error) {
      toast.error(
        "Não foi possível remover esse jogo da sua biblioteca. Tente novamente ou contate o suporte."
      );
    }
  };

  const goToEditGame = () => {
    navigate(`/edit-game/${gameId}`);
  };

  const handleOpenRemoveModal = () => {
    handleOpen({
      title: "Remover jogo da biblioteca",
      content: "Tem certeza que quer remover esse jogo da sua biblioteca?",
      onConfirmButtonLabel: "Remover",
      onConfirmButtonVariant: "warning",
      onConfirm: handleRemoveGame,
    });
  };

  return (
    <div className="library">
      <div className="library-container">
        <Logo />
        <BackButton />

        <section className="game-info">
          <section className="game-info__content">
            <div className="game-info__item">
              <span className="game-info__item__label">Nome do jogo</span>
              <h3 className="game-info__item__value">{game.name}</h3>
            </div>

            {game?.developer && (
              <div className="game-info__item">
                <span className="game-info__item__label">Desenvolvedor</span>
                <h3 className="game-info__item__value">{game.developer}</h3>
              </div>
            )}
            {game?.grade && (
              <div className="game-info__item">
                <span className="game-info__item__label">Sua avaliação</span>
                <Rating value={game.grade} readOnly={true} />
              </div>
            )}

            {game?.publisher && (
              <div className="game-info__item">
                <span className="game-info__item__label">Editor</span>
                <h3 className="game-info__item__value">{game.publisher}</h3>
              </div>
            )}

            {game?.categories && (
              <div className="game-info__item">
                <span className="game-info__item__label">Status</span>
                <h3 className="game-info__item__value">
                  {game.categories.map((category) => category.name).join(" - ")}
                </h3>
              </div>
            )}

            {game?.abstract && (
              <div className="game-info__item">
                <span className="game-info__item__label">Resumo</span>
                <p className="game-info__item__value--abstract">
                  {game.abstract}
                </p>
              </div>
            )}

            <Button variant="secondary" onClick={goToEditGame}>
              Editar
            </Button>
            <Button onClick={handleOpenRemoveModal}>
              Remover da sua biblioteca
            </Button>
          </section>
          <section className="game-info__aside">
            <img src={gameCoverImg} alt={game.name} />
          </section>
        </section>
      </div>
    </div>
  );
}
