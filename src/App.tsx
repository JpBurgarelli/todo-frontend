import {
 Card,
 CardContent,
 CardFooter,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Trash2 } from "lucide-react";

type Task = {
 checked: boolean;
 description: string;
};

function App() {
 const [newTask, setNewTask] = useState("");
 const [tasks, setTasks] = useState<Task[]>([]);

 const handleOnClick = () => {
  setTasks([...tasks, { description: newTask, checked: false }]);
  setNewTask("");
 };

 const handleRemoveTask = (idx: number) => {
  const filteredTasks = tasks.filter((_, index) => index !== idx);
  setTasks(filteredTasks);
 };

 const toggleTaskCompleted = (idx: number) => {
  const _tasks = [...tasks];
  _tasks[idx].checked = !_tasks[idx].checked;
  setTasks(_tasks);
 };

 const tasksLength = tasks.length;
 const tasksDone = tasks.filter((task) => task.checked).length;

 return (
  <div className="bg-slate-700 w-screen h-screen flex flex-col gap-10 items-center justify-center">
   <div className="flex gap-2 ">
    <Card>
     <CardHeader>
      <CardTitle className="flex justify-between">
       <p>Tasks</p>
       <p>
        {tasksDone} / {tasksLength}
       </p>
      </CardTitle>
     </CardHeader>
     <CardContent className="flex flex-col size-[500px] items-start gap-4">
      {tasks.map((task, idx) => {
       return (
        <div
         key={idx}
         className="flex items-center gap-2 w-full justify-between"
        >
         <div className="flex items-center gap-2">
          <Checkbox
           checked={task.checked}
           onClick={() => toggleTaskCompleted(idx)}
          />
          <p>{task.description}</p>
         </div>

         <Button variant="outline" onClick={() => handleRemoveTask(idx)}>
          <Trash2 size={16} />
         </Button>
        </div>
       );
      })}
     </CardContent>
     <CardFooter className="flex gap-4">
      <Input
       value={newTask}
       onChange={(e) => setNewTask(e.target.value)}
       placeholder="Fazer almoco"
       className="border-2 border-slate-500"
      />
      <Button onClick={handleOnClick}>Submit</Button>
     </CardFooter>
    </Card>
   </div>
  </div>
 );
}

export default App;
