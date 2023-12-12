import React, { useState } from 'react';
import '../Styles/mobileHome.css';
import styles from "../Styles/styleGeral.module.css";
import { Link } from "react-router-dom";
import mensagem from "../../Functions/mensage";
import Fenix from "../images/fenixleft.png";
import Menu from "../images/menuBar.png";

function WebMobile() {
  const [open, setOpen] = useState(false);
  return (
    <section id='containerMobile' >
      <figure id="fenixMobile">
        <img alt="Fenix" src={Fenix} className="fenixMobile" />
      </figure>

      <h1 className="text-sotero">Sotero Games</h1>

      {/*...............MENU-BARRAS...............*/}

      <div className="menuContainer">
        <figure className="menuBarra" onClick={() => { setOpen(!open) }}>
          <img alt="Fenix" src={Menu} className="menuBar" />
        </figure>

        {/*...............DROPDOWN...............*/}

        <nav className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
          {/*.....triângulo pontaMenu.......*/}
          <div className='pontaMenu'><span></span></div>
          <h2 className="title-menu">MENU</h2>
          <ul className={`listaLinks ${open ? 'active' : 'inactive'}`}>
            <Link to="/login" className={styles.link}>
              <li className='MobileLink'>Fazer Login</li>
            </Link>
            <Link to="/pag01" className={styles.link}>
              <li className='MobileLink' >Seja membro</li>
            </Link>
            <li className='MobileLink' onClick={mensagem}>+jogos</li>
          </ul>
        </nav>
      </div> {/*...fim menuContainer...*/}
    </section>
  )
}

export default WebMobile;


