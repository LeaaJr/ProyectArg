import React from 'react';
import Testimonios from './Testimonios';
import SocialProof from './SocialProof';
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faCreditCard, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
 */
/* const features = [
  { icon: faTruck, text: 'Envíos' },
  { icon: faCreditCard, text: 'Compra Segura' },
  { icon: faThumbsUp, text: 'Calidad' },
]; */

const FeatureCircles = () => {
  return (
    <>
<section className="bg-white dark:bg-white">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-800 text-black">Entragas en toda Italia en 24 hs !!</h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl text-black">Puedes eleguir el plan de entrega que mas te guste, en la seccion de pago, ten en cuenta que cada uno tiene un cardo adicional aqui estan los planes.</p>
      </div>
      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 bg-[#eee] text-black">
              <h3 className="mb-4 text-2xl font-semibold">Gratis</h3>
              <p className="font-light text-gray-500 sm:text-lg text-black">Esta opcion es el plan de entregas estandar.</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">$0</span>
                  <span className="text-gray-500 text-black">Gratis</span>
              </div>
        
              <ul  className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                  
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Configuracion individual</span>
                  </li>
                  <li className="flex items-center space-x-3">

                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Entrega Por Correo Estandar</span>
                  </li>
                  <li className="flex items-center space-x-3">

                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Entregas: <span className="font-semibold">hasta 30 dias</span></span>
                  </li>
              </ul>
          </div>
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-[#eee] text-black">
              <h3 className="mb-4 text-2xl font-semibold">Privado</h3>
              <p className="font-light text-gray-500 sm:text-lg text-black">Esta opcion es el plan de entregas privado</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">$10</span>
                  <span className="text-gray-500 text-black">/sin iva</span>
              </div>
            
              <ul  className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">

                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Configuracion individual</span>
                  </li>
                  <li className="flex items-center space-x-3">

                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Entrega por correo Privado</span>
                  </li>
                  <li className="flex items-center space-x-3">

                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Entrega: <span className="font-semibold">hasta 15 dias</span></span>
                  </li>
                  <li className="flex items-center space-x-3">

                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Incluye: <span className="font-semibold">1 Productos de regalo</span></span>
                  </li>
              </ul>
          </div>
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-[#eee] text-black">
              <h3 className="mb-4 text-2xl font-semibold">Express</h3>
              <p className="font-light text-gray-500 sm:text-lg text-black">Esta opcion es el plan de entregas Express.</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">$40</span>
                  <span className="text-gray-500 text-black">/sin iva</span>
              </div>
            
              <ul  className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">

                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Configuracion individual</span>
                  </li>
                  <li className="flex items-center space-x-3">

                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Entrega Personalizada</span>
                  </li>
                  <li className="flex items-center space-x-3">

                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Entrega: <span className="font-semibold">Entre 24 a 48hs</span></span>
                  </li>
                  <li className="flex items-center space-x-3">

                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Incluye: <span className="font-semibold">3 productos de regalo</span></span>
                  </li>
                  <li className="flex items-center space-x-3">

                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Free: <span className="font-semibold">Un bono de 20% descuento</span></span>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</section>

<Testimonios />
<SocialProof />

</>
  );
};

export default FeatureCircles;