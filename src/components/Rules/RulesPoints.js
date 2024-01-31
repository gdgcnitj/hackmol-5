import Image from "next/image";

function RulesPoint({ Desc, color, alignment, icon }) {

  let card_style = `bg-white w-full h-full p-2 border-5 flex justify-center font-bold text-center`

  return (
    <div className={`flex  items-center relative`}>
      <div
        className={`block z-30 ${alignment === 'left' ? '-left-20' : '-right-20'} absolute`}
        >
        <Image src={icon} alt="img" className={`w-full h-full opacity-80`} width={0} height={0} />
      </div>
      <div
        className={card_style}
        style={{
          borderColor: color,
          borderWidth: "0.25rem",
          borderStyle: "solid",
        }}
      >
        <div className={`font-medium text-[9px] md:text-xl p-5 z-11 font-Space-Grotesk`}>
          {Desc} 
        </div>
      </div>
    </div>
  );
}

export default RulesPoint;
