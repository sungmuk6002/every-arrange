const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      // Prevent the default link behavior
      event.preventDefault();

      // Remove active class from all links
      navLinks.forEach(link => link.classList.remove('active'));

      // Add active class to the clicked link
      link.classList.add('active');

      // Get the href attribute of the clicked link
      const href = link.getAttribute('href');

      // Delay the navigation slightly to ensure the class is added
      setTimeout(() => {
        // Navigate to the selected link's URL
        window.location.href = href;
      }, 50);
    });

    // Check if the link's href matches the current URL
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });