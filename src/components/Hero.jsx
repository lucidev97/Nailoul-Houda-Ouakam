import React from 'react'
import { ChevronDown } from 'lucide-react'
export const Hero = () => {
  return (
    <div>
        <section className="min-h-screen flex items-center justify-center bg-cover bg-center pt-32">
        <div className="text-center ">
            <h1 className="text-5xl md:text-6xl font-serif mb-4  text-nailoul">Nailoul Houda Ouakam</h1>
            <div className='underline underline-offset-4 decoration-[1.5]px decoration-nailoul_sable w-64'></div>
            <div className="flex justify-center w-full mt-4 mb-3">
            <hr className="w-64 h-2 bg-amber-300 border-0 rounded" />
            </div>
        <p className='text-xl'>Cercle d'études spirituelles et d'érudition islamique </p>
        
        <div className="mx-auto max-w-[700px] mt-6 text-2xl ">
            <p className='text-center'>Découvrez la richesse de la traditition intélectuelle et spirituelle islamique à travers les enseignements, les textes et les savoirs des grands Érudits.</p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2  mt-8 justify-center gap-x-2">
            <button className='bg-nailoul_vert py-3 w-64 text-white rounded hover:bg-nailoul_marron'>Découvrir</button>
            <button className='bg-nailoul_sable py-3 w-64 rounded hover:bg-yellow-100'>Nos Enseignements</button>

        </div>


        <div className='flex justify-center items-center mt-28 mb-3'>
            <div className='animate-bounce'>
                <ChevronDown size={48} color="#D4AF37" />
            </div>
        </div>

        </div>
        </section>
          
    </div>
  )
}
