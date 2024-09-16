import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f8ff;
  font-family: "Arial", sans-serif;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const SubText = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
`;

export const Select = styled.select`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
`;
