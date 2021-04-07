import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './components/Layout'
import CharactersPage from './pages/CharactersPage'

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={CharactersPage} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
