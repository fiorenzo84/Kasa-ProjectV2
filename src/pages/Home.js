import Banner from "../components/Banner";
import RentalList from "../components/RentalList";
import rentalsData from "../data/data.json";

export default function Home() {
  return (
    <main>
      <Banner />
      <RentalList rentals={rentalsData} />
    </main>
  );
}
