<?php

/**
 * Button commvault
 *
 * @category Blocks
 */


/**
 * Get info block
 *
 * @return string
 */

if (!function_exists('getInfoBlock')) {
    function getInfoBlock($attributes)
    {
        $blockClasses = '';

        $blockClasses .= 'bMg-button ';
        $blockClasses .= $attributes['borderRadius'] ? 'bMg-button-rounded ' : '';
        $blockClasses .= $attributes['buttonSize'] ? 'bMg-button-' . $attributes['buttonSize'] :  'bMg-button-medium';

        return $blockClasses;
    }
}

$block_wrapper_attributes = get_block_wrapper_attributes(
    [
    'class' => getInfoBlock($attributes),
    'style' => "background-color: #5D3587; color: #fff;"
    ]
);

if (!function_exists('renderButtonLink')) {
    function renderButtonLink($attributes, $block_wrapper_attributes, $svg_content, $iconPosition)
    {
        $buttonLink = $attributes['buttonLink'] ?? '#';
        $buttonText = $attributes['buttonText'] ?? 'Button';
        ?>
            <a href="<?php echo esc_url($buttonLink); ?>" <?php echo wp_kses_data($block_wrapper_attributes); ?>>
        <?php
        if ($iconPosition == 'left') {
            echo $svg_content;
        }
        ?>
                <span><?php echo $buttonText; ?></span>
        <?php
        if ($iconPosition == 'right') {
            echo $svg_content;
        }
        ?>
            </a>
        <?php
    }
}

    $svg_content = '<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>';

if ($attributes['icon']) {
    renderButtonLink($attributes, $block_wrapper_attributes, $svg_content, $attributes['iconPosition']);
} else {
    renderButtonLink($attributes, $block_wrapper_attributes, '', '');
}
?>


