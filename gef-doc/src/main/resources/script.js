
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const contentDivs = document.querySelectorAll('.contentD');
        contentDivs.forEach(div => {
            div.classList.remove('active');
        });
        const targetDiv = document.getElementById(targetId);
        targetDiv.classList.add('active');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Toggle submenu functionality
    const toggleBtns = document.querySelectorAll('.toggle-btn');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const submenuItem = this.parentElement;
            submenuItem.classList.toggle('active');

            // Change icon when expanded/collapsed
            const toggleIcon = this.querySelector('.toggle-icon');
            if (submenuItem.classList.contains('active')) {
                toggleIcon.textContent = '▼';
            } else {
                toggleIcon.textContent = '▶';
            }
        });
    });

    // Search box focus
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            // In a real implementation, this would open a search modal or navigate to search
            alert('Search functionality would open here');
        });
    }

    // Keyboard shortcut for search
    document.addEventListener('keydown', function(e) {
        // Check if CTRL+K (or Command+K on Mac) is pressed
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            // In a real implementation, this would open a search modal
            alert('Search functionality would open here');
        }
    });
    function showDoc(id) {
        
        const divs = document.querySelectorAll('.content');
        
        divs.forEach(div => {
            div.classList.remove('active');
        });
        const targetDiv = document.getElementById(id);
        targetDiv.classList.add('active');
    }
});

const changeInstallVersionSelect = document.getElementById('changeInstallVersionSelect');
if(changeInstallVersionSelect) {
	
	document.getElementById('changeInstallVersionSelect').onchange = function() {
	  const value = this.value;
	  if(value == '25.3') {
	    window.location.href = 'document-install.html';
	  } else if(value == '24.9') {
	    window.location.href = 'document-install24.9.html';
	  } else if(value == '24.3') {
	    window.location.href = 'document-install24.3.html';
	  }
	};
}

const changeVersionSelect = document.getElementById('changeVersionSelect');
if(changeVersionSelect) {
	document.getElementById('changeVersionSelect').onchange = function() {
	  const value = this.value;
	  if(value == '25.3') {
	    window.location.href = 'document-concept.html';
	  } else if(value == '24.9') {
	    window.location.href = 'document-concept24.9.html';
	  } else if(value == '24.3') {
	    window.location.href = 'document-concept24.3.html';
	  }
	};
}
