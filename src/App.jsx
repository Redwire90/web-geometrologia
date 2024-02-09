import { ArticlesCont } from './components/ArticlesCont'
import { Header } from './components/Header'
import { Slider } from './components/Slider'
import { Programer } from './components/Programer'
import { Gallery } from './components/Gallery'
import { Coments } from './components/Coments'

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
      <Programer/>
      <Gallery/>
      <Coments/>
    </main>
  )
}

export default App
