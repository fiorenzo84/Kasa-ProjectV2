import {Link} from "react-router-dom";

// The component receives the props of each individual card
export default function RentalCard(props) {
  return (
    <div className="cards">
      <Link
        to={{
          pathname: `/rental/${props.rental.id}`,
          state: {rental: props.rental},
          // passes the rental object to the destination page to have the data
        }}>
        <img src={props.rental.cover} alt="photographie des locations" />
        <p>{props.rental.title}</p>
      </Link>
    </div>
  );
}
