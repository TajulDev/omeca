import goal from "../assets/goal.png";
import data from "../assets/data.png";
import plan from "../assets/plan.png";
import sound from "../assets/sound.png";
import deploy from "../assets/deploy.png";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const navLinks = [
    {
      pic: goal,
      title: "Goal",
      path: "/prompts/goal",
    },
    {
      pic: data,
      title: "Data Sources",
      path: "/prompts/data-source",
    },
    {
      pic: plan,
      title: "Plan",
      path: "/prompts/plan",
    },
    {
      pic: sound,
      title: "Assigned project lead",
      path: "/prompts/project-lead",
    },
    {
      pic: deploy,
      title: "Deploy",
      path: "/prompts/deploy",
    },
  ];
  return (
    <div className="flex-shrink-0 text-sm w-[221px] bg-white pt-[33px] fixed left-0  h-[100vh] px-5 ">
      <p className="p-[6px] mb-4 text-[#0D0D0E] font-bold">Home</p>
      <div className="flex flex-col gap-[10px]">
        {navLinks.map((item, index) => (
          <Link
            className={`${
              location.pathname === item.path && "bg-[#EFF3F7]"
            } flex items-center gap-[10px] p-[6px] text-secondary hover:bg-[#EFF3F7] rounded-[4px]`}
            key={index}
            to={item.path}
          >
            <img src={item.pic} alt="" /> {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
