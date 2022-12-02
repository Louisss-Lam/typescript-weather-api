const App = () => {
  return (
    <main className="bg-[url('https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000')]
     h-[100vh] w-full flex justify-center items-center">
      <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center
        justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-lg
        rounded drop-shadow-lg text-zinc-700
      ">
        <h1>Weather Forecast</h1>
        <p>Enter below a place you want to know the weather of and select an option from the dropdown</p>
      </section>
    </main>
  )
}

export default App
