import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import Grid from '../../components/Grid'
import View from '../../components/View'

const CharactersPage = () => {
  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => setCharacters(data.results))
  }, [])

  return (
    <View>
      <Grid>
        {characters.map((character) => (
          <Card
            key={character.id}
            title={character.name}
            subtitle={character.species}
            image={character.image}
          />
        ))}
      </Grid>
    </View>
  )
}

export default CharactersPage
