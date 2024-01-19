import chatting from "../../assets/chatting.png";

const Chatting = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <img className="mb-[6px]" src={chatting} alt="" />
        <p className="text-[34px] font-bold text-primary mb-[25px]">
          What is your Goal?
        </p>
      </div>
      <input type="text" placeholder="" />
    </div>
  );
};

export default Chatting;
