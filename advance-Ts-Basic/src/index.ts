interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

//using pick to get selected types

type UserProfile = Pick<User, "name" | "email">;

//using Partial to make all types optional

type UserProfileOptional = Partial<UserProfile>;

const displayUserProfile = (user: UserProfileOptional) => {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
};

displayUserProfile({ name: "Hello", email: "67@gmail.copm" });
