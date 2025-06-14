// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const partners = [
//   "assets/img/brand/airbnb.svg",
//   "assets/img/brand/paypal.svg",
//   "assets/img/brand/slack.svg",
//   "assets/img/brand/spotify.svg",
//   "assets/img/brand/amazon.svg",
//   "assets/img/brand/airbnb.svg",
// ];

// const LaboratoryPartners = () => {
//   return (
//     <section className="section pt-0">
//       <div className="container">
//         <div className="row justify-content-center section-heading">
//           <div className="col-lg-7 text-center">
//             <h2 className="h1 m-0">Our Laboratory Partner</h2>
//           </div>
//         </div>

//         <Swiper
//           spaceBetween={10}
//           loop={true}
//           breakpoints={{
//             600: { slidesPerView: 4 },
//             991: { slidesPerView: 6, spaceBetween: 15 },
//             1200: { slidesPerView: 7, spaceBetween: 30 },
//           }}
//           slidesPerView={2.5}
//         >
//           {partners.map((src, index) => (
//             <SwiperSlide key={index}>
//               <div className="mx-3">
//                 <img src={src} alt={`Partner ${index + 1}`} />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default LaboratoryPartners;
