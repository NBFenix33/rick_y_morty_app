import Card from "../Card/Card";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import { useRef } from "react";

export function Favorites({ myFavorites }) {
  const filter = useRef(null);
  const order = useRef(null);

  const dispatch = useDispatch();

  function handleReset(e) {
    dispatch({ type: "RESET" });
    filter.current.value = "";
    order.current.value = "";
  }

  return (
    <>
      <select
        ref={order}
        onChange={(e) => dispatch(orderCards(e.target.value))}
      >
        {["Ascendente", "Descendente"].map((e, i) => (
          <option value={e} key={i}>
            {e}
          </option>
        ))}
      </select>

      <select
        ref={filter}
        onChange={(e) => dispatch(filterCards(e.target.value))}
      >
        {["Male", "Female", "unknown", "Genderless"].map((e, i) => (
          <option value={e} key={i}>
            {e}
          </option>
        ))}
      </select>

      <button value="reset" onClick={handleReset}>
        Reset
      </button>
      <div>
        {myFavorites.length === 0 ? (
          <p>
            ¡Agrega un favorito!
          </p>
        ) : (
          myFavorites.map((e, i) => (
            <Card
              id={e.id}
              name={e.name}
              species={e.species}
              gender={e.gender}
              image={e.image}
              onClose={false}
              fav={true}
              key={i++}
            />
          ))
        )}
      </div>
    </>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);
