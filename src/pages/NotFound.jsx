import { Link } from "react-router-dom";
import css from "./NotFound.module.css";
import { BiSolidCarCrash } from "react-icons/bi";
import { LiaCarCrashSolid } from "react-icons/lia";
import okak from "../assets/img/cat.png";

const NotFound = () => {
  return (
    <div className={css.container}>
      <div className={css.app}>
        <div className={css.error}>404</div>
        <div className={css.img}>
          <img src={okak} alt="cat" />
          <h1 className={css.okak}> OKAK</h1>
        </div>
      </div>
      <h2 className={css.subtitle}>Page Not Found</h2>

      <p className={css.text}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className={css.button}>
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
