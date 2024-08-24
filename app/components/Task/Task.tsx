import "./Task.css";
import { TaskParam } from "@/app/constants/type";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

const Task: React.FC<{ task: TaskParam }> = ({ task }) => {
  const id = task.id;
  const title = task.title;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="task"
    >
      <input type="checkbox" className="checkbox" />
      {title}
    </div>
  );
};

export default Task;
