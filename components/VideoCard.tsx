"use client";
import React from "react";

const VideoCard = () => {
  return (
    <div className="py-7 space-y-7 md:space-y-12 container px-2 md:px-4 mx-auto">
      <h3 className="font-normal">
        Gostovanje na podkastu{" "}
        <span className="font-bold block md:inline">Da ne obrukamo pretke</span>
      </h3>

      <iframe
        id="youtube-video"
        width="420"
        height="240"
        src="https://www.youtube.com/embed/mcWRNzKsY2Y?enablejsapi=1" // Početak od 12 minuta (720 sekundi)
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="mx-auto aspect-w-16 aspect-h-9 w-full md:w-[1120px] md:h-[630px]"
      ></iframe>
    </div>
  );
};

export default VideoCard;
