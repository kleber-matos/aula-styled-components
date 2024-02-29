/** @format */

import React from "react";
//css
import { styled, css } from "styled-components";

export default function Header() {
  //Mixin é uma técnica de reutilização de código que permite definir um conjunto de estilos.
  const Center = css`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  `;

  // Botão principal reutilizável
  const ButtonPrincipal = styled.button`
    width: 15vw;
    height: 5vh;
    background-color: #a8c261;
    border: solid black;
    &:hover {
      background-color: red;
      color: white;
    }
  `;

  // Lista reutilizável
  const List = styled.ul`
    border: solid 3px red;
    li {
      list-style: none;
      color: purple;
    }
  `;
  // Titulo
  const Titulo = styled.h2`
    font-size: 2rem;
    color: green;
    ${Center}
  `;

  return (
    <>
      <header>
        <Titulo>Nome Do Site</Titulo>

        <ButtonPrincipal>Facebook</ButtonPrincipal>
        <ButtonPrincipal>Instagram</ButtonPrincipal>
        <ButtonPrincipal>Whatsapp</ButtonPrincipal>
        <List>
          <li>Home</li>
          <li>Sobre</li>
          <li>Contato</li>
        </List>
      </header>
    </>
  );
}
