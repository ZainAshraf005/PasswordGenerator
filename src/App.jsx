import { useState } from "react";
import { MdContentCopy, MdOutlineSettings, MdOutlinePassword } from "react-icons/md";
import Toggle from "./components/Toggle";

const App = () => {
  const [range, setRange] = useState(9);
  const [password, setPassword] = useState("");
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(false);
  const [numeric, setNumeric] = useState(true);
  const [symbol, setSymbol] = useState(false);
  const [notify, setNotify] = useState(false)

  const handleSubmit = () => {
    if (!(lowercase || uppercase || numeric || symbol)) {
      alert("please select at least one!");
    } else {
      passwordGenerator();
    }
  };

  const copyPassword = ()=>{
    setNotify(true)
    window.navigator.clipboard.writeText(password)
    setTimeout(() => {
      setNotify(false)
    }, 1500);
  }

  const passwordGenerator = () => {
    let pass = "";
    let str = "";

    if (lowercase) str += "abcdefghijklmnopqrstuvwxyz";
    if (uppercase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numeric) str += "0123456789";
    if (symbol) str += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

    for (let i = 1; i <= range; i++) {
      let char = Number(Math.floor(Math.random() * str.length + 1));

      pass += str.charAt(char);
    }

    setPassword(pass);
  };

  return (
    <>
      <main className="w-full text-zinc-400 h-screen bg-gradient-to-tr from-pink-500 to-purple-900 flex justify-center items-center">
        <div className="w-full h-screen overflow-hidden relative sm:w-[55%] lg:w-[40%] sm:rounded-2xl bg-primary flex flex-col justify-center gap-4 sm:h-[90%] px-3 py-4">
          <div className=" text-center">password generator</div>
          <div className=" flex flex-col justify-center cursor-pointer">
            <div className={`absolute left-[50%]  -translate-x-[50%] ${notify?"top-1":"-top-8 hidden"} px-2 py-1 transition-all rounded-xl bg-zinc-400 text-zinc-800`}>copied to clipboard</div>
            <p className="ml-2 text-zinc-600 flex items-center gap-1">RESULT <MdOutlinePassword />
            </p>
            <div className=" flex px-3 justify-between rounded-lg mx-2 m-auto bg-secondary gap-3 ">
            
            <input
              type="text"
              readOnly
              value={password}
              placeholder="Hit Generate Button"
              className=" bg-secondary outline-none cursor-pointer w-full rounded-lg mx-2  py-4"
              />
              
              {password.length>0?<button onClick={copyPassword} className=" top-4 right-5"><MdContentCopy className="text-xl"/></button>:""}
              </div>
          </div>
          <div className="cursor-pointer">
            <p className="ml-2 text-zinc-600">LENGTH: {range}</p>
            <div className="bg-secondary flex gap-1 justify-center items-center rounded-lg px-3 py-4 mx-2">
              <p>4</p>

              <input
                id="default-range"
                type="range"
                value={range}
                min={4}
                max={32}
                onChange={(e) => setRange(e.target.value)}
                className="w-full h-2  rounded-lg appearance-none cursor-pointer bg-gray-700"
              />

              <p>32</p>
            </div>
          </div>
          <div className=" flex flex-col gap-3 py-3">
            <p className="ml-2 text-zinc-600 flex items-center gap-1">SETTINGS <MdOutlineSettings className="text-lg" />
            </p>
            <Toggle
              value={"lowercase"}
              setcase={setLowercase}
              boolean={lowercase}
            />
            <Toggle
              value={"uppercase"}
              setcase={setUppercase}
              boolean={uppercase}
            />
            <Toggle value={"numeric"} setcase={setNumeric} boolean={numeric} />
            <Toggle value={"symbol"} setcase={setSymbol} boolean={symbol} />
          </div>
          <button
            onClick={handleSubmit}
            className=" p-2 outline-none mx-2 text-zinc-300 rounded-lg bg-gradient-to-r to-pink-500 from-purple-900"
          >
            Generate Password
          </button>
        </div>
      </main>
    </>
  );
};

export default App;
