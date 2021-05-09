let CloseIcon,OpenIcon,SideBar;

//selecting sidebar
SideBar = document.querySelector('.sidebar');

//selecting icons
CloseIcon = document.querySelector('.fa-close');
OpenIcon = document.querySelector('.fa-bars');

OpenIcon.addEventListener('click',()=> {
    SideBar.classList.toggle('sidebar-control');
});

CloseIcon.addEventListener('click',() => {
    SideBar.classList.remove('sidebar-control');
});