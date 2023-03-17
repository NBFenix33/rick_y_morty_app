import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({
    name: "",
    status: "",
    specie: "",
    gender: "",
    origin: "",
    image: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter({
            name: char.name,
            status: char.status,
            specie: char.specie,
            gender: char.specie,
            origin: char.origin.name,
            image: char.image,
          });
        } else {
          alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        alert("No hay personajes con ese ID");
      });
  }, [detailId]);

  return (
    <div>
      <div>
        <div>
          {character.name && (
            <p>
              <b>Name:</b> &#160; {character.name}
            </p>
          )}
          {character.status && (
            <p>
              <b>Status:</b> &#160; {character.status}
            </p>
          )}
          {character.specie && (
            <p>
              <b>Specie:</b> &#160; {character.specie}
            </p>
          )}
          {character.gender && (
            <p>
              <b>Gender:</b> &#160; {character.gender}
            </p>
          )}
          {character.origin && (
            <p>
              <b>Origin:</b> &#160; {character.origin}
            </p>
          )}
        </div>
        <img src={character.image} />
      </div>
      <button onClick={() => navigate('/home')}>Back To Home</button>
    </div>
  );
}
