import React from 'react';
import Action from '../Action/Action';

function Card({ posts = [] }) {
  return (
    <div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 w-full">
      {posts.map(post => (
        <div class="p-6 md:p-10 rounded-xl bg-white shadow-md shadow-gray-200 transform transition duration-300 hover:scale-110" key={post.id}>
          <h3 class="mt-4 text-md md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">
            {post.title}
          </h3>
          <p class="my-4 text-base md:text-md text-gray-600 lg:truncate">
            {post.body}
          </p>
          <Action />
          </div>))}
        </div>
    </div>
  );
}

export default Card;
