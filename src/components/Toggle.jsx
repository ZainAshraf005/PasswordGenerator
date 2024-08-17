const Toggle = (props) => {
  const { value, setcase, boolean } = props;
  return (
    <>
      <label className="cursor-pointer">
        <div className=" flex justify-between items-center bg-secondary capitalize mx-2 rounded-lg p-3">
          <p>include {value}</p>
          <div>
            <input
              type="checkbox"
              value=""
              className="sr-only peer outline-none"
              checked={boolean}
              onChange={() => setcase(!boolean)}
            />
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
          </div>
        </div>
      </label>
    </>
  );
};

export default Toggle;
