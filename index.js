// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById("menu");

    // Loop through each category and its items in the menu object
for (const category in menu) {
    console.log(`${category}:`);  // Output the category name 
    
    // Loop through each item in the category
    menu[category].forEach(item => {
        console.log(`  - ${item}`);  // Output each item in the category
    });
}
    console.log("");  // Add a blank line for separation
        
    // Create an element to represent the category
    const categoryElement = document.createElement("div");

        // Set the text content of the category element to the category name
        const categoryTitle = document.createElement("h3");
        categoryTitle.textContent = category; 

        // Append the category element to the menu container
        categoryElement.appendChild(categoryTitle);

        // Create an element to represent a list of items
        const itemList = document.createElement("ul");

         // Loop through each item in the category and create a list item
         menu[category].forEach(item => {
            const listItem = document.createElement("li");

            itemList.appendChild(listItem);  // Append the list item to the ul
        });
        // Append a list of items element to the menu container
        categoryElement.appendChild(itemList);

        // Loop through the items in the category and create list items
            // Create a list item element
            menu[category].forEach (item => {
                // Create a new <li> element
                const listItem = document.createElement("li");
})
            // Set the text content of the list item element to the item name
            listItem.textContent = item;
            // Attach a click event listener to the list item to add it to the order

            // Append the list item to the list of items

            
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML

    // Create a list item for the order

    // Set the text content of the list item to the item name

    // Append the list item to the order items list

    // Calculate and update the total price

    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
} displayMenuItems(menu)

// Start the menu system by calling the init function
initMenuSystem(menu);
