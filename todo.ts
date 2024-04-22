#! /usr/bin/env node

import * as readlineSync from "readline-sync";

interface TodoItem {
  task: string;
  completed: boolean;
}

let todos: TodoItem[] = [];

function addTodo(): void {
  const task: string = readlineSync.question("Enter task: ");
  todos.push({ task, completed: false });
}

function listTodos(): void {
  todos.forEach((todo, index) => {
    console.log(`${index + 1}. [${todo.completed ? 'x' : ' '}] ${todo.task}`);
  });
}

function markComplete(): void {
  const index: number = readlineSync.questionInt('Enter the number of the task to mark as complete: ') - 1;
  if (index >= 0 && index < todos.length) {
    todos[index].completed = true;
  } else {
    console.log("Invalid task number!");
  }
}

function main(): void {
  let choice: string;
  do {
    console.log("Only type one number");
    console.log("\n1. Add todo");
    console.log("2. List todos");
    console.log("3. Mark todo as complete");
    console.log('4. Exit');
    choice = readlineSync.question("Enter your choice: ");

    switch (choice) {
      case '1':
        addTodo();
        break;
      case '2':
        listTodos();
        break;
      case '3':
        markComplete();
        break;
      case '4':
        console.log("Exiting...");
        break;
      default:
        console.log("Invalid choice!");
    }
  } while (choice !== '4');
}

// Call the main function after all other code
main();

