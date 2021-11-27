import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "../../assets/images/LOGO-SITE.png";
import { Button } from "@material-ui/core";

export default function Header(props) {
  return (
    <div>
      <AppBar
        style={{
          backgroundColor: "#E53231",
          color: "#DEDEDE",
          boxShadow: "0 0 50px rgba(0, 0, 0, 0.1)",
        }}
        position="fixed"
      >
        <Toolbar>
          <a href="#home">
            <img
              src={Logo}
              alt={"logo"}
              style={{ width: 150, marginLeft: 60 }}
            ></img>
          </a>
          <div style={{ marginLeft: "auto" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Button
                variant="text"
                href="#sobre"
                style={{ marginLeft: 60, color: "white" }}
              >
                Sobre
              </Button>
              <Button
                variant="text"
                href="#assinatura"
                style={{ marginLeft: 60, color: "white" }}
              >
                Assinatura
              </Button>
              <Button
                variant="text"
                href="#loja"
                style={{ marginLeft: 60, color: "white" }}
              >
                Redes
              </Button>
              <Button
                variant="text"
                href="#contato"
                style={{ marginLeft: 60, color: "white" }}
              >
                Contato
              </Button>
              <Button
                variant="text"
                href="#entrar"
                style={{ marginRight: 60, marginLeft: 150, color: "white" }}
              >
                Entrar
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
