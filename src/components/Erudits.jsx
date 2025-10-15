
import React from 'react'
import { CirclePlay } from 'lucide-react';
export const Erudits = () => {
    const Cheikh = [
        { 
            id:1,
            name: "Cheikh Imam Kabir barry", 
            description: "Sahiboul Fouyodati rabani",
            period:"1936-2012",
             image: "nho/KABIR.JPG"

        },

        {
            id:2,
            name: "Cheikh Said Omar Kébé", 
            description: "Baboul Fouyodati rabani",
            period:"1949-2022",
             image: "nho/SAID.JPG"
        },

         {
            id:3,
            name: "Cheikh MBAYE Diouf", 
            description: "MOUHADAM CHEIKH SAID IMAR KEBE",
            period:"Ouakam Cité assemblée ",
            image: "nho/CMD.JPG"
        }
        
    ]

    const extraitsVideo = [
        {
            id: 1,
            title: "EXTRAIT NHO 2017: Enseignements de Cheikh Imam Kabir BARRY SRF", 
            url: "https://youtu.be/gSFaVq4nbyE",
            image: "nho/IMG_0995.JPG"

        },
        {
            id: 2,
            title: "EXTRAIT NHO 2017: LOUMA NEEX DEF, DOU DIINE", 
            url: "https://youtu.be/xKKgFeG4rI8",
            image: "nho/IMG_0243.JPG"
        },
        {
            id: 3,
            title: " RASULILAH (AS) REKKAY SERIGNE", 
            url: "https://youtu.be/HLN-mvArSlA",
            image: "nho/CSK.jpg"
        }
    ];
  return (
    <section className="min-h-screen  flex flex-col justify-center align-items"id='erudits' >
        <div className="text-center mt-7" >
            <h1 className="text-5xl md:text-3xl font-serif mb-4  text-nailoul">Nos Érudits</h1>
            <div className='underline underline-offset-4 decoration-[1.5]px decoration-nailoul_sable w-64'></div>
            <div className="flex justify-center w-full mt-4 mb-3">      
            <hr className="w-64 h-2 bg-amber-300 border-0 rounded" />
            </div>
        <p className='text-xl'>Découvrez les savants et érudits qui ont façonné notre compréhension de l'islam</p>
        <p className='text-xl'>Leur sagesse continue d'éclairer notre compréhension de la spritualité et des sciences islamiques</p>
        <div className="card">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 justify-center">
                {Cheikh.map((cheikh) => (
                    <div key={cheikh.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={cheikh.image} alt={cheikh.name} className="w-full h-[500px] object-cover"/>
                        <div className="p-4">
                            <h2 className="text-2xl font-serif text-nailoul_vert mb-2">{cheikh.name}</h2>
                            <p className="text-gray-700 mb-1">{cheikh.description}</p>
                            <p className="text-gray-500 text-sm">{cheikh.period}</p>
                        </div>
                    </div>
                ))}     
            </div>
        </div>
        </div>

        {/* Partie Vidéo */}
        <div className="text-center mt-20" >
            <h1 className="text-5xl md:text-6xl font-serif mb-4  text-nailoul">Extraits Vidéo</h1> 
            <div className='underline underline-offset-4 decoration-[1.5]px decoration-nailoul_sable w-64'></div>
            <div className="flex justify-center w-full mt-4 mb-3">  
            <hr className="w-64 h-2 bg-amber-300 border-0 rounded" />
            </div>
        <p className='text-xl'>Plongez dans les enseignements et discours inspirants de nos érudits à travers ces extraits vidéo soigneusement sélectionnés</p>
        <div className="card">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 justify-center">
              
{extraitsVideo.map((video) => (
    <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden relative">
        <a href={video.url} target="_blank" rel="noopener noreferrer">
            <div className="relative">
                <img src={video.image} alt={video.title} className="w-full h-[300px] object-cover" />
                <CirclePlay
                  size={48}
                  color="#D4AF37"
                  className="absolute top-3 right-3 animate-bounce bg-white/80 p-2 rounded-full"
                />
            </div>
        </a>
        <div className="p-4">
            <h2 className="text-2xl font-serif text-nailoul_vert mb-2">{video.title}</h2>
        </div>
    </div>
))}
            </div>
        </div>
        </div>

</section>
  )
}
