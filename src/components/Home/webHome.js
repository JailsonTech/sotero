import React, { useState } from "react";
import '../Styles/HomePage.css';
import Mobile from "./mobileHome";
import Footer from "../Footer/footer";
import styles from "../Styles/styleGeral.module.css";
import { Link } from "react-router-dom";
import mensagem from "../../Functions/mensage";
import Fenix from "../images/fenixleft.png";
import Fenixmove from "../images/fenixright.png";
import Jogo1 from "../images/jogo_1.png";
import Jogo2 from "../images/jogo_2.png";
import Jogo3 from "../images/jogo_3.png";
import Jogo4 from "../images/jogo_4.png";


export default function HomePage() {
  
  const [open, setOpen] = useState(false);
  return (
    <>
      {/*.............. HEADER MOBILE ..........*/}
      <Mobile />

      {/*.............. HEADER WEB ............*/}
      <div className="containerHome">
        <div className="containerDivs">
          {/*..........HEAD - LINKS..........*/}
          <div className="boxFenix">
            <div className="soteroGames">
              <h1 className="sotero">Sotero</h1>
              <h1 className="games">Games</h1>
            </div>
            <figure className="figFenixHeader">
              <img alt="Fenix" src={Fenix} className="fenixHome" />
            </figure>
          </div>
          {/*.........TEXTOS NO HEADER.......*/}

          <div className="boxTextoEscolha">
            <h3 className="textEscolha">Escolha seu jogo ou cadastre um</h3>
          </div>

          {/*...DROPDOWN - +JOGOS......*/}

          <div className="boxJogos">
              <h3 className="jogos" onClick={() => { setOpen(!open) }}>+Jogos</h3>

              {/*...............DROPDOWN...............*/}

              <nav className={`dropdownJogos ${open ? 'active' : 'inactive'}`}>                
                <ul className={`ul-links ${open ? 'active' : 'inactive'}`}>
                  <span className="triang"></span>
                    <li className='jogos-links' onClick={mensagem}>Jogado</li>
                    <li className='jogos-links' onClick={mensagem}>Zerado</li>
                    <li className='jogos-links' onClick={mensagem}>Jogando</li>
                    <li className='jogos-links' onClick={mensagem}>Opiniões</li>
                </ul>
              </nav>
          </div> {/*...fim menuContainer...*/}

          { /*...CADASTRE - LOGIN......*/}
          <nav className="boxCadastroLogin">
            <Link to="/Pag01" className={styles.link}><h3 className="cadastre" >Seja membro</h3></Link>
            <Link to="/login" className={styles.link}><h3 className="login" >Login</h3></Link>
          </nav>
        </div>
      </div>
      {/*............IMG EFEITO FENIX............*/}

      <div className="FundoEfeito">
        <div className='ConteudoTextoManhas'>
          
        <figure className='figFenixEfeito'>
            <img alt="Fenix" src={Fenixmove} className="fenixEfeito" />
          </figure>
        </div>
      </div>
      <div className="slideShow" >
        <img className="imgGame img_game1" alt="game1" src={Jogo1} />
        <img className="imgGame img_game2" alt="game2" src={Jogo2} />
        <img className="imgGame img_game3" alt="game3" src={Jogo3} />
        <img className="imgGame img_game4" alt="game4" src={Jogo4} />
      </div>

      {/*..........ROW FOUR - IMAGENS LOGOS..........*/}
      <div className='containerFilho container-logos'>
        <div className='logos'>
          <figure className="figure-logos">
            <img alt="BARBIE" className="logo-img" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPB9TxlMjv_aBXN6UTbduv6cNWcsjb9QfugZSlb7fkKgvLdHFX2g2PNKGEwNvbYs70AAciVipOyEBK5SQyUXg_9NBCtGGC-hIB7z4_5vPGOtQIhA7LtWfKTh4WhhJ62k9iUUYZSj7jAfT2ILee0Fg35h3ZSs99OrJtb0wUdOpCrKsHzCrQC4a4ch3CEyU/s320/barbie.png" />
            <figcaption className="figcaption-logos">Barbie</figcaption>
          </figure>

          <figure className="figure-logos">
            <img alt="FARM" className="logo-img" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpLPiY9TxYEy4um8nK0BLILZNsPpsEJQWDnkZdcUrc66dERQJ8PzBVcVg9gICGJEHLSGvqgIUcJ6kuY1o_01J_dhE6LH6mjleCeCk2mSuym45x3qJ2EMix3q2mF5lhzwgkzpVUrQU8sNVEYcKPprRWCt-IGbP6N54E65PqqgxaSvSqMDcMDCo6tj3J8bg/s320/big_farm.png" />
            <figcaption className="figcaption-logos">Big Farm</figcaption>
          </figure>

          <figure className="figure-logos">
            <img alt="EMPIRE" className="logo-img" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjd595TLLQfiQ8wVTnzXcl3k5cR3MMvWyd8Hb5aN_GvjT5B7FNpAbke0J1VNt4p9f_aGyN6dNdaZVyu8YJ8zSpgGwBFIOZ50ipaHFRwGa0iHdLm665o4I9Co7ihrmA8iNNRIp2XKQ8fxNgvVRAnarezj1jPH4WN-H_jVNZgSiRAKlRiX2G5jQAlOuCkmL4/s320/empire.png" />
            <figcaption className="figcaption-logos">Empire</figcaption>
          </figure>

          <figure className="figure-logos">
            <img alt="GUMBALL" className="logo-img" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAASFoEJJCQRy0UBIwB73ehKwBhZpGOD0Bc1UOAvK5Lov8YcfgWflU4EORjdSWhxx3r2Ao0nkolRppuFY1yoIe4v2y_cxCOE_uSw18VpEu1u_xscu4hTyTl1TUFxtwZbLTE44V02V48kEeeAH_EZFZJNXw9IMbswZ09kcmLh0prhr_j_P6IK4Paluz_tg/s320/gumball.png" />
            <figcaption className="figcaption-logos">Gumball</figcaption>
          </figure>

          <figure className="figure-logos">
            <img alt="MARIO" className="logo-img" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZljHhRL1h3wllj7RJo3rgNIc6vLUIKeZfp7D68MhZJ5eStgSuNIwlnfQwqxlshjAyxd4RvXXNYjocJ30iPWhQpdl5ALPBnCHEmRl0Aq4LeQllmhG8p5krlU8uAA2-TqEriNoxO1mQozHeO883Y_i5fWOxlNglCa5CUt-f9OirWvt_ZoiUK3Db3ntxrwA/s320/mario.png" />
            <figcaption className="figcaption-logos">Mario</figcaption>
          </figure>

          <figure className="figure-logos">
            <img alt="NARUTO" className="logo-img" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi0fqeeM3Sk2vB0rhOu9DbSBzkec-1LeLeoUAD_qcbeHPdG9GPLpZYUv2yArvod1i7M8EDdvg721-LHzL8VlRvZSJSfEa_dAwNYXZ5O4BZf-uubIdtbWJnFzkGtqItuHLZDNQWPNRNEiDz91d2cgmhOKMRlObQGDrT-r1VrVTDclDrA8fxqbJvnZFipGrc/s320/naruto.png" />
            <figcaption className="figcaption-logos">Naruto</figcaption>
          </figure>
          <figure className="figure-logos">
            <img alt="PIKACHU" className="logo-img" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCTOgOKJmFAHLKgG3dsVzogVfRxWiPYL1_YbQDfKSSNw9Kr6Mc6LBRKMSYmMLeLRKxqAtUAHmFwyDz_LD6bYV8O8bPPu42Lqegz3UyGoFEAY9JhLwfe1YNiPXo_IsJr1PM1GT6SeS52Jk5Do05-RHxa_tGzc80wpvitk7lobWgcYZIq0s_VY-vX8BVtPw/s320/pikachu.png" />
            <figcaption className="figcaption-logos">Pikachu</figcaption>
          </figure>
          <figure className="figure-logos">
            <img alt="SONIC" className="logo-img" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFbFfeGhiN6KvjN-Wz6sgAs_yG5QJMtV7H_1r07U7q3KWxA6WjnY3DGsTrrvMQu6W6xYLZVGdfguDvMLXfaDnBSq1cUPMViv4dAhSrC8zLZF-8mX19fdJCvmx2aKuCdgOAzecGJx7qY1Bp8MPcvJWnt_g-oTT3aHn7KXMQsSIdYhQFTBdXBPkzGmfOXSY/s320/sonic.png" />
            <figcaption className="figcaption-logos">Sonic</figcaption>
          </figure>
          <figure className="figure-logos">
            <img alt="HOMEM ARANHA" className="logo-img" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyPVS-z_6QJprMefE31N1eLtwGQc39-WOgDTunvtUurUaTb733m8VlVd1l5OWLXeVgEiKF_mfmQhDI4vLPUx1EmU5Pe0pBj6xJSKBA_yFJkJiRmvwlVHpxgDcIZ3dYZo80_wh4Hp4fZVAxqAoYFbktmhW6fIuD6ZcH7o1SVBB4NuizUgWi_iCIgTN72Ps/s320/spyderman.png" />
            <figcaption className="figcaption-logos">Homem Aranha</figcaption>
          </figure>
          <figure className="figure-logos">
            <img alt="SURF" className="logo-img" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCNNRe35XufESMbUTqZ2OC3ZhNVI60zcWZ6fA3JxHIpN3__C0Qlo-R0Y5gN7Ea56OF4nicL47oBLVsBWCD28Gk6u3ZkDlPbCLkdLFUzbmN7Ug6cKpfGbP7pVWXUu8Q8kWH1_t0CpNo6BClf5Aj9OjKD6rxJac71JGjHkZIuuqB5YqJknEYsaUnIZKRkTk/s320/subway_surfers.png" />
            <figcaption className="figcaption-logos">Surf</figcaption>
          </figure>
        </div>
      </div>

      {/*..........ROW FIVE - FOOTER..........*/}
      <Footer />

    </>  /* Fim */
  )
}
