import fs from "fs";

const todosPath = "app/todo/todos.json";

// exercise is aware that this is not the best practice
type Todo = { // eslint-disable-line
    id: number;
    task: string;
}

function getTodos(): Todo[] {
    if (!fs.existsSync(todosPath)) {
        return [];
    }
    const data = fs.readFileSync(todosPath);
    return JSON.parse(data.toString()) as Todo[];
}

function listTodos(): void {
    const todos: Todo[] = getTodos();
    
    for (const todo of todos) {
        console.log(`${todo.id}: ${todo.task}`);
    }
}

function saveTodos(todos: Todo[]): void {
    fs.writeFileSync(todosPath, JSON.stringify(todos));
}

function removeTodo(id: number): void {
    const todos: Todo[] = getTodos();
    const index = todos.findIndex((todo) => todo.id === id);

    if (index === -1) {
        console.log(`Could not find todo with id ${id}`);
        return;
    }

    const removedTodo = todos.splice(index, 1)[0];
    saveTodos(todos);
    console.log(`Removed todo ${removedTodo.id}: ${removedTodo.task}`);
}

function addTodo(task: string): void {
    const todos: Todo[] = getTodos();
    const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;

    todos.push({ id, task });
    saveTodos(todos);

    console.log(`Added todo ${id}: ${task}`);
}

function cliInvalidOption(command: string): void {
    console.error(`Invalid options for subcommand ${command}. See --help.`);
}

function cli(): void {
    const args = process.argv;

    if (args.length < 3) {
        console.error("Missing subcommand. Please see --help.");
        return;
    }

    const subcommand = args[2];
    const options = args.slice(3); // get all args after subcommand

    switch (subcommand) {
        case "--help":
            console.log("todo.ts add TASK_STRING     adds todo");
            console.log("todo.ts done ID_NUMBER      completes a todo");
            console.log("todo.ts list                lists todos");
            break;
        case "add":
            if (options.length !== 1) {
                cliInvalidOption(subcommand);
                return;
            }
            addTodo(options[0]);
            break;
        case "done": { // blocking case to be able to create variable id
            if (options.length !== 1) {
                cliInvalidOption(subcommand);
                return;
            }
            
            const id = parseInt(options[0]);
            if (isNaN(id)) {
                cliInvalidOption(subcommand);
                return;
            }

            removeTodo(id);
            break;
        }
        case "list":
            if (options.length !== 0) {
                cliInvalidOption(subcommand);
                return;
            }

            listTodos();
            break;
        default:
            console.log("Invalid subcommand. Please see --help.");
            break;
    }
}   

cli();
