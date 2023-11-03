import Image from "next/image.js";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none ">
      <Image
        src={"/my-avatar.png"}
        width={537}
        height={478}
        alt=""
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
