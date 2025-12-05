import { useEffect, useState } from 'react'
import '../App.css'
import CarItem from '../ui/CarItem'

interface Manufacturer {
  [key: string]: string; // name -> logo URL
}

function HomePage() {
  const [manufacturers, setManufacturers] = useState<Manufacturer>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchManufacturers = async () => {
      try {
        const response = await fetch('https://gta.vercel.app/api/vehicles/manufacturers');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }
        const data = await response.json();
        setManufacturers(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError('Impossible de charger les manufacturers');
        setLoading(false);
      }
    };
    fetchManufacturers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-2xl font-bold text-gray-700">Chargement des manufacturers... 🚗</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-2xl font-bold text-red-600">{error}</div>
      </div>
    );
  }

  const manufacturersList = Object.entries(manufacturers);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">🏎️ GTA Manufacturers</h1>
          <p className="text-xl mt-2">Explore all manufacturers from GTA V</p>
        </div>
      </div>

      {/* Liste des manufacturers */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          All Manufacturers ({manufacturersList.length} total)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {manufacturersList.map(([name, logoUrl]) => (
            <CarItem key={name} name={name} logoUrl={logoUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage