export default function CardHotel({ hotel }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      <img
        src={hotel.imageUrl}
        alt={hotel.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold">{hotel.name}</h3>
        <p className="text-gray-500">{hotel.city}, {hotel.country}</p>

        <p className="text-sm text-gray-600 mt-2">
          {hotel.description.substring(0, 80)}...
        </p>

        <div className="mt-4 flex justify-between items-center">
          <p className="text-blue-600 font-bold">{hotel.price}€/nuit</p>
          <button className="bg-black text-white px-3 py-2 rounded-lg text-sm">
            Voir détails
          </button>
        </div>
      </div>
    </div>
  );
}
