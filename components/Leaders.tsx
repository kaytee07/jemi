 "use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import { testimonials } from "@/data";

const Leaders = () => {
  return (
  <div className="px-10 py-5 h-[60vh]">
    <h2 className="heading text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Leaders
    </h2>
    <div className="rounded-md flex mt-10 flex-col text-black antialiased bg-white
     dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  </div>
  )
}

export default Leaders