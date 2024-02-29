/** @format */

import React from "react";
import styled, { css } from "styled-components";

export default function Main() {
  //Mixin
  const Center = css`
    text-align: center;
  `;

  // Titulo
  const Titulo = styled.h2`
    font-size: 2rem;
    color: green;
    ${Center}
  `;

  const ButtonPrincipal = styled.button`
    background-color: #a8c261;
    cursor: pointer;
  `;

  const ButtonSecundario = styled.button`
    background-color: #c27861;
    cursor: pointer;
  `;

  const List = styled.ul`
    border: solid 3px purple;
    li {
      list-style: none;
      color: purple;
    }
  `;

  return (
    <>
      <main>
        <div>
          <Titulo>Eu sou a Main</Titulo>
          <ButtonPrincipal>Clique aqui</ButtonPrincipal>
          <ButtonSecundario>Clique aqui</ButtonSecundario>
        </div>
        <List>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </List>
      </main>
    </>
  );
}
