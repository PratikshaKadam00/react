
document.addEventListener('DOMContentLoaded', function() {
  // Check if userRole is stored in localStorage
  const role = localStorage.getItem('userrole');

//script for accessing functionality based on role

  // If no role is found, prompt to login
  if (!role) {
      alert('Please login to access the dashboard.');
      window.location.href = 'login.html';
      return;
  }

  // Display sections based on user role
  const viewLink = document.getElementById('viewinventory');
  const addLink = document.getElementById('addserver');
  const exportLink = document.getElementById('exportdata');

  if (role === 'admin') {
      // Admin can see all links
      viewLink.style.display='inline';
      addLink.style.display = 'inline';
      exportLink.style.display = 'inline';
  } else if (role === 'user') {

      viewLink.style.display='inline';
      // User can only see the View link
      addLink.style.display = 'none';
      exportLink.style.display = 'none';

  } else {
      // Unknown role - Redirect to login
      alert('Invalid role detected. Please login again.');
      window.location.href = 'login.html';
  }


  //script for changing login button to logout
const loginButton = document.getElementById('loginbutton');

if (role) {
    
    // User is logged in, change button to Logout
    loginButton.textContent = 'Logout';
    loginButton.onclick = function() {

      // Clear the user role from localStorage (log out)
      localStorage.removeItem('userrole');
      window.location.href = 'login.html'; // Redirect to login page after logging out
    };
  } else {
    // If not logged in, set the button to Login
    loginButton.textContent = 'Login';
    loginButton.onclick = function() {
      window.location.href = 'login.html'; // Redirect to login page
    };
  }



  //script for redirecting the all functionality like add, export and view to respective page

  // Add event listeners to handle page navigation
  viewLink.addEventListener('click', function() {
    window.location.href = 'inventory.html'; // Redirect to inventory page for viewing
  });

  if (addLink) {
    addLink.addEventListener('click', function() {
      window.location.href = 'add-edit.html'; // Redirect to add server page
    });
  }

  if (exportLink) {
    exportLink.addEventListener('click', function() {
      window.location.href = 'export.html'; // Redirect to export data page
    });
  }

});



