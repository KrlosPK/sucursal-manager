import { JumboTron } from '@/molecules/JumboTron'
const About = () => {
  return (
    <section>
      <div className="flex flex-col items-end">
        <JumboTron
          title="About us"
          paragraph="Dedicated to surpassing expectations, we take pride in delivering exceptional solutions. Explore our history of creating memorable experiences and outstanding results."
        />
      </div>

      <div className="flex justify-center mt-10">
        <img
          alt="About us"
          className="w-72 rounded-lg"
          height={288}
          src="/about-us.gif"
          width={288}
        />
      </div>
    </section>
  )
}

export { About }
