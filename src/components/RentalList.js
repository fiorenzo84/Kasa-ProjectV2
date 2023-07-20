import RentalCard from "./RentalCard";

// retrieves the props from the "Home" parent
export default function RentalList(props) {
  return (
    <section className="gallery">
      {props.rentals.map((rental) => (
        <RentalCard key={rental.id} rental={rental} />
      ))}
    </section>
  );
}
