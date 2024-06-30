document.addEventListener( 'DOMContentLoaded', function () { 
    const menuIcon = document.getElementById( 'menu-icon' );
    const closeIcon = document.getElementById( 'close-icon' );
    const navbarContainer = document.querySelector( '.navbar' );
    const navLinks = document.querySelectorAll( '.navbar a' );

    menuIcon.addEventListener( 'click', function () {
        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
        navbarContainer.style.display = "flex";
    } );

    closeIcon.addEventListener( 'click', function () {
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
        navbarContainer.style.display = "none";
    } );

    navLinks.forEach( link =>
    {
        link.addEventListener( "click", function ( event )
        {
            if ( this.getAttribute( 'href' ).charAt( 0 ) === "#" )
            {
                event.preventDefault();
                navbarContainer.style.display = "none";
                menuIcon.style.display = "block";
                closeIcon.style.display = "none";

                navLinks.forEach( link =>
                {
                    link.classList.remove( 'active' );
                } )
                
                this.classList.add( 'active' );

                const targetId = this.getAttribute( 'href' ).slice( 1 );
                const targetElement = document.getElementById( targetId );

                if ( targetElement )
                {
                    targetElement.scrollIntoView({ behavior: "smooth" })
                }
            }
        })
    })
} );