import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import {
  BackButton,
  Button,
  Logo,
  MultiSelect,
  Rating,
  Select,
} from "../../components";
import { getAuthToken } from "../../functions";
import { soteroService } from "../../services";

export default function EditGame() {
  const navigate = useNavigate();

  useEffect(() => {
    const hasToken = getAuthToken();

    if (!hasToken) {
      navigate("/login");
    }
  }, [navigate]);

  const { gameId: userGameId } = useParams();

  const [gameOptions, setGameOptions] = useState([]);
  const [categoriesOptions, setCategoriesOptions] = useState([]);
  const [formValues, setFormValues] = useState({
    grade: null,
    game_id: "",
  });
  const [gameCategories, setGameCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeForm = (key) => (event) => {
    setFormValues({ ...formValues, [key]: event.target.value });
  };

  const handleSubmit = async () => {
    if (!gameCategories.length) {
      toast.error("Você deve escolher pelo menos um status.");
      return;
    }

    try {
      setIsLoading(true);

      await soteroService.putCreateUserGame(
        {
          ...formValues,
          grade: Number(formValues.grade),
        },
        userGameId
      );

      await soteroService.deleteUserGameCategories(userGameId);

      await Promise.all(
        gameCategories.map((gameCategory) => {
          return soteroService.postAddUserGameCategory({
            game_category_id: gameCategory,
            user_game_id: userGameId,
          });
        })
      );

      toast.success("Jogo atualizado!");
      navigate(`/game/${userGameId}`);
    } catch (error) {
      toast.error(
        "Não foi possível atualizar esse jogo. Tente novamente ou contate o suporte."
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    async function fetchGames() {
      const response = await soteroService.getGames();

      setGameOptions(
        response?.data?.games.map(({ id, name }) => ({ name, value: id }))
      );
    }

    async function fetchCategories() {
      const response = await soteroService.getGameCategories();

      setCategoriesOptions(
        response?.data?.gamesCategories.map(({ id, name }) => ({
          name,
          value: id,
        }))
      );
    }

    async function fetchUserGameData() {
      const {
        data: { userGame },
      } = await soteroService.getUserGame(userGameId);

      setFormValues({ grade: userGame.grade, game_id: userGame.game_id });
      setGameCategories(
        userGame?.categories.map(
          (userGameCategory) => userGameCategory.game_category_id
        )
      );
    }

    fetchGames();
    fetchCategories();
    fetchUserGameData();
  }, [userGameId]);

  return (
    <div className="library">
      <div className="library-container">
        <Logo />
        <BackButton />
        <form className="form-container">
          <h1>Editar jogo na sua biblioteca</h1>
          <Select
            name="game_id"
            label="Escolha um jogo"
            options={gameOptions}
            value={formValues.game_id}
            onChange={handleChangeForm("game_id")}
            disabled={true}
          />
          <Rating
            name="grade"
            label="Avaliação (uma nota de 0 à 5)"
            value={formValues.grade}
            onChange={handleChangeForm("grade")}
          />
          <MultiSelect
            name="game_id"
            label="Status (escolha uma ou mais opções)*"
            options={categoriesOptions}
            value={gameCategories}
            setValue={setGameCategories}
          />
          <Button
            type="button"
            className="GamerButton-salvar"
            onClick={handleSubmit}
            isLoading={isLoading}
          >
            Salvar
          </Button>
        </form>
      </div>
    </div>
  );
}
