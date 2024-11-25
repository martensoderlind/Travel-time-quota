export default function TravelForm() {
  return (
    <form
      autoComplete="off"
      className=" container mx-auto flex flex-col items-center m-4 p-4 bg-slate-100 rounded-md w-full md:w-8/12 shadow-lg"
    >
      <h1 className=" text-3xl text-center text-gray-900">Sök din resa</h1>
      <section className="flex flex-row">
        <div className="flex flex-col p-2">
          <label htmlFor="" className="text-gray-700">
            Från:
          </label>
          <input
            type="text"
            name="from"
            id="from"
            className="input input-bordered w-full max-w-xs bg-gray-300 text-black"
          />
        </div>
        <div className="flex flex-col p-2">
          <label htmlFor="to" className="text-gray-700">
            Till:
          </label>
          <input
            type="text"
            name="to"
            id="to"
            className="input input-bordered w-full max-w-xs bg-gray-300 text-black"
          />
        </div>
      </section>

      <button className="btn my-2" type="submit">
        Sök
      </button>
    </form>
  );
}
