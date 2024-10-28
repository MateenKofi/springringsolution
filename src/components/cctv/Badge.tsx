import React from 'react'
import { CCTV_DATA } from '../../assets/data/data';

type CardType = {
    id: number;
    image: string;
    title: string;
    description: string;
  };

const Badge:React.FC = () => {
  return (
    <section className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 sm:grid-cols-1 w-full gap-10 p-5 mx-auto my-12">
    {CCTV_DATA.map((card: CardType) => (
      <div
        key={card.id}
        className="bg-white  h-auto py-4 px-5 rounded-3xl shadow-lg border-2 flex flex-col items-center justify-center gap-2">
        <img
          src={card.image}
          alt={card.title}
          className="w-24 h-24 object-cover"
        />
        <h2 className="text-2xl uppercase font-bold">{card.title}</h2>
        <p className="text-center  text-[#676767 text-lg]">
          {card.description}
        </p>
        <button className="bg-orange-600 text-white px-5 py-2 rounded-lg mt-5">
          Know More
        </button>
      </div>
    ))}
  </section>
  )
}

export default Badge