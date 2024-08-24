// タスク
export type TaskParam = {
  id: number;
  title: string;
};

// コラム　タスクとは1対多の関係
export type ColumnProps = {
  tasks: TaskParam[];
};

// 入力フォーム
export type InputProps = {
  onSubmit: (title: string) => void;
};
