interface CarItemProps {
    name: string;
    logoUrl: string;
}

export default function CarItem({ name, logoUrl }: CarItemProps) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Logo du manufacturer */}
            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
                <img src={logoUrl} alt={name} className="max-w-full max-h-full object-contain" />
            </div>

            {/* Informations du manufacturer */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 capitalize">{name}</h3>

                {/* Bouton */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                    ⭐ View Vehicles
                </button>
            </div>
        </div>
    )
}