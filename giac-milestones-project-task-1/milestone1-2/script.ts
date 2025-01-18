const toggleButton = document.getElementById('toggleSkills');
const skillsSection = document.querySelector('.skills') as HTMLElement;

if (toggleButton && skillsSection) {
    toggleButton.addEventListener('click', () => {
        if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
            skillsSection.style.display = 'block';
            toggleButton.textContent = 'Hide Skills';
        } else {
            skillsSection.style.display = 'none';
            toggleButton.textContent = 'Show Skills';
        }
    });
}
