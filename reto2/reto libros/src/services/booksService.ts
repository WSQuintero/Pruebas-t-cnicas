export class BooksService{

  async getAllBooks(){
    try{
      const response=await fetch(import.meta.env.VITE_API_URL)
      if(!response.ok){
        throw new Error("Ha ocurrido un erroral obtener los datos")
      }

      return {data:await response.json(),status:true}
    }catch(error){
      return {data:error,status:false}
    }
  }
}