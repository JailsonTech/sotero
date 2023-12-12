import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button, Input, Logo } from "../../components";
import { getAuthToken, setAuthToken } from "../../functions";
import { AuthLayout } from "../../layouts";

import "./styles.css";
import { toast } from "react-toastify";
import { soteroService } from "../../services";

export default function SignUp() {
  const navigate = useNavigate();

  useEffect(() => {
    const hasToken = getAuthToken();

    if (hasToken) {
      navigate("/library");
    }
  });

  const [formValues, setFormValues] = useState({
    first_name: "",
    last_name: "",
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeForm = (key) => (event) => {
    setFormValues({ ...formValues, [key]: event.target.value });
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if(formValues.password.length<8){
      toast.error("Inválido!\nSenha precisa ter ao menos 8 caracteres")
      setIsLoading(false)
      return
    }
    try {
      const response = await soteroService.postSignUp({
        ...formValues,
        has_accepted_use_terms: true,
      });

      setAuthToken(response.data.token);
      navigate("/library");
    } catch (error) {
      if (
        ["Invalid password.", "User not found"].includes(
          error?.response?.data?.message
        )
      ) {
        toast.error(
          "Nome do usuário ou a senha está inválida. Verifique e tente novamente."
        );
        return;
      }
      toast.error(
        "Não foi possível realizar o login. Tente novamente ou contate o suporte."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout onSubmit={handleSignUp}>
      <Logo />
      <h1 className="sign-up__title">Cadastre-se</h1>
      <Input
        className="sign-up__input"
        label="Nome*"
        name="first_name"
        onChange={handleChangeForm("first_name")}
        value={formValues.first_name}
        required
      />
      <Input
        className="sign-up__input"
        label="Sobrenome"
        name="last_name"
        onChange={handleChangeForm("last_name")}
        value={formValues.last_name}
      />
      <Input
        className="sign-up__input"
        label="Nome do usuário*"
        name="username"
        onChange={handleChangeForm("username")}
        value={formValues.username}
        required
      />
      <Input
        type="email"
        className="sign-up__input"
        label="E-mail"
        name="email"
        onChange={handleChangeForm("email")}
        value={formValues.email}
        required
      />
      <Input
        type="password"
        className="sign-up__input"
        label="Senha"
        name="password"
        onChange={handleChangeForm("password")}
        value={formValues.password}
        required
      />
      <Button isLoading={isLoading} type="submit" className="sign-up__button">
        Cadastrar
      </Button>
      <span className="sign-up__separator">ou</span>
      <Link className="sign-up__link" to="/login">
        Já tenho uma conta
      </Link>
    </AuthLayout>
  );
}
