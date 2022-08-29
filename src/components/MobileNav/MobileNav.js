import React from 'react';
import MSearchBar from '../MSearchBar';
import AddButton from '../AddButton';

function MobileNav({children}) {
  return (
    <div class="w-full md:invisible">
      <section
        id="bottom-navigation"
        class="flex flex-row fixed inset-x-0 bottom-0 z-10 bg-white shadow py-5 px-8 backdrop-filter backdrop-blur-xl bg-opacity-40">
        <div id="tabs" class="grid grid-cols-2">
          <div></div>
          <div class="flex justify-end items-end">
            <AddButton>
              <div class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p class="pl-2 text-sm">Create Post</p>
              </div>
            </AddButton>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MobileNav;
