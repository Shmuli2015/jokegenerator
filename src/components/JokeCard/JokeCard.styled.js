import styled from "styled-components";

const backgroundColors = {
    general: "#f9e2e2",     
    "knock-knock": "#d4f1f4", 
    programming: "#e2f9e2",  
    dad: "#f4e2d4",        
  };

export const Card = styled.div`
  background-color: ${({type}) => backgroundColors[type] || "#fff"};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  text-align: center;
  margin-top: 1.5rem;
  position: relative;
`;

export const Setup = styled.h2`
  font-size: 1.5rem;
  color: #333;
`;

export const Punchline = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-top: 1rem;
`;

export const Type = styled.p`
  font-size: 1rem;
  color: #888;
  margin-top: 0.5rem;
`;
