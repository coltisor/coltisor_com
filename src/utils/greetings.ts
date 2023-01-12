import { shuffleArray } from "./arrays";

export const getRandomGreeting = (hours?: number): string => {
  let greetings = [
    "Hello!",
    "What's up?!",
    "Howdy?!",
    "Greetings!",
    "How do you do?",
    "Nice to meet you!",
    "How have you been?",
    "How's it going?",
    "Good to see you!",
    "Wassup?!",
    "Lovely to meet you!",
    "What's the craic?!",
    "Hello stranger!",
    "What's up buttercup?",
  ];

  if (hours !== undefined) {
    const greeting = getGreetingByHours(hours);

    // Add multiple times to increase chances of randomly picking that
    greetings.push(greeting);
    greetings.push(greeting);
    greetings.push(greeting);
    greetings.push(greeting);
    greetings.push(greeting);
  }

  greetings = shuffleArray(greetings);

  const randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
};

export const getGreetingByHours = (hours: number) => {
  if (hours > 24 || hours < 0) {
    console.warn("Utils | getGreetingByHours – Invalid hours", hours);
    return "Hello, there!";
  }

  if (hours >= 5 && hours < 12) {
    return "Good morning!";
  }

  if (hours >= 12 && hours < 18) {
    return "Good afternoon!";
  }

  if (hours >= 18 && hours < 22) {
    return "Good evening!";
  }

  return "Good night, isn't it?!";
};
