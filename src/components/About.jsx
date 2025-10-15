import React from "react";
export const About = () => {
    return (
        <section id="a-propos" className=" container max-w-[1000px] mx-auto flex  flex-col items-center justify-center bg-cover bg-center mt-7 pt-24">
           <div className="text-center text-nailoul_vert text-3xl sm:text-xl">A propos de Nailoul Houda
            <div className="w-32 flex justify-center bg-nailoul_sable p-0.5 h2 rounded-full mt-4 mb-3 mx-auto">
           </div>
           </div>

           {/* Histoire et mission */}
           <div className="grid mt-8 px-4 space-x-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center shadow-lg bg-white rounded-sm">
            
            <div >
                <h2 className="text-3xl font-serif text-nailoul_vert mt-6 mb-3">Notre Histoire</h2>
                <div className="flex flex-col mt-8 space-y-4">
                    <p>Le dahira Nailoul Houda qui signifie "l'obtention de la guiance en arabe" est né de la volonté de préserver et de transmettre les enseignements traditionels de l'islam dans toute leur profondeur et authenticité  .</p>
                <p>
                    Notre cercle est fondé sur les principes de tolérance, de respect et de solidarité, et nous nous efforçons de créer un environnement où chacun peut s'épanouir spirituellement et intellectuellement.
                </p>
                </div>
            </div>

            <div>
                <h2 className="text-3xl font-serif text-nailoul_vert mt-6 mb-3">Notre Mission</h2>
                <div className="flex flex-col mt-8 space-y-4">
                    <p>Notre mission est de promouvoir une compréhension profonde et nuancée de l'islam, en mettant l'accent sur les valeurs de paix, de justice et de compassion. Nous organisons régulièrement des conférences, des ateliers et des sessions d'étude pour encourager le dialogue et l'apprentissage continu.</p>
                <p>
                    En tant que communauté, nous nous engageons à soutenir nos membres dans leur cheminement spirituel et à contribuer positivement à la société en incarnant les principes islamiques dans notre vie quotidienne.
                </p>
                </div>
                
            </div>
           </div>

              {/* Valeurs */}
              <div className="mt-12 px-4 text-center">
                <h2 className="text-3xl font-serif text-nailoul_vert mt-6 mb-3">Nos Valeurs</h2>
                <p className="mt-8">Au Dahira Nailoul Houda, nous valorisons la connaissance, la spiritualité et la communauté. Nous croyons en l'importance de l'éducation continue et de la réflexion critique pour approfondir notre compréhension de l'islam et de son application dans le monde moderne. Nous encourageons nos membres à s'engager activement dans des initiatives sociales et caritatives, reflétant ainsi les enseignements de l'islam sur la justice sociale et le service aux autres.</p>
              </div>    

              {/* Notre approche */}
              <div className="mt-12 flex flex-col items-center justify-center shadow-lg bg-white rounded-sm">
                <h2 className="text-3xl font-serif text-nailoul_vert mt-6 mb-3">Notre Approche</h2>
                <p className="mt-8 px-4">Nous adoptons une approche holistique de l'enseignement islamique, intégrant à la fois les aspects spirituels et intellectuels de la foi. Nos sessions d'étude sont conçues pour être interactives et engageantes, encourageant les participants à poser des questions et à partager leurs perspectives. Nous utilisons une variété de ressources, y compris des textes classiques, des commentaires contemporains et des discussions en groupe, pour enrichir l'expérience d'apprentissage.</p>
              </div>
        </section>
           
    )
}