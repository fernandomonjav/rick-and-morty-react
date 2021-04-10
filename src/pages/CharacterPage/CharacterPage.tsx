import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Card from '../../components/Card'
import Grid from '../../components/Grid'
import Header from '../../components/Header'
import View from '../../components/View'

interface Params {
  id: string
}

const CharacterPage = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [character, setCharacter] = useState<Character | null>(null)
  const { id } = useParams<Params>()

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(!data.error ? data : null)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return null
  }

  if (!character) {
    return (
      <View>
        <Header
          title="Character not found"
          subtitle="0 episodes"
          avatar="/images/avatar.jpeg"
        />
      </View>
    )
  }

  return (
    <View>
      <Header
        title={character.name}
        subtitle={`${character.episode.length} ${
          character.episode.length > 1 ? 'episodes' : 'episode'
        }`}
        avatar={character.image}
      />

      <Grid title="Information">
        <Card title="Species" subtitle={character.species} />

        <Card title="Status" subtitle={character.status} />

        <Card title="Gender" subtitle={character.gender} />

        {character.type ? (
          <Card title="Type" subtitle={character.type} />
        ) : null}

        <Card title="Origin" subtitle={character.origin.name} />

        <Card title="Location" subtitle={character.location.name} />
      </Grid>
    </View>
  )
}

export default CharacterPage
