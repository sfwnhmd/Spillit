import React from 'react';


const Button = ({type = 'submit', children}) => (
  <>

  <a class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-xl text-lg cursor-pointer" for="my-modal-6">
    <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
    <span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-xl group-hover:bg-opacity-0 duration-400">
      <span class="relative text-white" for="my-modal-6"><label for="my-modal-6" class="modal-button">{children}</label></span>
    </span>
  </a>

  </>
);

export default Button;
