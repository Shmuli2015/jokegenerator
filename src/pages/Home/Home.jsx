import { useEffect, useState } from "react";
import axios from "axios";
import JokeCard from "../../components/JokeCard/JokeCard";
import Button from "../../components/Button/Button";
import { AppContainer, Select, SubText, Title } from "./Home.styled";

const Home = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  const baseUrl = "https://official-joke-api.appspot.com";
  
  const getJokeTypes = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/types`);
      setTypes(data);
    } catch (error) {
      console.error("Error fetching joke types:", error);
    }
  };

  const getJoke = async () => {
    setLoading(true);
    const endUrl = selectedType
      ? `/jokes/${selectedType}/random`
      : "/jokes/random";
    const url = `${baseUrl}${endUrl}`;
    console.log({url});
    
    try {
      const { data } = await axios.get(url);
      console.log({ data });
      
      setJoke(selectedType ? data[0] : data);
    } catch (error) {
      console.error("Error fetching the joke:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getJokeTypes();
  }, []);

  useEffect(() => {
    getJoke();
  }, [selectedType]);

  return (
    <AppContainer>
      <Title>Joke Generator</Title>
      <SubText>Get a random joke using the Joke API</SubText>
      <Select
        value={selectedType}
        onChange={(e) => {
          setSelectedType(e.target.value);
        }}
      >
        <option value="">Select a type</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </Select> 
      <Button onClick={getJoke} loading={loading}>
        {loading ? "Loading..." : "Generate Joke"}
      </Button>
      {joke && <JokeCard joke={joke} />}
    </AppContainer>
  );
};

export default Home;
