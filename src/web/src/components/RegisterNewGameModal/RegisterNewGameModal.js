import { useState } from "react";
import { soteroService } from "../../services";
import { toast } from "react-toastify";
import { useModal } from "../../providers";
import Input from "../Input";
import Textarea from "../Textarea";
import Button from "../Button";

export default function RegisterNewGameModal() {
  const [registerGameFormValues, setRegisterGameFormValues] = useState({
    name: "",
    release_date: null,
    cover_url: null,
    developer: null,
    publisher: null,
    abstract: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const { handleClose } = useModal();

  const handleChangeRegisterGame = (key) => (event) => {
    setRegisterGameFormValues({
      ...registerGameFormValues,
      [key]: event.target.value,
    });
  };

  const handleSubmitRegisterGame = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      await soteroService.postGame(registerGameFormValues);

      toast.success("Jogo cadastrado.");
      handleClose();
    } catch (error) {
      toast.error(
        "Não foi possível cadastrar o jogo. Tente novamente ou contate o suporte."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="register-game" onSubmit={handleSubmitRegisterGame}>
      <h2 className="register-game__title">Cadastre um jogo</h2>

      <Input
        name="name"
        label="Nome do jogo*"
        onChange={handleChangeRegisterGame("name")}
        required
      />

      <Input
        type="url"
        name="cover_url"
        label="Capa do jogo"
        onChange={handleChangeRegisterGame("cover_url")}
      />

      <Input
        name="developer"
        label="Empresa que desenvolveu"
        onChange={handleChangeRegisterGame("developer")}
      />

      <Input
        name="publisher"
        label="Publicado por"
        onChange={handleChangeRegisterGame("publisher")}
      />

      <Textarea
        name="abstract"
        label="Resumo"
        onChange={handleChangeRegisterGame("abstract")}
      />

      <Button type="submit" className="GamerButton" isLoading={isLoading}>
        Salvar
      </Button>
    </form>
  );
}
