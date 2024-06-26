"use client"
import Image from "next/image";
import Link from "next/link";
import comitteImg from "./../../public/assets/comittes/image-1.jpg";

const Comitteeslevels = [
  {
    id : '1' ,
    img: comitteImg,
    title: "Preparatory",
    href : 'https://github.com/ayman-ezzeldin'
  },
  {
    id : '2' ,
    img: comitteImg,
    title: "First year",
    href : 'Material/FirstYear'
  },
  {
    id : '3' ,
    img: comitteImg,
    title: "Second year",
    href : 'Material/SecondYear'
  },
  {
    id : '4' ,
    img: comitteImg,
    title: "Third year",
    href : 'Material/ThirdYear'
  },
  {
    id : '5' ,
    img: comitteImg,
    title: "Fourth year",
    href : 'Material/FourthYear'
  },
];

const Comittees = () => {
  return (
    <div className=" text-white mt-[100px]  flex flex-wrap gap-6 justify-center items-center p-9 md:p-0 bg-black ">
      {Comitteeslevels.map((level) => (
        <div key={level.id} class=" max-w-sm bg-white text-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <Image
              class="rounded-t-lg"
              src={level.img}
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                {level.title}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Link
              href={level.title === 'Preparatory' ? `${level.href}` : `/${level.href}` }
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comittees;
