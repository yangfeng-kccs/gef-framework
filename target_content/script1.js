document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    // Initialize tabs - set Overview tab as active by default
    tabs.forEach(t => t.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));

    document.getElementById('overview-tab').classList.add('active');
    document.getElementById('overview-content').classList.add('active');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));

            // Add active class to clicked tab
            this.classList.add('active');

            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('active'));

            // Show content for the active tab
            const tabId = this.id;
            const contentId = tabId.replace('-tab', '-content');
            document.getElementById(contentId)?.classList.add('active');
        });
    });
});
