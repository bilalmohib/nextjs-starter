import React from "react";

interface FrameWorkCardProps {
  Icon: any;
  title: string;
  slug: string;
}

// width: 346px;
// height: 256px;
// border-radius: 6px;
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
// display: flex;
// align-items: center;
// flex-direction: column;
// padding-top: 28px;
// padding-bottom: 28px;
// color: #393939;
// text-decoration: none;
// background-color: #ffffff;
// transition: ease-in-out background-color 0.15s;

const FrameWorkCard = ({ Icon, title, slug }: FrameWorkCardProps) => {
  return (
    <a
      className="w-[346px] h-[256px] cursor-pointer rounded-[6px] shadow-md flex items-center flex-col pt-28 pb-28 no-underline bg-white transition duration-150 ease-in-out hover:bg-[#f1f9ff]"
      href={`/project/${slug}`}
    >
      <Icon w={153} h={163} />
      <h3 className="mt-10 text-lg uppercase tracking-widest">{title}</h3>
    </a>
  );
};
export default FrameWorkCard;
