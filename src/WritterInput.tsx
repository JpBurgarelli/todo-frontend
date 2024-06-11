import { Input } from "@/components/ui/input"
import { Button } from "./components/ui/button"
import { useState } from "react"


export const WritterInput = () => {
  const [descriptionTask, setDescriptionTask] = useState('')

  const handleClick = () => {
    console.log(descriptionTask);
    setDescriptionTask(''); 
  }

  return (
    <div className="flex flex-col">
      <p>Digite um task</p>

      <div className="flex gap-2">
        <Input value={descriptionTask} onChange={e => setDescriptionTask(e.target.value)} />
        <Button onClick={handleClick}>Adicionar</Button>
      </div>
      
    </div>
  )
}