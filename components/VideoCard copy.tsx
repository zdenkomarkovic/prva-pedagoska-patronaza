// "use client";
// import React from "react";
// import { useEffect } from "react";

// const VideoCard = () => {
//   useEffect(() => {
//     // Učitavamo YouTube IFrame API
//     const script = document.createElement("script");
//     script.src = "https://www.youtube.com/iframe_api";
//     document.body.appendChild(script);

//     // Inicijalizujemo video kada je API spreman
//     window.onYouTubeIframeAPIReady = () => {
//       window.player = new window.YT.Player("youtube-video", {
//         events: {
//           onReady: onPlayerReady,
//           onStateChange: onPlayerStateChange,
//         },
//       });
//     };

//     // Funkcija koja se poziva kada je video spreman
//     const onPlayerReady = () => {
//       window.player.playVideo(); // Pokreće video
//     };

//     // Funkcija koja prati stanje videa i pauzira na 16. minuti
//     const onPlayerStateChange = (event) => {
//       if (event.data === window.YT.PlayerState.PLAYING) {
//         const interval = setInterval(() => {
//           const currentTime = window.player.getCurrentTime(); // Trenutno vreme videa u sekundama
//           if (currentTime >= 960) {
//             // 16 minuta = 960 sekundi
//             window.player.pauseVideo(); // Pauzira video na 16. minuti
//             clearInterval(interval); // Zaustavlja interval kada video bude pauziran
//           }
//         }, 1000); // Proučava svaku sekundu
//       }
//     };

//     // Čistimo API skriptu prilikom unmount-a komponente
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="py-7 space-y-7 container px-2 md:px-4 mx-auto">
//       <h3 className="font-normal">
//         Gostovanje na podkastu{" "}
//         <span className="font-bold">Da ne obrukamo pretke</span>
//       </h3>
//       {/* <div className=" aspect-w-16 aspect-h-9 mx-auto"> */}
//       <iframe
//         id="youtube-video"
//         width="1120"
//         height="630"
//         src="https://www.youtube.com/embed/mcWRNzKsY2Y?enablejsapi=1&start=720" // Početak od 12 minuta (720 sekundi)
//         title="YouTube video"
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//       ></iframe>
//       {/* </div> */}
//     </div>
//   );
// };

// export default VideoCard;
