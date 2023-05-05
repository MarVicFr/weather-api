import Forecast from './components/Forecast'
import FrenchMap from './components/FrenchMap'
import Search from './components/Search'
import useForecast from './components/hooks/useForcast'

const App = (): JSX.Element => {

  const onLoad = () => {
    console.log(("Je charge"));
    
  }

  const {term, options, forecast, onInputChange, onOptionSelect, onSubmit} = useForecast()
  return (
    <main className="flex flex-col justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full" onLoad={onLoad}>
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
        <FrenchMap />
    </main>
  )
}

export default App
