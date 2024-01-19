/* eslint-disable react/prop-types */
import plus from "../assets/plus-btn.png";
import undo from "../assets/undo.png";

const DomainLayout = ({ title, label, placeholder, step, setStep, type }) => {
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  return (
    <div className="h-[572px] ">
      <div className="flex flex-col justify-between h-full">
        <div>
          <p className="text-[34px] font-bold text-primary mb-[25px]">
            {title}
          </p>
          <div className="max-w-[441px] w-full">
            <div>
              <label className="text-[18px] font-medium mb-[15px] block">
                {label}
              </label>
              <input
                className="bg-[#EFF3F7] rounded-[10px] py-[15px] px-5 w-full"
                type={type}
                placeholder={placeholder}
              />
            </div>
            <div className="my-[18px]">
              <button>
                <img src={plus} alt="" />
              </button>
            </div>
            {step === 1 && (
              <button className="text-royalBlue font-medium border border-royalBlue rounded-[40px] shadow-prompts p-[17px] w-[206px]">
                Upload CSV
              </button>
            )}
          </div>
        </div>

        <div>
          <div className="flex flex-wrap justify-between gap-4 items-center mb-[26px]">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-secondary font-normal"
            >
              <img src={undo} alt="" />
              Back
            </button>
            <button
              onClick={handleNext}
              className="bg-royalBlue text-white font-medium p-[17px] w-[170px] rounded-[60px]"
            >
              Next
            </button>
          </div>
          {step === 1 ? (
            <div>
              <div className="border-b border-royalBlue border-[3px] w-[33.33%]"></div>
              <div className="border-b border-blue-400"></div>
            </div>
          ) : step === 2 ? (
            <div className="flex">
              <div className="border-b border-royalBlue border-[3px] w-full"></div>
              <div className="border-b border-[#EFF3F7] border-[3px] w-full"></div>
              <div className="border-b border-blue-400 w-full"></div>
            </div>
          ) : (
            <div className="flex">
              <div className="border-b border-royalBlue border-[3px] w-[66.66%]"></div>
              <div className="border-b border-blue-400 w-[33.33%]"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DomainLayout;
