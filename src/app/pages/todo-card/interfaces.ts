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




export interface UserFields {
  Email: string;
  Name: string;
  Password: string;
}

export interface UserRecord {
  id: string;
  createdTime: Date;
  fields: UserFields;
}

export interface UserResponse {
  records: UserRecord[];
}
