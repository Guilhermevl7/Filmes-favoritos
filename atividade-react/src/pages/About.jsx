import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Container } from "../components";

export default function About() {
    const { state } = useLocation();
    const navigate = useNavigate();

    return(
        <Container
        styles={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          
        }}
      >
        <img
          src={state.image}
          alt={state.nome}
          style={{ width: "240px", height: "350px", borderRadius: "10px", marginTop: "-35px" }}
        />
        <div style={{ width: "50%", height: "550px", marginTop: "99px"}}>
          <h1>{state.nome}</h1>
          <h4>{state.ano}</h4>
          <p>{state.sinopse}</p>
          <Button onClick={() => navigate("/")}>Voltar</Button> 
        </div>
      </Container>   
    );
}
