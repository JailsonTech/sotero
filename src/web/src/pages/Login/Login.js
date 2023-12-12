import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Button, Input, Logo } from "../../components";
import { getAuthToken, setAuthToken } from "../../functions";
import { AuthLayout } from "../../layouts";
import { soteroService } from "../../services";

import "./styles.css";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const hasToken = getAuthToken();

    if (hasToken) {
      navigate("/library");
    }
  });

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeForm = (key) => (event) => {
    setFormValues({ ...formValues, [key]: event.target.value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await soteroService.postLogin(formValues);

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
    <AuthLayout onSubmit={handleLogin}>
      <Logo />
      <h1 className="login__title">Logue com sua conta</h1>
      <Input
        className="login__input"
        label="Nome do usuário*"
        name="username"
        value={formValues.username}
        onChange={handleChangeForm("username")}
        required
      />
      <Input
        type="password"
        className="login__input"
        label="Senha*"
        name="password"
        value={formValues.password}
        onChange={handleChangeForm("password")}
        required
      />
      <Button type="submit" className="login__button" isLoading={isLoading}>
        INICIAR SESSÃO
      </Button>
      <span className="login__separator">ou</span>
      <Link className="login__link" to="/sign-up">
        Criar uma conta
      </Link>
    </AuthLayout>
  );
}
