"use client";

import { useState } from "react";
import {
  closestCorners,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import Column from "./components/Column/Column";
import { TaskParam } from "./constants/type";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import Input from "./components/Input/Input";

export default function App() {
  const [tasks, setTasks] = useState<TaskParam[]>([
    { id: 1, title: "Add tests to homepage" },
    { id: 2, title: "Fix styling in about section" },
    { id: 3, title: "Learn how to center a div" },
  ]);

  const addTask = (title: string) => {
    setTasks((tasks) => [...tasks, { id: tasks.length + 1, title }]);
  };

  const getTaskPosition = (id: UniqueIdentifier) => {
    const numericId = typeof id === "string" ? Number(id) : id;

    return tasks.findIndex((task) => task.id === numericId);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    setTasks((tasks) => {
      const originalPosition = getTaskPosition(active.id);
      const newPosition = getTaskPosition(over.id);

      return arrayMove(tasks, originalPosition, newPosition);
    });
  };

  // 現段階でUXの良さが感じられなかったため、下記引数を除外
  // タスクを選択し、キーボードのEnterを入力すると、カーソルボタンで↑↓で操作できる
  // useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor));

  return (
    <div className="App">
      <h1>My Tasks ✅</h1>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        <Input onSubmit={addTask} />
        <Column tasks={tasks} />
      </DndContext>
    </div>
  );
}
