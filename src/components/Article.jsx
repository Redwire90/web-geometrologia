export const Article = ({ title, text, icon }) => {
  return (
    <article className="">
      <div className="flex place-content-center">
        <div className=" text-blue-500 text-[60px] pb-4">{icon}</div>
      </div>
      <h2 className="pb-4 font-bold text-center text-[24px] text-black">{title}</h2>
      <p className="text-justify pb-16">{text}</p>
    </article>
  );
};
