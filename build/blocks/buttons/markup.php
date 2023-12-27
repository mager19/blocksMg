<?php
/**
 * Get info block
 *
 * @return string
 */

use Blocksmg\Blocksmg;
$paddingBlocks = Blocksmg::paddingBlockClasses($attributes);

$blockClasses = 'bMg-buttons ';
$blockClasses .= $paddingBlocks . '';
$blockStyles = $attributes['justifyContent'] ?
'justify-content: ' . $attributes['justifyContent'] . ';' : '';

$blockStyles .= $attributes['gap'] ? 'gap: ' . $attributes['gap'] . 'px;' : '';

$block_wrapper_attributes = get_block_wrapper_attributes(
    [
    'class' => $blockClasses,
    'style' => $blockStyles
    ]
); ?>

<div <?php echo $block_wrapper_attributes; // phpcs:ignore ?>>
    <?php echo $content; ?>
</div>
