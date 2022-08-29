import React from 'react';
import Action from '../Action/Action';

function Card() {
  return (
    <div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full">
        <div class="p-6 md:p-10 rounded-xl bg-white shadow-md shadow-gray-200 transform transition duration-300 hover:scale-110">
          <h3 class="mt-4 text-md md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">
            Arbor ultio patrocinor amoveo audentia tondeo strues eum.
          </h3>
          <p class="my-4 text-base md:text-md text-gray-600 lg:truncate">
            Creber et contra. Basium voco ater. Tondeo volubilis impedit.
            Chirographum complectus quis. Iure velit voro. Adimpleo consectetur
            maxime. Abscido trepide caveo. Trans eaque ustulo ...
          </p>
          <Action />
        </div>
      </div>
    </div>
  );
}

export default Card;
