import Link from "next/link";
import Image from "next/image";
type Props = {};
import profile from "@/assets/profile.png";
const Nav = (props: Props) => {
  //
  return (
    <div className="bg-[#000000] py-3">
      <div className="xl:mx-auto xl:w-7xl xl:flex xl:justify-between xl:items-center">
        <ul className="xl:flex xl:gap-x-6 xl:justify-center xl:w-full">
          <li>
            <Link href={"/"} className="text-white xl:font-bold">Home</Link>
          </li>
          <li>
            <Link href={"/about"} className="text-white xl:font-bold">About</Link>
          </li>
          <li>
            <Link href={"/blogs"} className="text-white xl:font-bold">Blogs</Link>
          </li>
        </ul>
        <Link
          href={"/profile"}
          className="xl:block xl:rounded-full xl:h-13 xl:w-13 xl:border-[#0046FF] xl:border overflow-hidden"
        >
          <Image
            className="object-cover h-full w-full"
            src={profile}
            alt="profile"
          />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
