import React from 'react';
import Action from '../Action/Action';

function Card({ title, body }) {
  return (
    <>
          <h3 class="mt-4 text-md md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">
            {title}
          </h3>
          <p class="my-4 text-base md:text-md text-gray-600 lg:truncate">
            {body}
          </p>
          <Action />
          </>
  );
}

export default Card;
