"use client";
import { motion } from "framer-motion";

import Corners from "../icons/Corners.astro";
import EyeIcon from "../icons/Eye.astro";
import MapIcon from "../icons/Map.astro";

export default function Tags({}) {
  return (
    <>
      <div className="absolute bg-off-white text-base p-4 rounded-br-xl w-[22ch] top-0 left-0">
        <p>Fermentum torquent nullam eleifend euismod accumsan.</p>
      </div>
      <div className="absolute left-0 bottom-0 bg-off-white rounded-tr-xl p-3">
        <EyeIcon />
      </div>
      <div className="absolute right-0 bottom-0 bg-off-white py-[10px] px-3 subpixel-antialiased flex gap-3 rounded-tl-xl">
        <MapIcon />
        <p>Boston, MA</p>
      </div>
    </>
  );
}
