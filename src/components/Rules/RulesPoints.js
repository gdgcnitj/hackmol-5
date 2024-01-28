import Image from "next/image";

function RulesPoint({ Desc, color, alignment, icon }) {
  const getAlign = () => {
    return alignment === "left" ? "flex-row-reverse" : "";
  };

  let card_style = `bg-white w-full h-full p-2 border-5 flex justify-center font-bold text-center`

  return (
    <div className={`flex ${getAlign()} items-center`}>
      <div
        className={`hidden sm:block z-30`}
        style={{
          marginLeft: alignment === "left" ? "-3rem" : "0",
          marginRight: alignment === "right" ? "-3rem" : "0",
        }}
      >
        <Image src={icon} alt="img" className='w-full h-full' width={0} height={0} />
      </div>
      <div
        className={card_style}
        style={{
          borderColor: color,
          borderWidth: "0.25rem",
          borderStyle: "solid",
        }}
      >
        <div className={`font-medium text-xl px-10 font-Space-Grotesk`}>
          {Desc} 
        </div>
      </div>
    </div>
  );
}

export default RulesPoint;
