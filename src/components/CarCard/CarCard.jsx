import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { parseAddress } from "../../utils/addressUtils";
import { addFavorite, removeFavorite } from "../../store/slices/favoritesSlice";
import css from "./CarCard.module.css";
import { useEffect, useState } from "react";

const CarCard = ({ car }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setAnimate(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [animate]);
  const { city, country } = parseAddress(car.address);
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites);

  const isFavorite = favorites.some((favCar) => favCar.id === car.id);

  const formatMileage = (mileage) => {
    return mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const [animateDrops, setAnimateDrops] = useState(false);

  const handleFavoriteToggle = () => {
    if (!isFavorite) {
      setAnimateDrops(true);
    }
    if (isFavorite) {
      dispatch(removeFavorite(car.id));
    } else {
      dispatch(addFavorite(car));
    }
  };

  useEffect(() => {
    if (animateDrops) {
      const timer = setTimeout(() => {
        setAnimateDrops(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [animateDrops]);

  return (
    <div className={css.card}>
      <img
        src={car.img}
        alt={`${car.brand} ${car.model}`}
        className={css.carImage}
      />
      <div className={css.info}>
        <div className={css.infoMainWrap}>
          <h3 className={css.infoTitle}>
            {car.brand} <span className={css.span}>{car.model}</span>,{" "}
            {car.year}
          </h3>
          <p className={css.price}>${car.rentalPrice}</p>
        </div>
        <div className={css.infoAdress}>
          <p className={css.infoAdressCity}>{city}</p>
          <p className={css.infoAdressCountry}>{country}</p>
          <p className={css.infoAdressCompany}> {car.rentalCompany}</p>
        </div>
        <div className={css.infoAdress2}>
          <p className={css.infoAdressType}>{car.type}</p>
          <p className={css.infoAdressKm}>{formatMileage(car.mileage)} km</p>
        </div>
      </div>
      <button
        onClick={handleFavoriteToggle}
        className={`${css.favButton} ${animateDrops ? css.drops : ""}`}
      >
        {isFavorite ? (
          <IoHeartSharp className={css.iconFull} size={24} color="#3470ff" />
        ) : (
          <IoHeartOutline className={css.iconEmpty} size={24} color="white" />
        )}
        {animateDrops && (
          <span className={css.dropWrapper}>
            {[...Array(6)].map((_, i) => (
              <span key={i} className={`${css.drop} ${css["drop" + i]}`} />
            ))}
          </span>
        )}
      </button>

      <Link to={`/catalog/${car.id}`} className={css.readMore}>
        Read more
      </Link>
    </div>
  );
};

export default CarCard;
