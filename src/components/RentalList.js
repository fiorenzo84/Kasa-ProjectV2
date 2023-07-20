import RentalCard from "./RentalCard";

// retrieves the props from the "Home" parent
export default function RentalList(props) {
  return (
    <section className="gallery">
      {/* For each location, create a new RentalCard */}
      {props.rentals.map((rental) => (
        <RentalCard key={rental.id} rental={rental} />
      ))}
    </section>
  );
}
