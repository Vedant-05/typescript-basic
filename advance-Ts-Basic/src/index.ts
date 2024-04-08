interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

//using pick to get types

type UserProfile = Pick<User, "name" | "email">;

const displayUserProfile = (user: UserProfile) => {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
};

displayUserProfile({ name: "Hello", email: "67@gmail.copm" });
