import { useState, ChangeEvent } from "react";

const App = (): JSX.Element => {
  // https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
  const [term, setTerm] = useState<string>('');

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
    console.log(term);  
    
  };

  return (
    <main className="bg-[url('https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000')]
     h-[100vh] w-full flex justify-center items-center">
      <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center
        justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-lg
        rounded drop-shadow-lg text-zinc-700
      ">
        <h1 className="text-4xl font-thin">
          Weather <span className="font-black">Forecast</span>
        </h1>

        <p className="text-sm mt-2">
          Enter below a place you want to know the weather of and select an option from the dropdown
        </p>

        <div className="flex mt-10 md:mt-4">
          <input 
            type="text" 
            value={term} 
            className="px-2 py-1 rounded-l-md border-2 border-white"
            onChange={onInputChange}
          />

          <button className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500
            hover:text-zinc-500 text-zinc-100 px-2 py-1 cursor-pointer
          ">
            search
          </button>
        </div>
      </section>
    </main>
  )
}

export default App
