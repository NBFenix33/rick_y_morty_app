import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../../redux/actions";

export function Card(props) {
  const [isFav, setIsFav] = useState(props.fav);

  useEffect(() => {
    props.myFavorites &&
      props.myFavorites.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
      });
  });

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      props.removeFav(props.id);
    } else {
      setIsFav(true);
      props.addFav({
        name: props.name,
        species: props.species,
        gender: props.gender,
        image: props.image,
        id: props.id,
      });
    }
  }

  return (
    <>
      <div>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
        {props.onClose && <button onClick={props.onClose}>X</button>}
      </div>
      <Link to={`/detail/${props.id}`}>
        <h2>{props.name}</h2>
      </Link>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <img src={props.image} alt="" />
    </>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: function (personaje) {
      dispatch(addFav(personaje));
    },
    removeFav: function (id) {
      dispatch(removeFav(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
