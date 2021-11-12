import React from "react";
import {Link} from "react-router-dom";

const GithubRepos = props => {
  const {
    github,
    name,
    language,
    size,
    created_at,
    visibility,
  } = props;

  return (
    <div class="flex justify-around transform scale-100 sm:scale-75">
      <div class="shadow overflow-hidden">
        <div class=" border-t-2 border-black">
            <dl>
                <div class="bg-verdete px-3 py-2 grid grid-cols-2 gap-4 sm:px-6 sm:grid sm:grid-cols-2">
                    <dt class="text-m font-medium text-gray-500 text-xs sm:text-xl">
                        Name
                    </dt>
                    <dd class="mt-1 text-gray-900 sm:mt-0 sm:col-span-1 text-xs sm:text-xl">
                        {name}
                    </dd>
                </div>
                <div class="bg-verdepastel px-3 py-2 grid grid-cols-2 gap-4 sm:px-6 sm:grid sm:grid-cols-2">
                    <dt class="text-m font-medium text-gray-500 text-xs sm:text-xl">
                        Lenguaje
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 text-xs sm:text-xl">
                        {language}
                    </dd>
                </div>
                <div class="bg-verdete px-3 py-2 grid grid-cols-2 gap-4 sm:px-6 sm:grid sm:grid-cols-2">
                    <dt class="text-m font-medium text-gray-500 text-xs sm:text-xl">
                        Tamaño
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 text-xs sm:text-xl">
                        {size}
                    </dd>
                </div>
                <div class="bg-verdepastel px-3 py-2 grid grid-cols-2 gap-4 sm:px-6 sm:grid sm:grid-cols-2">
                    <dt class="text-m font-medium text-gray-500 text-xs sm:text-xl">
                        Fecha en que se creó
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 text-xs sm:text-xl">
                        {created_at}
                    </dd>
                </div>
                <div class="bg-verdete px-3 py-2 grid grid-cols-2 gap-4 sm:px-6 sm:grid sm:grid-cols-2">
                    <dt class="text-m font-medium text-gray-500 text-xs sm:text-xl">
                        Visibilidad
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 text-xs sm:text-xl">
                        {visibility}
                    </dd>
                </div>
            </dl>
        </div>
      </div>

    </div>
    );
};

export default GithubRepos;