/* eslint-disable react/no-unescaped-entities */
import selectedAi from '../../assets/selectedAi.png';
import blueBar from '../../assets/blue-bar.png';
const AiWorkingData = () => {
    return (
        <div>
            <div className='mb-[24px]'>
                <div className=' flex justify-center flex-col items-center m-auto'>
                    <div className='text-center'>
                        <img src={selectedAi} alt="" />
                    </div>
                    <div className='text-center mt-[13px] text-sm font-normal text-[#202027] leading-[-0.42px] w-[526px] '>
                        <p >"At Buraqlab, we're not just a pet care agency; we're devoted designers of well-being for your furry family members. Our commitment to thoughtful, holistic design ensures that every aspect of our services is crafted to create a nurturing and joyful environment for  your pets. Choose Buraqlab for a unique blend of care and design expertise that  elevates your pets' experience to a new level of comfort and happiness."</p>
                    </div>
                </div>
            </div>

            <div className='mb-[24px]'>
                <div className=' flex justify-center flex-col items-center m-auto'>
                    <div className='text-center'>
                        <img className='mb-[24px]' src={blueBar} alt="" />
                    </div>
                    <div>
                        <textarea className='p-[20px] bg-[#EEE] border border-[#999EAB] w-[556px] h-[144px] rounded-[10px]' type="text" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AiWorkingData;