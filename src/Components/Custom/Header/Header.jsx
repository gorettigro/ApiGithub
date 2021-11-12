import React from "react";


const Header = () => {
  return (

    <div>
        <nav class="bg-orange dark:bg-gray-800  shadow ">
            <div class="max-w-7xl mx-auto">
                <div class="flex justify-between h-16">
                    <div class="w-full justify-between flex items-center">
                        <a class="flex-shrink-0" href="/">
                            <span class="text-xl md:text-2xl font-serif">Github API</span>
                        </a>
                        <div class="hidden sm:block">
                            <div class="ml-10 flex items-baseline space-x-4">
                                <a class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium font-serif" href="/#">
                                    Home
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>

  );
};

export default Header;