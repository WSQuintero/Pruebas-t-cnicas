interface ImageResponse {
  data: string
  success: boolean
}

export class CatsImageService {
  async getImage(word: string): Promise<ImageResponse> {
    try {
      const response = await fetch(
        `https://cataas.com/cat/says/${word}?json=true`
      )

      if (!response.ok) {
        throw new Error('Error al obtener datos')
      }

      const image = await response.json()
      return { data: image, success: true }
    } catch (error) {
      const finalError: string = (error as Error).message
      return { data: finalError, success: false }
    }
  }
}
