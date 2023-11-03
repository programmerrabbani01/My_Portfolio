// icons

import Image from "next/image.js";
import Link from "next/link.js";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <>
      <div className="mx-auto xl:mx-0">
        <Link
          href={"/work"}
          className="relative w-[165px] h-[165px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group "
        >
          <Image
            src={"/rounded-text.png"}
            width={131}
            height={138}
            alt=""
            className="animate-spin-slow w-full h-full max-w-[131px] max-h-[138px]"
          />
          <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300 " />
        </Link>
      </div>
    </>
  );
};

export default ProjectsBtn;
