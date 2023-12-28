<?php
/**
 * Get info block
 *
 * @return string
 */

use Blocksmg\Blocksmg;
$paddingBlocks = Blocksmg::paddingBlockClasses($attributes);

$blockClasses = 'bMg-section-header ';
$blockClasses .= $paddingBlocks . '';
$blockStyles = $attributes['justifyContent'] ?
'justify-content: ' . $attributes['justifyContent'] . ';' : '';

$blockStyles .= $attributes['justifyContent'] === 'flex-end' ? 'text-align: right;' : ($attributes['justifyContent'] === 'center' ? 'text-align: center;' : 'text-align: left;');

$block_wrapper_attributes = get_block_wrapper_attributes(
    [
    'class' => $blockClasses,
    'style' => $blockStyles
    ]
); ?>

<div <?php echo $block_wrapper_attributes; // phpcs:ignore ?>>
    <?php
    if ($attributes['showEyebrow'] && $attributes['eyebrow']) { ?>
            <span class="section-header-eyebrow"><?php echo $attributes['eyebrow']; ?></span>
        <?php
    }
    if ($attributes['title']) { ?>
            <h1 class="section-header-title"><?php echo $attributes['title']; ?></h1>
        <?php
    }
    if ($attributes['showDescription'] && $attributes['description']) { ?>
            <p class="section-header-description"><?php echo $attributes['description']; ?></p>
        <?php
    }

    if ($attributes['showButtons']) { ?>
        <div class="buttons">
        <?php echo $content; ?>
        </div>
        <?php
    }
    ?>
</div>
