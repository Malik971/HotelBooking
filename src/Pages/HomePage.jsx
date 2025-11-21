
import BarRecherche from "../components/BarRecherche";
import CardHotel from "../components/CartHotel";
import Filter from "../components/filter";
import Navbar from "../components/NavBar";

export default function HomePage() {

  // TEMP data — remplacée plus tard par l’API Spring Boot
  const hotels = [
    {
      id: 1,
      name: "Grand Hôtel de Paris",
      city: "Paris",
      country: "France",
      price: 245,
      imageUrl: "https://picsum.photos/400/300",
      description: "Hôtel de luxe au cœur de Paris."
    },
    // Duplique pour tester
  ];

  return (
    <div>
      <Navbar />
      <BarRecherche />

      <div className="flex w-[90%] mx-auto mt-10 gap-6">
        <Filter />

        <div className="grid grid-cols-3 gap-6 flex-1">
          {hotels.map((hotel) => (
            <CardHotel key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
}
