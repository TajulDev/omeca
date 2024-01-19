import goal from "../assets/goal.png";
import data from "../assets/data.png";
import plan from "../assets/plan.png";
import sound from "../assets/sound.png";
import deploy from "../assets/deploy.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const navLinks = [
    {
      pic: goal,
      title: "Goal",
      path: "/dashboard/goal",
    },
    {
      pic: data,
      title: "Data Sources",
      path: "/dashboard/data",
    },
    {
      pic: plan,
      title: "Plan",
      path: "/dashboard/plan",
    },
    {
      pic: sound,
      title: "Assigned project lead",
      path: "/dashboard/project-lead",
    },
    {
      pic: deploy,
      title: "Deploy",
      path: "/dashboard/deploy",
    },
  ];
  return (
    <div className="text-sm w-[221px] bg-white pt-[33px]">
      <p className="p-[6px] mb-4 text-[#0D0D0E] font-bold">Home</p>
      {navLinks.map((item, index) => (
        <Link
          className="flex items-center gap-[10px] p-[6px] text-secondary"
          key={index}
          to={item.path}
        >
          <img src={item.pic} alt="" /> {item.title}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
