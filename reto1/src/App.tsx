import { useEffect, useMemo, useState } from 'react'
import { CatsImageService } from '../src/services/catsImageService'
import { CatsWordsService } from '../src/services/catsWordsService'
import './App.css'

function App() {
  const $Words = useMemo(() => new CatsWordsService(), [])
  const $Image = useMemo(() => new CatsImageService(), [])
  const [actualWord, setActualWord] = useState<string>('')
  const [actualImage, setActualImage] = useState<string | Blob>('')

  useEffect(() => {
    const getWords = async () => {
      const { data, success }: { data: string | Error; success: boolean } =
        await $Words.getWords()

      if (success) {
        setActualWord(String(data).split(' ')[0])
        const image = await $Image.getImage(actualWord)

        if (image.success) {
          setActualImage(image.data)
        }
      }
    }
    getWords()
  }, [$Words, $Image])

  return (
    <article>
      <img src={String(actualImage)} alt='cat image' />
      <p>{actualWord}</p>
    </article>
  )
}

export default App
