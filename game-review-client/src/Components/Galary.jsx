import React from 'react';

const gameImages = [
    { title: "Elden Ring", url: "https://upload.wikimedia.org/wikipedia/en/e/e3/Elden_Ring_Box_art.jpg" },
    { title: "God of War", url: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg" },
    { title: "Cyberpunk 2077", url: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg" },
    { title: "The Witcher 3", url: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg" },
    { title: "Red Dead Redemption 2", url: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg" }
];

const Gallery = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Game Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {gameImages.map((game, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                        <img src={game.url} alt={game.title} className="w-full h-48 object-cover group-hover:opacity-75 transition-opacity duration-300" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                            <span className="text-white text-lg font-semibold">{game.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;