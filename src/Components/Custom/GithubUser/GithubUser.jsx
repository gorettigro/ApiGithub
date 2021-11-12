import React from "react";
import {Link} from "react-router-dom";

const GithubUser = props => {
  const {
    avatar,
    github,
    github_name,
    name,
    public_repos,
    followers,
    following
  } = props;

  return (
<div class="center pr-14 pl-14 pt-8 sm:pt-10 lg:pt-20 object-none object-center">
    <div class="text-center mb-4 absolute right-1/2 transform translate-x-1/2">
        <a href="#" class="block relative">
            <img src={avatar} alt={github} class="mx-auto object-cover rounded-lg h-20 w-20 sm:h-40 sm:w-40  border-2 border-opacity-50 border-gray"/>
        </a>
    </div>
    <div class="bg-gris dark:bg-red rounded-lg shadow px-8 py-4 pt-24 ">
        <div class="text-center">
          <div class="sm:mt-16 lg:mt-20">
            <p>
              <h3 class="text-m sm:text-2xl lg:text-4xl font-bold text-gray2">{github_name}</h3>
            </p>
            <p>
              <h2 class="text-xs sm:text-l lg:text-xl text-black ">{name}</h2>
            </p>
            <div class="mt-4 sm:mt-6 flex justify center grid justify-items-center">
              <p>
                <Link to={`/followers/${github_name}`}>
                  <span className="text-navy text-m sm:text-xl lg:text-2xl font-medium h-8 bg-gray-200"> Followers: {followers} </span>{" "}
                </Link>
              </p>
              <p>
                <span className="text-navy text-m sm:text-xl lg:text-2xl font-medium	h-8 bg-gray-200"> Following: {following}</span>{" "}
              </p>
              <p>
                <Link to={`/repos/${github_name}`}>
                  <span className="text-navy text-m sm:text-xl lg:text-2xl font-medium	h-8 bg-gray-200"> Repositorios: {public_repos}</span>{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div class="pt-4 flex border-t-2 border-gray-200 w-32 mx-auto text-marron items-center justify-between">
            <a href="#">
                <svg width="30" height="30" fill="currentColor" class="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z">
                    </path>
                </svg>
            </a>
            <a href="#">
                <svg width="30" height="30" fill="currentColor" class="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z">
                    </path>
                </svg>
            </a>
            <a href="#">
                <svg width="30" height="30" fill="currentColor" class="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z">
                    </path>
                </svg>
            </a>

        </div>
    </div>
</div>


  );
};

export default GithubUser;