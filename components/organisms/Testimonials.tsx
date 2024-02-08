import { JumboTron } from '@/molecules/JumboTron'
const Testimonials = () => {
  return (
    <section>
      <div className="flex flex-col items-end">
        <JumboTron
          title="Testimonials"
          paragraph="Dedicated to surpassing expectations, we take pride in delivering exceptional solutions. Explore our history of creating memorable experiences and outstanding results."
        />
      </div>

      <div className="flex justify-center mt-10">
        <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="my-4">
                &quot;Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Odit, minima?.&quot;
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center ">
              <img
                className="rounded-full w-9 h-9"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Bonnie Green</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 ">
                  Developer at Open AI
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="my-4">
                &quot;Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid odio, quibusdam repellendus impedit numquam
                magnam.&quot;
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center ">
              <img
                className="rounded-full w-9 h-9"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Roberta Casas</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Lead designer at Dropbox
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Lorem, ipsum dolor.
              </h3>
              <p className="my-4">
                &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Saepe temporibus ad quia impedit ipsa!&quot;
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center ">
              <img
                className="rounded-full w-9 h-9"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Jese Leos</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Software Engineer at Facebook
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="my-4">
                &quot;Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Earum enim magnam nam?&quot;
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center ">
              <img
                className="rounded-full w-9 h-9"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Joseph McFall</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  CTO at Google
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

export { Testimonials }
