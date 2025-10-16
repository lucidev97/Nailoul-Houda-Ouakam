import React from 'react'

export const Events = () => {
  return (
    <div>
        <section className="min-h-screen  flex flex-col justify-center align-items"id='evenements' >
        <div className="text-center mt-7" >
            <h1 className="text-5xl md:text-3xl font-serif mb-4  text-nailoul">Nos Événements</h1>
            <div className='underline underline-offset-4 decoration-[1.5]px decoration-nailoul_sable w-64'></div>
            <div className="flex justify-center w-full mt-4 mb-3">
            <hr className="w-64 h-2 bg-amber-300 border-0 rounded" />
            </div>
            <div className="w-full h-full flex justify-center mb-6">
                <img 
                    src="nho/affiche.jpg" 
                    alt="Conférence Nailoul Houda" 
                    className="w-full h-full object-cover"
                />
            </div>

            <p className="text-xl md:text-sm text-nailoul_gris px-6 md:px-20 lg:px-60">
            Chaque année, nous organisons des événements spirituels et culturels pour renforcer les liens au sein de notre communauté et promouvoir les valeurs de l'Islam. Rejoignez-nous pour des conférences, des ateliers, des célébrations religieuses et bien plus encore.
            </p>
        </div>
        </section>

    </div>
  )
}
