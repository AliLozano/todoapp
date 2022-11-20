export interface Task {
  done: boolean,
  title: string
}

export interface TaskFields {
  Status: string;
  Name: string;
}

export interface TaskRecord {
  id: string;
  createdTime: Date;
  fields: TaskFields;
}

export interface TasksResponse {
  records: TaskRecord[];
}





export interface UserResponse {
  id: string;
  username: string;
}
