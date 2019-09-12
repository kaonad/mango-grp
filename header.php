<!DOCTYPE html>
<html lang="en">

<head>
    <?php wp_head();  ?>
</head>

<body>
    <header>


        <section class="navigation">
            <div class="navigation_container">
                <div class="navigation_brand">
                    <a href="<?php echo home_url(); ?>"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/logos/mango-logo-light.svg" /></a>
                </div>
                <nav>
                    <div class="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
                    <?php wp_nav_menu(array(
                        'theme_location' => 'topnav',
                        'menu_class' => 'navigation__primary-menu',
                    )) ?>
                </nav>
            </div>
        </section>
    </header>