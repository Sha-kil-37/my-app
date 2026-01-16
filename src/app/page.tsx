import React from "react";
import Image from "next/image";
import blog from "@/assets/blog.jpg";
import Link from "next/link";
import Counter from "@/components/counter";
type Props = {};

const page = (props: Props) => {
  //

  //
  return (
    <section className="xl:py-10">
      <div className="xl:mx-auto xl:w-7xl xl:flex xl:gap-x-12">
        <div className="overflow-hidden relative xl:h-100 xl:w-600">
          <Image className="h-full" src={blog} alt="blog" />
        </div>
        <div>
          <h1 className="xl:text-4xl font-bold">
            Enjoy Our Latest Blogs, Join Our Community, and Make Your Own Blogs
            For Share Community
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            sunt aspernatur quasi quos, recusandae necessitatibus excepturi,
            provident totam eveniet ipsa aperiam molestiae quidem! Id sint quasi
            ipsa, officiis repellat eum delectus aspernatur tenetur molestias
            dolores cupiditate consectetur corporis totam iure.
          </p>
          <Link
            className="xl:block bg-[#F2F2F2] xl:rounded-2xl xl:w-[100px] py-1 xl:font-semibold xl:mt-5 xl:mx-auto xl:text-center"
            href={"/blogs"}
          >
            All Blogs
          </Link>
        </div>
      </div>
      <Counter />
    </section>
  );
};

export default page;
