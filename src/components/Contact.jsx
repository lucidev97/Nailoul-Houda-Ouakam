
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-nailoul-sable">
      <div className="container mx-auto px-4 md:px-6 text-xl">
        <h2 className="section-title text-center">Contactez-nous</h2>
        <div className="w-16 h-1 bg-nailoul_sable mx-auto mb-10"></div>
        
        <p className="section-content text-center mb-12">
          Nous sommes à votre disposition pour répondre à vos questions et vous aider 
          à découvrir notre cercle d'études spirituelles.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="animate-slide-up">
            <h3 className="section-subtitle">Envoyez-nous un message</h3>
            
            <form className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nom
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-nailoul-teal focus:border-transparent outline-none transition"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-nailoul-teal focus:border-transparent outline-none transition"
                    placeholder="Votre email"
                  />
                </div>
              </div>
              
              <div>
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Sujet
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-nailoul-teal focus:border-transparent outline-none transition"
                  placeholder="Sujet de votre message"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-nailoul-teal focus:border-transparent outline-none transition resize-none"
                  placeholder="Votre message"
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="bg-nailoul_sable w-full md:w-auto py-3 px-6 rounded-md text-white font-medium hover:bg-nailoul_marron transition"
                >
                  Envoyer le message
                </button>
              </div>
            </form>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="section-subtitle">Informations de contact</h3>
            
            <div className="mt-6 space-y-6">
              <div className="flex items-start">
                <Mail className="text-nailoul-gold mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-medium text-nailoul-charcoal">Email</h4>
                  <p className="text-gray-600">contact@nailoulhouda.org</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-nailoul-gold mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-medium text-nailoul-charcoal">Téléphone</h4>
                  <p className="text-gray-600">+221 77 162 78 21</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-nailoul-gold mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-medium text-nailoul-charcoal">Adresse</h4>
                  <p className="text-gray-600">
                    Ouakam Cité Assemblée<br />
                    12300 Ouakam, Sénégal
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MessageSquare className="text-nailoul-gold mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-medium text-nailoul-charcoal">Réseaux sociaux</h4>
                  <div className="flex space-x-4 mt-2">
                    <a 
                      href="https://wa.me/221771627821?text=Salam!%20Je%20souhaite%20avoir%20plus%20d'informations.
" 
                      className="text-shadow-nailoul_beige hover:text-nailoul_sable transition-colors"
                      aria-label="WhatsApp"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </a>
                    
                    <a 
                      href="https://www.facebook.com/profile.php?id=100064359144684" 
                      className="text-shadow-nailoul_beige hover:text-nailoul_sable transition-colors"
                      aria-label="Facebook"
                      target='_blank'
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                    
                    <a 
                      href="#" 
                      className="text-shadow-nailoul_beige hover:text-nailoul_sable  transition-colors"
                      aria-label="Twitter"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    
                    <a 
                      href="#" 
                      className="text-shadow-nailoul_beige hover:text-nailoul_sable  transition-colors"
                      aria-label="Instagram"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

