import { PAGE_ICONS } from "@/constants/pages";
import React from "react";

type Props = {
  page: string;
  slug: string;
};

function MainBreadCrumbs({ page, slug }: Props) {
  const displaySlug = (() => {
    try {
      return decodeURIComponent(slug);
    } catch {
      return slug;
    }
  })();

  return (
    <div className="flex flex-col items-start w-full">
      {page === "Home" && (
        <div className="flex justify-center w-full mb-4 lg:mb-6">
          <div className="radial--gradient w-full max-w-105 py-5 lg:py-10 flex flex-col items-center justify-center text-center rounded-3xl">
            <p className="text-white/65 text-lg leading-none">Welcome back</p>
            <h2 className="mt-2 capitalize text-4xl font-medium text-white">
              {displaySlug}!
            </h2>
          </div>
        </div>
      )}
      <span className="radial--gradient inline-flex py-5 lg:py-10 pr-16 gap-x-2 items-center text-white">
        {PAGE_ICONS[page.toUpperCase()]}
        <h2 className="font-semibold text-3xl capitalize">{page}</h2>
      </span>
    </div>
  );
}

export default MainBreadCrumbs;