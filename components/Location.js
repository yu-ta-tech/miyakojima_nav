import styles from "../styles/Location.module.css";
import Link from "next/link";

const Location = ({ location }) => {
  return (
    <div>
      <span>{location.id}</span>
      {" : "}
      <Link href={`/locations/${location.id}`}>
        <span className={styles.title}>{location.title}</span>
      </Link>
    </div>
  );
};

export default Location;
