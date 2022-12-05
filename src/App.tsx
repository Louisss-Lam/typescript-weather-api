import Search from "./components/Search";
import useForecast from "./hooks/useForecast";
import Forecast from "./components/Forecast";

const App = (): JSX.Element => {

  const {
    term, 
    options, 
    forecast,
    onInputChange,
    onOptionSelect,
    onSubmit,
  } = useForecast();
  return (
    <main className="bg-[url('https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000')]
     h-[100vh] w-full flex justify-center items-center">
      {forecast ? (
        <Forecast data={forecast} />
      ) : (
        <Search 
        term={term} 
        options={options} 
        onInputChange={onInputChange} 
        onOptionSelect={onOptionSelect}
        onSubmit={onSubmit}
      />
      )}
    </main>
  )
}

export default App
