import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
          <Link key={character.id} to={`/characters/${character.id}`}>
            <Card
              title={character.name}
              subtitle={character.species}
              image={character.image}
            />
          </Link>
        ))}
      </Grid>
    </View>
  )
}

export default CharactersPage
