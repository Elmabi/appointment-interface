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
            developed using React and Tailwind CSS. Very happy about it”
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-cyan-600">Armel Franck Djiongo</div>
          <div class="text-gray-500">Full stack developer</div>
        </figcaption>
      </div>
    </figure>
  );
}
