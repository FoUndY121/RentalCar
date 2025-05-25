import { useSelector } from "react-redux";
import CarCard from "../components/CarCard/CarCard";
import css from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className={css.page}>
      <h1 className={css.title}>Favorites</h1>
      {favorites.length === 0 ? (
        <p className={css.empty}>No Favorites</p>
      ) : (
        <div className={css.cartochka}>
          <div className={css.cards}>
            {favorites.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
