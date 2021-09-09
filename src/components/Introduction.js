import React from "react";

export function Introduction({ myImage }) {
  return (
    <figure class="md:flex border-4 border-blue-500 border-opacity-75 shadow-2xl rounded-xl p-8 md:p-0 mb-20">
      <img
        class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        src={myImage}
        alt="me"
        width="384"
        height="512"
      />
      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p class="text-lg font-semibold">
            “Very passionate about web development. This interface have being
            developed using React, Sweetarlet and Tailwind CSS. Very happy about
            it”
            <br />
            <br />
            You can :
          </p>
          <ul className="list-decimal list-outside md:list-inside font-semibold text-red-400 antialiased">
            <li>Add an appointment</li>
            <li>Delete an appointment</li>
            <li>
              Search an appointment by <em>owner name</em>, <em>pet name</em> or{" "}
              <em>appointment notes</em>
            </li>
            <li>
              Sort appointments by <em>pet Name</em>, <em>owner name</em> or{" "}
              <em>date</em> in ascending or descending order.
            </li>
          </ul>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-cyan-600">Armel Franck Djiongo</div>
          <div class="text-gray-500">Full stack developer</div>
        </figcaption>
      </div>
    </figure>
  );
}
