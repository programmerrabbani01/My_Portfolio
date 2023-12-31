import Image from "next/image.js";
import Link from "next/link.js";
import Socials from "./Socials.jsx";

export default function Header() {
  return (
    <>
      <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] ">
        <div className="container mx-auto">
          <div className=" flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8 ">
            {/* logo */}
            <Link href={"/"}>
              <Image
                src={"/logo.svg"}
                width={220}
                height={48}
                alt=""
                priority={true}
                className="-mb-5 lg:mb-0 "
              />
            </Link>
            {/* socials */}
            <Socials />
          </div>
        </div>
      </header>
    </>
  );
}
