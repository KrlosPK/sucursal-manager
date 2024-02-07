const Card = ({ seed = 'random' }: { seed: string }) => {
  return (
    <>
      <div className="max-w-56 m-auto md:m-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          alt="placeholder image"
          className="rounded-t-lg"
          height={320}
          src={`https://picsum.photos/seed/${seed}/320`}
          width={320}
        />

        <div className="p-5">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero sed
            dolorem quia vero.
          </p>
        </div>
      </div>
    </>
  )
}

export { Card }
