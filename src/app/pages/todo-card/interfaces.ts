export interface Task {
  done: boolean,
  title: string
}

export interface Fields {
  Status: string;
  Name: string;
}

export interface Record {
  id: string;
  createdTime: Date;
  fields: Fields;
}

export interface TasksResponse {
  records: Record[];
}
