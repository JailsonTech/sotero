import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import {
  Logo,
  Button,
  BackButton,
  Select,
  Rating,
  MultiSelect,
  RegisterNewGameModal,
} from "../../components";
import { getAuthToken } from "../../functions";
import { useModal } from "../../providers";
import { soteroService } from "../../services/soteroService";

import "./style.css";

export default function CreateGame() {
  const navigate = useNavigate();

  useEffect(() => {
    const hasToken = getAuthToken();

    if (!hasToken) {
      navigate("/login");
    }
  }, [navigate]);

  const [gameOptions, setGameOptions] = useState([]);
  const [categoriesOptions, setCategoriesOptions] = useState([]);
  const [formValues, setFormValues] = useState({
    game_id: "",
    grade: null,
  });
  const [gameCategories, setGameCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchGames() {
    const response = await soteroService.getGames();

    setGameOptions(
      response?.data?.games.map(({ id, name }) => ({ name, value: id }))
    );
  }

  const { handleOpen, isOpen } = useModal();

  const handleOpenRegisterGameModal = () => {
    handleOpen(<RegisterNewGameModal />);
  };

  const handleChangeForm = (key) => (event) => {
    setFormValues({ ...formValues, [key]: event.target.value });
  };

  const handleSubmit = async (isAddAnotherGame) => {
    if (!formValues.game_id.length) {
      toast.error("Você deve escolher pelo menos um jogo.");
      return;
    }

    if (!gameCategories.length) {
      toast.error("Você deve escolher pelo menos um status.");
      return;
    }

    try {
      setIsLoading(true);

      const {
        data: { userGameId },
      } = await soteroService.postCreateUserGame({
        ...formValues,
        grade: Number(formValues.grade),
      });

      await Promise.all(
        gameCategories.map((gameCategory) => {
          return soteroService.postAddUserGameCategory({
            game_category_id: gameCategory,
            user_game_id: userGameId,
          });
        })
      );

      toast.success("Jogo adicionado a biblioteca!");

      if (!isAddAnotherGame) {
        navigate("/library");
      } else {
        setFormValues({
          game_id: "",
          grade: null,
        });
        setGameCategories([]);
      }
    } catch (error) {
      if (
        error?.response?.data.message.includes(
          "Este jogo já está adicionado na biblioteca"
        )
      ) {
        toast.error(error?.response?.data.message);
        return;
      }

      toast.error(
        "Não foi possível cadastrar o jogo a sua biblioteca. Tente novamente ou contate o suporte."
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    async function fetchCategories() {
      const response = await soteroService.getGameCategories();

      setCategoriesOptions(
        response?.data?.gamesCategories.map(({ id, name }) => ({
          name,
          value: id,
        }))
      );
    }

    fetchGames();
    fetchCategories();
  }, [isOpen]);

  return (
    <div className="library">
      <div className="library-container">
        <Logo />
        <BackButton />
        <form className="form-container">
          <h1>Adicione um jogo a sua biblioteca</h1>
          <Select
            name="game_id"
            label="Escolha um jogo*"
            options={gameOptions}
            value={formValues.game_id}
            onChange={handleChangeForm("game_id")}
            infoText={
              <>
                O jogo que você quer adicionar não existe?{" "}
                <button
                  type="button"
                  onClick={handleOpenRegisterGameModal}
                  className="form-container__addGamerButton"
                >
                  Cadastre aqui
                </button>
              </>
            }
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
            variant="secondary"
            className="GamerButton"
            onClick={() => handleSubmit(true)}
            isLoading={isLoading}
          >
            Salvar e Adicionar outro jogo{" "}
          </Button>
          <Button
            type="button"
            className="GamerButton-salvar"
            onClick={() => handleSubmit(false)}
            isLoading={isLoading}
          >
            Salvar
          </Button>
        </form>
      </div>
    </div>
  );
}
