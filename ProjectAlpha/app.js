const question = require("./input");
const Tasks = require("./tasks");

function App() {
    let input = "";
    let tasks = [];
    const task = new Tasks();
    console.log("Hello Our User");
    ask();

    async function ask() {
        const answer = await question("\nChoose > List-add-edit-delete-link-plan-exit:\n");
        input = answer.toLowerCase();

        switch (input) {
            case "list": {
                console.table(tasks);
                const filterChoice = await question(
                    "do you want to list by Status |status| or Date |date| or Priority |priority| : "
                );
                let filteredTasks = tasks;

                if (filterChoice === "status") {
                    const statusFilter = await question("Enter status to filter pending or done : ");
                    const lowerStatus = statusFilter.toLowerCase();
                    if (statusFilter.toLowerCase() !== "pending" || statusFilter.toLowerCase() !== "done") {
                        console.log("Error: Status must be 'pending' or 'done'.");
                        await ask();
                        return;
                    }
                    filteredTasks = tasks.filter(
                        (task) => task.status.toLowerCase() === lowerStatus
                    );
                    console.log(`\nTasks with status "${statusFilter}":`);
                    console.table(filteredTasks);
                } else if (filterChoice === "date") {
                    filteredTasks.sort((a, b) => new Date(a.date) - new Date(b.date));
                    console.table(filteredTasks);
                } else if (filterChoice === "priority") {
                    filteredTasks.sort((a, b) => a.pDegree[0] - b.pDegree[0]);
                    console.log(`\ntasks sorted with priority":`);
                    console.table(filteredTasks);
                } else {
                    console.log("Invalid filter choice");
                    console.table(tasks);
                }
                await ask();
                break;
            }

            case "add": {
                const name = await question("Task Name\n");
                if (tasks.some((t) => t.name.toLowerCase() === name.toLowerCase())) {
                    console.log("Error: A task with this name already exists.");
                    await ask();
                    return;
                }
                const date = await question("Task Due Date\n");
                const description = await question("Task description\n");
                let pDegree = await question("Task prioritie\n");
                const digits = pDegree.match(/\d+/g);
                if (!digits || digits.length === 0) {
                    console.log("Error: Priority must contain at least one digit.");
                    await ask();
                    return;
                }

                pDegree = digits;

                const status = await question("Task status -pending or done\n");
                if (status.toLowerCase() !== "pending" || status.toLowerCase() !== "done") {
                    console.log("Error: Status must be 'pending' or 'done'.");
                    await ask();
                    return;
                }

                const dependOn = "";
                const newTask = new Tasks(name, date, description, pDegree, lowerStatus, dependOn);
                tasks.push(newTask);
                await ask();
                break;
            }

            case "edit": {
                let name = await question("Task Name");
                let i = tasks.findIndex((t) => t.name === name);
                if (i === -1) {
                    console.log("Error: Task not found.");
                    await ask();
                    return;
                }

                let field = await question(
                    "What Field That you want to change => name,date,description,pDegree,status"
                );
                const allowedFields = ["name", "date", "description", "pDegree", "status"];
                if (!allowedFields.includes(field)) {
                    console.log("Error: Invalid field. Allowed: name, date, description, pDegree, status.");
                    await ask();
                    return;
                }

                let newValue = await question("New Value that you want");
                if (field === "status") {
                    const lowerStatus = newValue.toLowerCase();
                    if (lowerStatus !== "pending" && lowerStatus !== "done") {
                        console.log("Error: Status must be 'pending' or 'done'.");
                        await ask();
                        return;
                    }
                    newValue = lowerStatus;
                }

                if (field === "name") {
                    const nameExists = tasks.findIndex((t) => t.name === name)
                    if (nameExists == -1) {
                        console.log("Error: Another task with that name already exists.");
                        await ask();
                        return;
                    }
                }

                tasks[i][field] = newValue;
                await ask();
                break;
            }

            case "delete": {
                let name = await question("name of task that you want to delete");
                let index = tasks.findIndex((t) => t.name === name);
                if (index === -1) {
                    console.log("Error: Task not found.");
                    await ask();
                    return;
                }
                tasks.splice(index, 1);
                await ask();
                break;
            }

            case "link": {
                let name = await question("name of task that you want to link");
                let index = tasks.findIndex((t) => t.name === name);
                if (index === -1) {
                    console.log("Error: Task not found.");
                    await ask();
                    return;
                }

                let name2 = await question("to which one");
                let index2 = tasks.findIndex((t) => t.name === name2);
                if (index2 === -1) {
                    console.log("Error: Target task not found.");
                    await ask();
                    return;
                }

                tasks[index].dependOn = tasks[index2].id;
                await ask();
                break;
            }

            case "plan": {
                const name = await question("Plan For which task?");
                let task = tasks.find((t) => t.name === name);
                if (!task) {
                    console.log("Error: Task not found.");
                    await ask();
                    return;
                }

                const planedTasks = [];
                let current = task;
                while (current.dependOn) {
                    const next = tasks.find((t) => t.id === current.dependOn);
                    if (!next) {
                        console.log("not found");
                        break;
                    }
                    planedTasks.push(next);
                    current = next;
                }
                planedTasks.sort((a, b) => new Date(a.date) - new Date(b.date));
                console.table(planedTasks);
                await ask();
                break;
            }

            case "exit":
                console.log("GoodBye");
                process.exit(0);
                break;

            default:
                console.log("please enter a vaild choice");
                await ask();
                break;
        }
    }
}

App();