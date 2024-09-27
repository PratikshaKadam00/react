// Function to display server data in the inventory table
function displayServerData() {
    const tableBody = document.querySelector('#inventorytable tbody');
    tableBody.innerHTML = ''; // Clear existing rows
  
    serverData.forEach((server, index) => {
      const row = document.createElement('tr');
  
      // Adding data to the row
      row.innerHTML = `
        <td>${server.serialNumber}</td>
        <td>${server.hostName}</td>
        <td>${server.publicIPAddress}</td>
        <td>${server.userDetails.userName}</td>
        <td>${server.accessPermissions.sudoAccess ? 'Yes' : 'No'}</td>
        <td>
          <button onclick="editServer(${index})">Edit</button>
          <button onclick="deleteServer(${index})">Delete</button>
        </td>
      `;
  
      tableBody.appendChild(row);
    });
  }
  
  // Call display data on page load
  window.onload = displayServerData;
  
  //  edit server
  function editServer(index) {
    
  }
  
  //delete
  function deleteServer(index) {
    serverData.splice(index, 1);
    displayServerData(); // Refresh table after deletion
  }
  