import React from "react";

const SocialProof = () => {

    return(
        <>
    <section style={{ 
    backgroundImage: 'url(https://png.pngtree.com/background/20230806/original/pngtree-argentina-and-italy-italian-flag-america-photo-picture-image_4451807.jpg)', 
    height: '200px', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center' 
}}>
  <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 text-black">
          <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">+100</dt>
              <dd className="font-light text-black">Productos</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">10k</dt>
              <dd className="font-light text-black">Clientes</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">30k</dt>
              <dd className="font-light text-black">Entragas</dd>
          </div>
      </dl>
  </div>
</section>
</>
    );
};

export default SocialProof;