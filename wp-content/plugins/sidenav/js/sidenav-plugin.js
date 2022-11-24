/**
 * SideNav 
 * version: 1.0.1
 */
 
 /* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("sideSideNav").style.width = "290px";
    document.getElementById('sideNavWrap').style.display = "block";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("sideSideNav").style.width = "0";
}

/*
  jQuery(document).ready(function($) {
        $('#sidenav_color').wpColorPicker();
        $('#sidenav_shado').wpColorPicker();
    });
 */
