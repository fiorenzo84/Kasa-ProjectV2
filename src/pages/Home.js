import Banner from "../components/Banner";
import RentalList from "../components/RentalList";
import rentalsData from "../data/data.json";

export default function Home() {
  return (
    <main>
      <Banner />
      {/* imports the data from the JSON into the child component */}
      <RentalList rentals={rentalsData} />
    </main>
  );
}
