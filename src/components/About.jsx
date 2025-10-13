import React from "react";
export const About = () => {
    return (
        <section id="a-propos" className=" container max-w-[1000px] mx-auto flex  flex-col items-center justify-center bg-cover bg-center mt-7 pt-24">
           <div className="text-center text-nailoul_vert text-5xl">A propos de Nailoul Houda
            <div className="w-32 flex justify-center bg-nailoul_sable p-0.5 h2 rounded-full mt-4 mb-3 mx-auto">
           </div>
           </div>

           {/* Histoire et mission */}
           <div className="flex  mt-8 px-4">
            
            <div>
                <h2 className="text-3xl font-serif text-nailoul_vert mt-6 mb-3">Notre Histoire</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maxime, rem accusamus obcaecati delectus eum, quas corrupti in pariatur, repudiandae fugit tempora placeat hic odio ut doloribus laborum molestiae saepe!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident explicabo suscipit quasi quas officiis officia, molestias asperiores, debitis ex qui ipsam deleniti excepturi neque. At nemo temporibus sed dolorem minus.</p>
            </div>

            <div>
                <h2 className="text-3xl font-serif text-nailoul_vert mt-6 mb-3">Notre Histoire</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maxime, rem accusamus obcaecati delectus eum, quas corrupti in pariatur, repudiandae fugit tempora placeat hic odio ut doloribus laborum molestiae saepe!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident explicabo suscipit quasi quas officiis officia, molestias asperiores, debitis ex qui ipsam deleniti excepturi neque. At nemo temporibus sed dolorem minus.</p>
            </div>
           </div>

        </section>
           
    )
}