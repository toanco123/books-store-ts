import { FC } from "react";

interface data {
  title: string;
  description: string;
  src: string;
}

const MybooksChild: FC<data> = (data) => {
  return (
    <li className="flex mr-8 h-[150px]">
      <img className="w-28 rounded" alt="" src={data.src}></img>
      <div className="ml-3 flex flex-col">
        <h2
          className="font-semibold
"
        >
          {data.title}
        </h2>
        <span className="text-[#D9D9D9]">{data.description}</span>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
          <div className="bg-[#000000] h-1.5 w-5 rounded-full"></div>
        </div>
        <div className="w-16 h-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-16 h-16 text-[#F8CD38]"
          >
            <path
              className=""
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </li>
  );
};

export default MybooksChild;
