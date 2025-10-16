const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
sidebar.classList.toggle('close')
toggleButton.classList.toggle('rotate')

 // Sidebartext-Elemente auswählen
  const sidebarTexts = document.querySelectorAll('.sidebartext');

  // Prüfen, ob sidebar die Klasse 'close' hat (also geschlossen ist)
  if (sidebar.classList.contains('close')) {
    // Text ausblenden (display none)
    sidebarTexts.forEach(el => el.style.display = 'none');
  } else {
    // Text wieder anzeigen (display block)
    sidebarTexts.forEach(el => el.style.display = 'block');
  }

 closeAllSubMenus()
     
  
  

}


function toggleSubMenu(button){

    if(!button.nextElementSibling.classList.contains('show')){
      closeAllSubMenus()
    }
    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')

    if(sidebar.classList.contains('close')){
        sidebar.classList.toggle('close')
    }
}
function closeAllSubMenus(){
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
})
}

window.addEventListener('resize', () => {
  if (window.innerWidth <= 800) {
    sidebar.classList.remove('close');
    toggleButton.classList.remove('rotate');
  }
});









 