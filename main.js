#! /usr/bin/env node
import inquirer from "inquirer";
let todo_list = [];
let while_condition = true;
while (while_condition === true) {
    console.log("Welcome to your Todo List");
    let option = await inquirer.prompt([
        {
            name: 'user_option',
            type: "list",
            message: "\n select an option you want to do",
            choices: ["Add", "Remove", "View list", "Update"]
        }
    ]);
    //----------------------ADD ITEM------------------------
    if (option.user_option === "Add") {
        let ans = await inquirer.prompt([
            {
                name: "userAns",
                type: "input",
                message: "\nWrite something to add in the list"
            }
        ]);
        if (ans.userAns !== '') {
            todo_list.push(ans.userAns);
            console.log(todo_list);
            console.log("\nTask added successfully");
            console.log("\nList updated !!!!");
        }
        else {
            console.log('\n You cannot enter an empty item to add in the list');
        }
    }
    //------------------------REMOVE ITEM------------------------
    else if (option.user_option === "Remove") {
        let removeChoice = await inquirer.prompt([{
                name: "remove_item",
                type: "list",
                message: '\n Are you sure you want to remove',
                choices: todo_list
            }]);
        let index_to_remove = todo_list.indexOf(removeChoice.remove_item);
        if (index_to_remove >= 0) {
            todo_list.splice(index_to_remove, 1);
            console.log(`\n You removed : , ${removeChoice.remove_item}`);
            console.log("\nList updated !!!!");
        }
    }
    //-----------------------SHOW LIST ------------------------
    else if (option.user_option === "View list") {
        if (todo_list.length > 0) {
            console.log("\n Your list : ");
            todo_list.forEach((item) => {
                console.log(` ${item}`);
            });
        }
        else {
            console.log("\n The list is empty");
        }
    }
    //--------------------UPDATE LIST--------------------------------
    else if (option.user_option === "Update") {
        let updateChoice = await inquirer.prompt([{
                name: "update_item",
                type: "list",
                message: '\n select the item you want to update',
                choices: todo_list
            }]);
        let index = todo_list.indexOf(updateChoice.update_item);
        let editChoice = await inquirer.prompt([{
                name: "new_item",
                type: "input",
                message: '\n Enter the new item'
            }]);
        if (editChoice.new_item !== "") {
            todo_list[index] = editChoice.new_item;
            console.log("\n✅ Task updated successfully.");
            console.log("\nList updated !!!!");
            todo_list.forEach((item) => {
                console.log(`\t- ${item}`);
            });
        }
        else {
            console.log("\n You cannot update to an empty item.");
        }
    }
    else {
        console.log("\n\tThe To-Do list is Empty. Please add tasks before updating.");
    }
    //--------------------------CONFIRM----------------------------------
    let usr_ans = await inquirer.prompt([{
            name: "selection",
            type: "confirm",
            message: '\n Do you want to continue ?',
            default: true
        }]);
    if (usr_ans.selection === false) {
        while_condition = false;
    }
}
console.log(`\n Thank you for using todo list!`);
