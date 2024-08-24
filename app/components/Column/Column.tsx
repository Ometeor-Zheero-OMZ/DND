import "./Column.css";
import React from "react";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { ColumnProps } from "@/app/constants/type";
import Task from "../Task/Task";

const Column: React.FC<ColumnProps> = ({ tasks }) => {
  return (
    <div className="column">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </SortableContext>
    </div>
  );
};

export default Column;
