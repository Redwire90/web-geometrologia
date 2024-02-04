import { ArticlesCont } from './components/ArticlesCont'
import { Header } from './components/Header'
import { Slider } from './components/Slider'

function App() {
  return (
    <main className=" border-blue-500 border-t-[6px]">
      <Header/>
      <div>
        <Slider/>
      </div>
      <div>
        <ArticlesCont/>
      </div>
    </main>
  )
}

export default App
