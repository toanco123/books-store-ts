import { FC } from "react";

interface data {
  id: number;
  title: string;
  coust: string;
  description: string;
  src: string;
}

const MostpopularChild: FC<data> = (data) => {
  return (
    <li className="flex">
      <div className="flex mb-3 mr-3">
        <div className="flex">
          <img
            className="w-[70px] h-[115px] rounded-lg"
            alt=""
            src={data.src}
          ></img>
          <div className="flex flex-col ml-3 w-[220px]">
            <h2 className="font-semibold">{data.title}</h2>
            <h3>{data.description}</h3>
            <div className="star flex items-center pt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-[#FFFF00]"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              <span>4.9</span>
            </div>
          </div>
        </div>
        <div className="flex items-end md:ml-[-45px]">
          <button
            className={` font-bold px-[15px] py-2 rounded-full border-black border ${
              data.id % 2 === 0 ? "bg-white" : "bg-black text-white"
            }`}
          >
            {data.coust}
          </button>
        </div>
      </div>
    </li>
  );
};

export default MostpopularChild;
