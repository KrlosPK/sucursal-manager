import Link from 'next/link'
import { JumboTron } from '@/molecules/JumboTron'

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between gap-4">
      <div className="flex flex-col max-h-64">
        <JumboTron
          title="Sucursal Manager"
          paragraph="This is a demo application for managing branches in a company."
        />

        <Link
          href={'/login'}
          title="Login"
          className="mt-auto w-fit inline-flex justify-center items-center py-2 px-4 font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 text-sm group"
        >
          LOGIN
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180 transform transition-transform ease-in-out group-hover:animate-bounce-right"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>

      <img
        width={420}
        height={205}
        src="/banner-principal.png"
        alt="Banner principal de SucursalManager"
      />
    </section>
  )
}

export { Hero }
