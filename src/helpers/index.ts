export const getWindDirection = (deg: number): string => {
  if (deg > 15 && deg <= 75) return 'En provenance du Nord-Est'

  if (deg > 76 && deg <= 105) return "En provenance d'Est"
  if (deg > 105 && deg <= 165) return 'En provenance du Sud-Est'

  if (deg > 166 && deg <= 195) return 'En provenance du Sud'
  if (deg > 195 && deg <= 255) return 'En provenance du Sud-Ouest'

  if (deg > 255 && deg <= 285) return "En provenance d'Ouest"
  if (deg > 285 && deg <= 345) return 'En provenance du Nord-Ouest'

  return 'En provenance du Nord'
}

export const getHumidityValue = (level: number): string => {
  if (level <= 55) return 'Sec et agréable'
  if (level > 55 && level <= 65) return 'Humide et pas très agréable'

  return "Beaucoup d'humidité, air inconfortable"
}

export const getVisibilityValue = (number: number): string => {
  if (number <= 50) return 'Visibilité dangereuse !'
  if (number > 50 && number <= 500) return 'Epais brouillard'
  if (number > 500 && number <= 2000) return 'Un peu de brouillard'
  if (number > 2000 && number <= 9000) return 'Un peu de brume'

  return 'Ciel dégagé !'
}

export const getSunTime = (timestamp: number): string => {
  const date = new Date(timestamp * 1000)
  let hours = date.getHours().toString()
  let minutes = date.getMinutes().toString()

  if (hours.length <= 1) hours = `0${hours}`
  if (minutes.length <= 1) minutes = `0${minutes}`

  return `${hours}:${minutes}`
}

export const getPop = (value: number): string => {
  if (value <= 0.33) return 'Faible probabilité'
  if (value > 0.33 && value <= 0.66) return 'Probabilité modérée'

  return 'Forte probabilité'
}
