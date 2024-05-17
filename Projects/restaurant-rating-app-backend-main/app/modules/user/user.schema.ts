import { IUser } from "./user.type";


class UserSchema {
  users: IUser[] = [
    {
      id: "1",
      name: "Akshay Kasar",
      role: "manager",
      username: "akshaykasar",
      password: "1234",
    },
    {
      id: "2",
      name: "Abhishek",
      role: "admin",
      username: "abhishek",
      password: "1234",
    },
    {
      id: "3",
      name: "Shubham",
      role: "manager",
      username: "shubham",
      password: "1234",
    },
    {
      id: "4",
      name: "Shantanu",
      role: "manager",
      username: "shantanu",
      password: "1234",
    },
    {
      id: "3",
      name: "Raj",
      role: "manager",
      username: "raj",
      password: "1234",
    },
    {
      id: "4",
      name: "Mahesh",
      role: "manager",
      username: "mahesh",
      password: "1234",
    },
    {
      id: "3",
      name: "Sarthak",
      role: "manager",
      username: "sarthak",
      password: "1234",
    },
  ]

  get() {
    return this.users;
  }

}


const userSchema = new UserSchema();

export default userSchema;