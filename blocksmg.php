<?php
/**
 * Plugin Name:       Blocksmg
 * Description:       A plugin of custom blocks by mager19.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.5
 * Author:            Mager19
 * Author URI:        https://twitter.com/mager19
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blocksmg
 *
 * @category Blocks
 * @package  CreateBlock
 * @author   Mager19 <mager19@gmail.com>
 * @license  GPL-2.0-or-later https://www.gnu.org/licenses/gpl-2.0.html
 * @link     https://twitter.com/mager19
 */

namespace Blocksmg;

if (! defined('ABSPATH') ) {
    die('Silence is golden.');
}
/**
 * Constructor Class
 *
 * @category Blocks
 * @package  CreateBlock
 * @author   Mager19 <mager19@gmail.com>
 * @license  GPL-2.0-or-later https://www.gnu.org/licenses/gpl-2.0.html
 * @link     https://twitter.com/mager19
 */

require 'plugin-update-checker/plugin-update-checker.php';
use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

final class Blocksmg
{
    static function init()
    {

        add_action(
            'init', function () {
                add_filter(
                    'block_categories_all', function ($categories) {
                        $custom_categories = [
                        [
                        'slug' => 'blocksmg',
                        'title' => __('Blocksmg', 'blocksmg'),
                        ]
                        ];

                        return array_merge($custom_categories, $categories);
                    }
                );
                $blocks = glob(__DIR__ . '/build/blocks/*/block.json');
                foreach ($blocks as $block) {
                    register_block_type($block);
                }

                $asset_file = include plugin_dir_path(__FILE__) . 'build/index.asset.php';

                wp_enqueue_script('index-settings', plugin_dir_url(__FILE__) . '/build/index.js', $asset_file['dependencies'], $asset_file['version'], true);

                $global_styles = include plugin_dir_path(__FILE__) . 'build/global-styles.asset.php';
                wp_enqueue_style('global-styles', plugin_dir_url(__FILE__) . '/build/global-styles.css', array(), $global_styles['version']);
            }
        );

        $myUpdateChecker = PucFactory::buildUpdateChecker(
            'https://github.com/mager19/blocksMg/',
            __FILE__,
            'Blocksmg'
        );

        //Set the branch that contains the stable release.
        $myUpdateChecker->setBranch('releases');
    }
}

Blocksmg::init();
