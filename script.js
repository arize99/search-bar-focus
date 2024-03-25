document.addEventListener('keydown', function(event) {
  // Check if the key pressed is the one you want to trigger the focus
  if (event.key === '/') { // Change '/' to the key you want to use
    var searchInput = document.getElementById('searchInput');
    
    // Select the text in the input field
    searchInput.setSelectionRange(0, searchInput.value.length);
    
    // Focus on the search input
    searchInput.focus();
    
    // Prevent the default action of the '/' key
    event.preventDefault();
  }
});
