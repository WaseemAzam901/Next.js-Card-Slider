"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <main className="text-white w-3/4 m-auto">
      <div className="mt-20">
      <Slider {...settings}>
        {data.map((d) => (
          <div className="bg-white h-[450px] text-black rounded-xl">
            <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
              <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 p-4">
              <p className="text-2xl font-bold">{d.name}</p>
              <p>{d.review}</p>
              <button className="bg-indigo-500 px-6 py-1 rounded-xl text-lg text-white">Read More</button>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </main>
  );
}

const data = [
  {
    name: `John Morgan`,
    img: `/pic/1.jpg`,
    review: `when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`,
  },
  {
    name: `Vijay`,
    img: `/pic/1.jpg`,
    review: `when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`,
  },
  {
    name: `Aditya`,
    img: `/pic/1.jpg`,
    review: `when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`,
  },
];
