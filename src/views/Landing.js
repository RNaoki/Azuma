import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Box from "../utils/assets/images/dale.png";
import Back from "../utils/assets/images/back.png";
import Fichario from "../utils/assets/images/fichario-fechado.png";
import JP from "../utils/assets/images/jp.jpeg";
import Menu from "../utils/assets/images/menu.png";
import Bowl from "../utils/assets/images/bowl.png";

import "./landing.css";

export default function Landing() {
  const [boxSelected, setBoxSelected] = useState(0);

  return (
    <div>
      <div
        style={{ display: "flex", flexDirection: "row", padding: 20 }}
        id="home"
      >
        <div style={{ width: "40%", marginTop: "8%" }}>
          <div style={{ paddingLeft: "20%" }}>
            <p
              style={{
                fontFamily: "UniSansLight",
                color: "#191919",
                fontSize: 80,
                width: 400,
              }}
            >
              EXPERIMENTE O NOVO!
            </p>
            <Button
              style={{
                marginTop: "1%",
                width: "35%",
                height: 50,
                fontSize: 20,
                fontWeight: "bold",
                backgroundColor: "#E53231",
                color: "#white",
                borderWidth: 5,
                borderBottomRightRadius: 20,
                borderTopLeftRadius: 20,
                fontFamily: "UniSansLight",
              }}
              variant="contained"
              href="#assinatura"
            >
              <p style={{ color: "white" }}>Assine já</p>
            </Button>
          </div>
        </div>
        <div
          style={{
            width: "30%",
            flex: 1,
            display: "flex",
            justifyContent: "center",
            marginTop: "5%",
            marginRight: "15%",
          }}
        >
          <div
            style={{
              width: "60%",
              float: "left",
              flex: 1,

              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={Box} alt="logo" style={{ width: 1200 }}></img>
          </div>
        </div>
      </div>
      <div className={"gradient"}></div>
      <div
        style={{
          paddingTop: 200,
          paddingBottom: 200,
          backgroundColor: "#262626",
          flex: 1,
          display: "flex",
          flexDirection: "row",
          margin: 0,
        }}
        id="sobre"
      >
        <div style={{ width: "50%" }}>
          <div
            style={{
              fontSize: 280,
              color: "#FAFAFA",
              paddingLeft: "39%",
            }}
          >
            東
          </div>
          <div
            style={{
              fontSize: 120,
              color: "#E53231",
              paddingLeft: "35%",
            }}
          >
            あずま
          </div>
          <div
            style={{
              fontSize: 70,
              fontWeight: 590,
              color: "#FAFAFA",
              paddingLeft: "37%",
              marginTop: -25,
              fontFamily: "UniSansLight",
            }}
          >
            a - zu - ma
          </div>
        </div>
        <div
          style={{
            width: "50%",
            overflow: "hidden",
          }}
        >
          <img src={Back} alt="about" style={{ width: 1400, paddingTop: 25 }} />
          <div
            style={{
              position: "absolute",
              marginTop: -520,
              paddingLeft: 80,
              fontSize: 30,
              color: "#FAFAFA",
              width: "40%",
              fontFamily: "UniSansLight",
            }}
          >
            <p>
              Com o intuito de quebrar paradigmas e um senso comum falho de que
              comida asiática se baseia apenas em peie cru. O projeto AZUMA vem
              para trazer novas culturas e experiências para o cliente. A
              palavra "Azuma" vem do japônes, que significa "oriente".
            </p>
            <p style={{ paddingTop: 20 }}>
              Assim nasce o sistema de assinatura, onde o oriente vem em uma
              caixa, com a melhor experiência que ela pode criar e ensinar o
              usuário novos pratos.
            </p>
          </div>
        </div>
      </div>
      <div
        id="assinatura"
        style={{
          flex: 1,
          backgroundColor: "#F6F6F6",
          width: "100%",
          marginTop: -50,
          paddingTop: "6%",
          paddingBottom: "9%",
        }}
      >
        <div>
          <p
            style={{
              textAlign: "center",
              marginTop: 40,
              marginBottom: 100,
              fontFamily: "UniSansLight",
              fontSize: 50,
              fontWeight: 400,
            }}
          >
            ESCOLHA A SUA ASSINATURA:
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a
            onClick={() => setBoxSelected(1)}
            className="box"
            href="#loja"
            style={{
              textDecoration: "none",
              display: "flex",
              border: 1,
              borderWidth: 2,
              borderStyle: "solid",
              borderColor: "#2a2a2a",
              borderRadius: 30,
              width: 300,
              height: 400,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              boxShadow: boxSelected === 1 ? "0 0 50px #ccc" : "",
              backgroundColor: boxSelected === 1 ? "white" : "",
            }}
          >
            <div
              style={{
                width: 140,
                height: 140,
                backgroundColor: "#E53231",
                borderBottomRightRadius: 30,
                borderTopLeftRadius: 30,
                marginBottom: 40,
              }}
            ></div>
            <p
              style={{
                fontFamily: "UniSansLight",
                fontSize: 36,
                marginTop: 30,
                marginBottom: -58,
              }}
            >
              1 Cerâmica
            </p>
          </a>
          <a
            onClick={() => setBoxSelected(2)}
            className="box"
            href="#loja"
            style={{
              textDecoration: "none",
              display: "flex",
              border: 1,
              borderWidth: 2,
              borderStyle: "solid",
              borderColor: "#2a2a2a",
              borderRadius: 30,
              width: 300,
              height: 400,
              marginRight: "6%",
              marginLeft: "6%",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              boxShadow: boxSelected === 2 ? "0 0 50px #ccc" : "",
              backgroundColor: boxSelected === 2 ? "white" : "",
            }}
          >
            <div
              style={{
                width: 180,
                height: 180,
                backgroundColor: "#E53231",
                borderBottomRightRadius: 40,
                borderTopLeftRadius: 40,
                marginBottom: 40,
              }}
            ></div>
            <p
              style={{
                fontFamily: "UniSansLight",
                fontSize: 36,
                marginTop: 30,
                marginBottom: -20,
              }}
            >
              2 Cerâmicas
            </p>
          </a>
          <a
            onClick={() => setBoxSelected(3)}
            className="box"
            href="#loja"
            style={{
              textDecoration: "none",
              display: "flex",
              border: 1,
              borderRadius: 30,
              borderWidth: 2,
              borderStyle: "solid",
              borderColor: "#2a2a2a",
              width: 400,
              height: 400,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              boxShadow: boxSelected === 3 ? "0 0 50px #ccc" : "",
              backgroundColor: boxSelected === 3 ? "white" : "",
            }}
          >
            <div
              style={{
                width: 280,
                height: 180,
                backgroundColor: "#E53231",
                borderBottomRightRadius: 40,
                borderTopLeftRadius: 40,
                marginBottom: 40,
              }}
            ></div>
            <p
              style={{
                fontFamily: "UniSansLight",
                fontSize: 36,
                marginTop: 30,
                marginBottom: -20,
              }}
            >
              4 Cerâmicas
            </p>
          </a>
        </div>
      </div>
      <div
        id="loja"
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "rgb(246, 246, 246)",
        }}
      >
        <div style={{ width: "50%", marginTop: "8%" }}>
          <div style={{ paddingLeft: "30%", marginTop: 120 }}>
            <p
              style={{
                fontFamily: "UniSansLight",
                fontSize: 60,
                color: "#E53231",
                fontWeight: 400,
                width: 600,
              }}
            >
              Compre também seu Fichário de Receitas
            </p>
            <p
              style={{
                fontFamily: "UniSansLight",
                color: "#191919",
                fontSize: 40,
                width: 400,
                marginTop: -20,
              }}
            >
              Tenha o lugar certo para tirar suas dúvidas.
            </p>
            <Button
              style={{
                width: "40%",
                height: 50,
                fontSize: 20,
                fontWeight: "bold",
                backgroundColor: "#E53231",
                color: "#white",
                borderWidth: 5,
                borderBottomRightRadius: 20,
                borderTopLeftRadius: 20,
                marginTop: 90,
              }}
              variant="contained"
            >
              <p style={{ color: "white", fontFamily: "UniSansLight" }}>
                + Adicionar a sacola
              </p>
            </Button>
          </div>
        </div>
        <div
          style={{
            width: "30%",
            flex: 1,
            display: "flex",
            justifyContent: "center",
            marginTop: "5%",
            marginRight: "15%",
          }}
        >
          <div
            style={{
              width: "60%",
              float: "left",
              flex: 1,

              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={Fichario} alt="logo" style={{ width: 1200 }}></img>
          </div>
        </div>
      </div>
      <div
        id="redes"
        style={{
          flex: 1,
          backgroundColor: "#E53231",
          width: "100%",
          marginTop: -50,
          paddingTop: "5%",
          paddingBottom: "9%",
        }}
      >
        <div>
          <p
            style={{
              textAlign: "center",
              marginTop: 10,
              marginBottom: 50,
              fontFamily: "UniSansLight",
              fontSize: 50,
              color: "#FAFAFA",
              fontWeight: 400,
            }}
          >
            REDES:
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a
            href="https://www.instagram.com/azuma.box/"
            rel="noreferrer"
            target="_blank"
            style={{
              textDecoration: "none",
              display: "flex",
              border: 1,
              borderWidth: 2,
              borderStyle: "solid",
              borderColor: "#FAFAFA",
              borderRadius: 30,
              width: 500,
              height: 600,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              src={Menu}
              alt="menu"
              style={{
                width: 400,
                height: 400,
                backgroundColor: "#E53231",
                borderBottomRightRadius: 60,
                borderTopLeftRadius: 60,
                marginBottom: 40,
              }}
            ></img>
            <p
              style={{
                fontFamily: "UniSansLight",
                fontSize: 26,
                marginTop: 10,
                marginBottom: -10,
                textAlign: "center",
                color: "#FAFAFA",
                width: 250,
              }}
            >
              Aprenda tudo de uma forma gostosa
            </p>
          </a>
          <a
            href="https://www.instagram.com/azuma.box/"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              display: "flex",
              border: 1,
              borderWidth: 2,
              borderStyle: "solid",
              borderColor: "#FAFAFA",
              borderRadius: 30,
              width: 500,
              height: 600,
              marginRight: 20,
              marginLeft: 20,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              src={JP}
              alt="jp"
              style={{
                width: 400,
                height: 400,
                backgroundColor: "#E53231",
                borderBottomRightRadius: 60,
                borderTopLeftRadius: 60,
                marginBottom: 40,
              }}
            ></img>
            <p
              style={{
                fontFamily: "UniSansLight",
                fontSize: 26,
                marginTop: 10,
                marginBottom: -10,
                textAlign: "center",
                color: "#FAFAFA",
                width: 280,
              }}
            >
              A cultura Asiática dentro da sua casa
            </p>
          </a>
          <a
            href="https://www.instagram.com/azuma.box/"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              display: "flex",
              border: 1,
              borderWidth: 2,
              borderStyle: "solid",
              borderColor: "#FAFAFA",
              borderRadius: 30,
              width: 500,
              height: 600,

              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              src={Bowl}
              alt="bowl"
              style={{
                width: 400,
                height: 400,
                backgroundColor: "#E53231",
                borderBottomRightRadius: 60,
                borderTopLeftRadius: 60,
                marginBottom: 40,
              }}
            ></img>
            <p
              style={{
                fontFamily: "UniSansLight",
                fontSize: 26,
                marginTop: 16,
                textAlign: "center",
                color: "#FAFAFA",
                width: 450,
                marginBottom: 16,
              }}
            >
              Ceramicas de dezembro
            </p>
          </a>
        </div>
      </div>
      <div
        id="contato"
        style={{
          backgroundColor: "#2d2d2d",
          height: 300,
          fontFamily: "UniSansLight",
          fontSize: 26,
          paddingTop: 50,
          width: "100%",
          color: "#FAFAFA",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div style={{ marginRight: -250 }}>
            <p style={{ color: "#E53231" }}>Contato</p>
            <p>00 0000-000</p>
            <p style={{ marginTop: -20 }}>contato@azuma.com</p>
          </div>
          <div style={{ marginLeft: -250 }}>
            <p style={{ color: "#E53231" }}>Redes</p>
            <p>@azuma.box</p>
            <p style={{ marginTop: -20 }}>/azuma.box</p>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 60 }}>
          Copyright ©️ 2021 Azuma
        </div>
        <div></div>
      </div>
    </div>
  );
}
