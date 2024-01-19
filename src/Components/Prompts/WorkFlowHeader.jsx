import plus_button from '../../assets/plus-btn.png';

const WorkFlowHeader = () => {
    return (
        <div>

            <div className='text-center'>
                <h1 className=" text-[34px] text-[#0D0D0E]  font-bold "> Data Work Flow Map  </h1>
                <button className='mb-[7px]'><img src={plus_button} alt="" /></button>
            </div>

        </div>
    )
}

export default WorkFlowHeader