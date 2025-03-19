document.getElementById('addTaskButton').addEventListener('click', addTask);

 // Function to add a new task to the list
 function addTask() {
     const taskInput = document.getElementById('taskInput'); // Get the input field
     const taskValue = taskInput.value; // Get the value from the input field

     if (taskValue) { // Check if the input is not empty
         const taskList = document.getElementById('taskList'); // Get the task list
         const listItem = document.createElement('li'); // Create a new list item
         listItem.textContent = taskValue; // Set the text of the list item

         const removeButton = document.createElement('button'); // Create a remove button
         removeButton.textContent = 'Remove'; // Set the button text
         removeButton.className = 'remove-btn'; // Assign class for styling
         // Add event listener to the remove button
         removeButton.addEventListener('click', function()
          { taskList.removeChild(listItem); // Remove the list item from the task list
         });

         listItem.appendChild(removeButton); // Append the remove button to the list item
         taskList.appendChild(listItem); // Append the list item to the task list
         taskInput.value = ''; // Clear the input field
     }
 }