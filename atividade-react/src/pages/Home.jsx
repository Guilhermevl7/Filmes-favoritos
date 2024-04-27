import React from "react";
import { Card, Container } from "../components";
import { filmes } from "../utils/mock";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <h1 style={{textAlign: "center"}}>Filmes e Animes</h1>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around",
      }}>
      {filmes.map((filme) => (
        <Card
        title={filme.nome}
        subtitle={filme.ano}
        image={filme.image}
        onClick={() => navigate("/about", {state: filme})}
        />
      ))}
      </div>
      </Container>
  );
}
