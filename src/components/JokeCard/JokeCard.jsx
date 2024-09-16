import { Card, Punchline, Setup, Type } from "./JokeCard.styled";

const JokeCard = ({ joke }) => {
  const { setup, punchline, type } = joke;

  return (
    <Card type={type}>
      <Setup>{setup}</Setup>
      <Punchline>{punchline}</Punchline>
    </Card>
  );
};

export default JokeCard;
