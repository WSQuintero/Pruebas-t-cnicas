export class CatsWordsService {
  async getWords(): Promise<{ data: string | Error; success: boolean }> {
    try {
      const response = await fetch('https://catfact.ninja/fact')

      if (!response.ok) {
        throw new Error('Error al obtener datos')
      }
      const finalData = await response.json()
      return { data: String(finalData.fact), success: true }
    } catch (error) {
      return { data: error as Error, success: false }
    }
  }
}
