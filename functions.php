<?php


function include_jQuery()
{
    if (!is_admin()) {
        wp_enqueue_script('jquery');
    }
}
add_action('init', 'include_jQuery');


function mangogrp_files()
{

    wp_enqueue_script('mangogrp-js', get_theme_file_uri('/js/min/build.min.js', array('jquery')), NULL, microtime(), true);
    wp_enqueue_script('mangogrp-js', get_theme_file_uri('/node_modules/aos/dist/aos.js', array('jquery')), NULL, microtime(), true);

    wp_enqueue_style('mangogrp_main_styles', get_stylesheet_uri(), NULL, microtime());
}
add_action('wp_enqueue_scripts', 'mangogrp_files');

function mangogrp_features()
{
    register_nav_menu('topnav', 'Header Menu Location');
}
add_action('after_setup_theme', 'mangogrp_features');
