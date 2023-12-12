import React from 'react';
import '../Styles/login.css';
import mensagem from "../../Functions/mensage";
import Retorno from "../voltarhome/voltarHomeWeb.js";
import VoltarMob from "../voltarhome/returnHomeMobile.js";

function LoginPage() {
  return (    
     <section className="container">
       {/*.............TÍTULO LOGIN........*/}
       <header className="login">               
              <h2 className="text-Login">LOGIN</h2>               
       </header>
      {/*.........RETORNAR HOME....................*/}          
      <Retorno/> 

       {/*....TEXTO SOTERO GAMES.....*/}
       <div className="container-form">
         <header className="soteroGames">
            <h2 className="text-sotero">SOTERO GAMES</h2>
            <VoltarMob/> 
         </header> 

          {/*.........FORMULÁRIO....................*/}
         <form className="form" >     
            <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='email'/>
            </div>
            <div className="field">
                <label htmlFor="password">Senha</label>
                <input type="password" name='password' id="password" 
                />
            </div>                
            <div className="actions">
                <input className="botao" type="submit" value="Entrar" onClick={mensagem}/>
            </div>
            </form>  
           </div>  
      </section>      
  );
}
export default LoginPage;