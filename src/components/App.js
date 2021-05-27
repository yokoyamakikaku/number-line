import { Provider } from '../hooks/app'

import StatusBar from './StatusBar'
import Question from './Question'
import Navigation from './Navigation'

const App = () => (
  <Provider>
    <div className="absolute inset-0 flex flex-col">
      <StatusBar />
      <div className="flex-grow flex">
        <Question />
      </div>
      <Navigation />
    </div>
  </Provider>
)

export default App
