import rentalsData from "../data/data.json";
import {useParams, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import SlideShow from "../components/SlideShow";
import {FaStar} from "react-icons/fa";
import Collapse from "../components/Collapse";

export default function RentalDetail() {
  const {id} = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  // If the location.state object exists (if data has been passed via Link),
  // initialize rental with location.state.rental.
  // Otherwise, it initializes rental to null.
  const [rental, setRental] = useState(
    location.state ? location.state.rental : null
  );

  // If location.state is null, load the data from rentalsData.
  useEffect(() => {
    if (!rental) {
      const rentalFromJson = rentalsData.find(
        (rental) => rental.id.toString() === id
      );
      if (rentalFromJson) {
        setRental(rentalFromJson);
      } else {
        navigate("/not-found");
      }
    }
  }, [id, rental, navigate]);

  const MAX_RATING = 5;
  const rentalTitle = rental ? rental.title : "Loading...";
  const rentalLocation = rental ? rental.location : "Loading...";
  const rentalDescription = rental ? rental.description : "Loading...";
  const rentalEquipments =
    rental && rental.equipments ? (
      <ul>
        {rental.equipments.map((equipment) => (
          <li key={equipment}>{equipment}</li>
        ))}
      </ul>
    ) : (
      "Loading..."
    );
  const tagsElements =
    rental &&
    rental.tags &&
    rental.tags.map((tag) => (
      <span key={tag} className="tags">
        {tag}
      </span>
    ));
  const ratingsElements =
    rental &&
    [...Array(MAX_RATING)].map((rating, i) => (
      <FaStar key={i} color={i < rental.rating ? "#FF6060" : "#E3E3E3"} />
    ));

  const hostElements = rental && (
    <>
      <p className="host-name">{rental.host.name}</p>
      <img className="host-picture" src={rental.host.picture} alt="" />
    </>
  );

  return (
    <div className="container-rentalDetail">
      {rental ? <SlideShow rental={rental.pictures} /> : ""}
      <h1>{rentalTitle}</h1>
      <p>{rentalLocation}</p>
      <div className="container-tags-ratings-host">
        <div className="container-tags">{tagsElements}</div>
        <div className="container-ratings-host">
          <div className="ratings">{ratingsElements}</div>
          <div className="container-host">{hostElements}</div>
        </div>
      </div>
      <div>
        <div className="collapse-group">
          <div className="collapse-wrapper">
            <Collapse title="Description">{rentalDescription}</Collapse>
          </div>
          <div className="collapse-wrapper">
            <Collapse title="Équipements">{rentalEquipments}</Collapse>
          </div>
        </div>
      </div>
    </div>
  );
}
