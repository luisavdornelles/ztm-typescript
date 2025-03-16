// You are working on a task management system where tasks can have different
// statuses.Implement a function that logs a message based on the type of task
// status, which can be either a string(status message) or a number(status
// code).
//
// Requirements:
// - Create a function called `logTaskStatus` that:
//   - Takes status, which can be either a `string` or a `number`.
//   - If status is a `string`, print "Task status message: " followed by the
//     status message.
//   - If status is a `number`, print "Task status code: " followed by the
//     status code.

type TaskStatus = string | number;

function logTaskStatus(data: TaskStatus): void {
    if (typeof data === "string") {
        console.log(`Task status message: ${data}`);
      } else if (typeof data === "number") {
        console.log(`Task status code: ${data}`);
      }
}

logTaskStatus("Completed");   // Output: Task status message: Completed
logTaskStatus(200);           // Output: Task status code: 200
logTaskStatus("In Progress"); // Output: Task status message: In Progress
logTaskStatus(404);           // Output: Task status code: 404

