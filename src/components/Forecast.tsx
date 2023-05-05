import {
  getHumidityValue,
  getPop,
  getSunTime,
  getVisibilityValue,
  getWindDirection,
} from '../helpers'
import { forecastType } from '../types'
import Degree from './Degree'
import Sunrise from './Icons/Sunrise'
import Sunset from './Icons/Sunset'
import Tile from './Tile'

type Props = {
  data: forecastType
}

const Forecast = ({ data }: Props): JSX.Element => {
  const today = data.list[0]

  return (
    <div className="w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24 h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg">
      <div className="mx-auto w-[300px]">
        <section className="text-center">
          <div className="flex items-center justify-center">
            <h2 className="text-2xl font-black">
              {data.name}, <span className="font-thin"> {data.state} </span>
            </h2>
            <img src={`https://flagsapi.com/${data.country}/flat/16.png`} />
          </div>
          <h1 className="text-4xl font-extrabold">
            <Degree temp={Math.round(today.main.temp)} />
          </h1>

          <p className="text-sm">
            Max: <Degree temp={Math.ceil(today.main.temp_max)} /> min:{' '}
            <Degree temp={Math.floor(today.main.temp_min)} />
          </p>
        </section>
        <section className="flex overflow-x-scroll mt-4 pb-2 mb-5">
          {data.list.map((item, i) => (
            <div
              className="inline-block text-center w-[50px] flex-shrink-0"
              key={i}
            >
              <p>
                {i === 0 ? 'Présent' : new Date(item.dt * 1000).getHours()}
                {i === 0 ? '' : 'h'}
              </p>
              <img
                alt={`weather-icon-${item.weather[0].description}`}
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              />
              <p className="text-sm font-bold">
                <Degree temp={Math.round(item.main.temp)} />
              </p>
            </div>
          ))}
        </section>
        <p className='flex justify-center'>Aujourd'hui :</p>
        <section className="flex flex-wrap justify-between text-zinc-700">
          <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5">
            <Sunrise />
            <span className="mt-2">{getSunTime(data.sunrise)}</span>
          </div>
          <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5">
            <Sunset />
            <span className="mt-2">{getSunTime(data.sunset)}</span>
          </div>
          {/* Wind */}
          <Tile
            icon="wind"
            title="Vent"
            info={`${Math.round(today.wind.speed)} km/h`}
            description={`${getWindDirection(
              Math.round(today.wind.deg)
            )}, rafales à ${today.wind.gust.toFixed()} km/h`}
          />
          {/* Feels like */}
          <Tile
            icon="feels"
            title="Ressenti"
            info={<Degree temp={Math.round(today.main.feels_like)} />}
            description={`Ressenti ${
              Math.round(today.main.feels_like) < Math.round(today.main.temp)
                ? 'plutôt frais'
                : 'plutôt chaud'
            }`}
          />
          {/* Humidity */}
          <Tile
            icon="humidity"
            title="Humidité"
            info={`${today.main.humidity} %`}
            description={getHumidityValue(today.main.humidity)}
          />
          {/* Pop */}
          <Tile
            icon="pop"
            title="Précipitation"
            info={`${Math.round(today.pop * 100)} %`}
            description={`${getPop(today.pop)}, ${today.clouds.all}% de nuage${
              today.clouds.all > 0 ? 's' : ''
            }`}
          />
          {/* Pressure */}
          <Tile
            icon="pressure"
            title="Pression"
            info={`${today.main.pressure} hPa`}
            description={`${
              Math.round(today.main.pressure) < 1013
                ? 'plus faible'
                : 'Plus élevée '
            } que la moyenne`}
          />
          {/* Visibility */}
          <Tile
            icon="visibility"
            title="Visibilité"
            info={`${(today.visibility / 1000).toFixed()} km`}
            description={getVisibilityValue(today.visibility)}
          />
        </section>
      </div>
    </div>
  )
}

export default Forecast
