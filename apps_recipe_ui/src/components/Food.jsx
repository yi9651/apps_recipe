export default function Food({ food }) {
  return (
    <div className="m-2 relative flex flex-col my-6 bg-stone-100 shadow-sm border border-slate-200 rounded-lg w-96">
      <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
        <img src={food.image_url} alt="card-image" />
      </div>
      <div className="p-4">
        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
          {food.food_name}
        </h6>
        <p className="text-slate-600 leading-normal font-light">
          {food.food_description}
        </p>
      </div>
      <div className="flex justify-between m-5">
        <button
          className="rounded-md bg-slate-800 py-2 px-2.5 border border-transparent text-center text-xs text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Explore more
        </button>
        <div className="flex gap-2">
          <div className="flex items-center rounded-md bg-yellow-100 px-3 py-1.5 text-xs text-yellow-800 transition-all shadow-sm hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            <svg
              className="w-4 h-4 me-1.5 fill-current text-yellow-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <span className="text-xs font-semibold">{food.popularity}</span>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-2 rounded-sm dark:bg-blue-900 dark:text-blue-300">
            $ {food.price}
          </span>
        </div>
      </div>
    </div>
  );
}
