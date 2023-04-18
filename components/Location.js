import Link from "next/link";

const Location = ({ location }) => {
  return (
    <div>
      <span>{location.id}</span>
      {" : "}
      <Link href={`/locations/${location.id}`}>
        <div>
          <div>
            <span>{location.title}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Location;
