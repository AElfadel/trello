"use client";

import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

function Header() {
  return (
    <header>
      <div className="flex flex-col items-center p-5 bg-gray-500/10 rounded-b-2xl md:flex-row ">
        <div
          className="
          absolute
        top-0
        left-0
        w-full
        h-96
        bg-gradient-to-br
        from-pink-400 to-fancyblue
        rounded-md
        filter
        blur-3xl
        opacity-50
        -z-50"
        />
        <Image
          src="https://links.papareact.com/c2cdd5"
          alt="Trello logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />

        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/* Search Box*/}
          <form
            className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial"
            action=""
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2"
            />
            <button hidden type="submit">
              Seatch
            </button>
          </form>
          {/* Avatar */}
          <Avatar name="Ahmed Elfadel" round size="50" color="#0055D1" />
        </div>
      </div>
      <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <p className=" p-5 flex items-center text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic text-fancyblue">
          <UserCircleIcon className="inline-block h-10 w-10 text-fancyblue mr-1" />
          GPT IS summaraizing your tasks for the day...
        </p>
      </div>
    </header>
  );
}

export default Header;
