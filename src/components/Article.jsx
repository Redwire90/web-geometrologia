export const Article = ({title, text, icon}) => {
  return (
    <article className="">
      <div className="justify-center">{icon}</div>
      <h2 className="pb-4 font-bold text-center text-[24px]">{title}</h2>
      <p className="text-justify pb-16">{text}</p>
    </article>
  )
}
