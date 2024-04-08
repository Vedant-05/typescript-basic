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

type Event = "click" | "scroll" | "mousemove";
type ExcludeEvent = Exclude<Event, "scroll">; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent("click"); // OK

interface User {
  id: string;
  name: string;
}

// Initialize an empty Map
const usersMap = new Map<string, User>();

// Add users to the map using .set
usersMap.set("abc123", { id: "abc123", name: "John Doe" });
usersMap.set("xyz789", { id: "xyz789", name: "Jane Doe" });

interface Config {
  readonly endpoint: string;
  readonly apiKey: string;
}

const config: Readonly<Config> = {
  endpoint: "https://api.example.com",
  apiKey: "abcdef123456",
};

// Accessing a value using .get
console.log(usersMap.get("abc123")); // Output: { id: 'abc123', name: 'John Doe' }

const displayUserProfile = (user: UserProfileOptional) => {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
};

displayUserProfile({ name: "Hello", email: "67@gmail.copm" });
