export interface DataTasks {
  userId: string
  id: number
  title: string
  completed: boolean
}


export class TasksService{
  async getTasks(){
    try{

      const response=await fetch("https://jsonplaceholder.typicode.com/todos")
      if(response.ok){
        const data:Promise<DataTasks[]>=response.json()
        return {status:true,data:data}
      }else{
        throw new Error("Hubo un error al solicitar los datos")
      }
    }catch(error){
      return {data:error,status:false}
    }
  }
}