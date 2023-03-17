import Card from "../Card/Card";

export default function Cards(props) {
  const { characters } = props;
  let i = 0;
  return (
    <>
      {characters.length === 0 ? (
        <p>
          ¡Busca un personaje!
        </p>
      ) : (
        characters.map((e) => (
          <Card
            id={e.id}
            name={e.name}
            species={e.species}
            gender={e.gender}
            image={e.image}
            onClose={() => props.onClose(e.id)}
            key={i++}
          />
        ))
      )}
    </>
  );
}
