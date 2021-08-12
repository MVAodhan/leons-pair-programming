import { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@chakra-ui/react";

export default function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(async () => {
    const res = await axios.get("https://swapi.dev/api/people");
    const people = res.data.results;
    setCharacters(people);
  }, []);

  return (
    <Box
      d="flex"
      justifyContent="center"
      flexDir="column"
      alignItems="center"
      h="100vh"
    >
      {characters &&
        characters.map((character) => (
          <Box
            d="flex"
            justifyContent="center"
            alignItems="center"
            border="1px"
            borderColor="tomato"
            w="60%"
            flexDir="column"
            key={character.name}
          >
            <h3 d="flex" w="60%" border="1px">
              {character.name}
            </h3>
            <span d="flex" w="60%" border="1px">
              {character.gender}
            </span>
          </Box>
        ))}
    </Box>
  );
}
