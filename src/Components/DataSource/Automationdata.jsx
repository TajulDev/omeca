import ai from "../../assets/ai.png";
import bot from "../../assets/bot.png";
import human from "../../assets/human.png";
import api from "../../assets/api.png";

const Automationdata = () => {
  const details = [
    {
      pic: ai,
      title: "Ai",
      amount: 25,
    },
    {
      pic: bot,
      title: "Bot",
      amount: 25,
    },
    {
      pic: human,
      title: "Human",
      amount: 40,
    },
    {
      pic: api,
      title: "API",
      amount: 20,
    },
  ];
  return (
    <div>
      <p className="text-[34px] font-bold text-primary mb-[25px]">
        Automation Data
      </p>
      <p className="text-[18px] font-medium text-[#202027] mb-[29px]">
        Assign a percentage to each one of these for data automation?
      </p>
      <div className="grid grid-cols-3 gap-[14px]">
        {details.map((data, index) => (
          <div
            className="shadow-md rounded-[10px] p-5 flex flex-col justify-center items-center w-full"
            key={index}
          >
            <img src={data.pic} alt="" />
            <p>
              <span className="text-royalBlue">{data.amount}</span> {data.title}{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Automationdata;
