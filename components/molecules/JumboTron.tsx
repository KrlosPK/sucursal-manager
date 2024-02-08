const JumboTron = ({
  title,
  paragraph
}: {
  title: string
  paragraph: string
}) => {
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {title}
      </h1>

      <p className="mb-4 max-w-lg text-pretty">{paragraph}</p>
    </>
  )
}

export { JumboTron }
