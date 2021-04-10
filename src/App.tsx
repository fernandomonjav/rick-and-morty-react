import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './components/Layout'
import CharacterPage from './pages/CharacterPage'
import CharactersPage from './pages/CharactersPage'

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={CharactersPage} />
          <Route path="/characters" exact component={CharactersPage} />
          <Route path="/characters/:id" component={CharacterPage} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
