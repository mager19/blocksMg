/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps, InspectorControls, MediaPlaceholder } from '@wordpress/block-editor';

import { PanelBody, PanelRow, Button, ToggleControl } from '@wordpress/components';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

import { TagBlock } from '../../components/tagBlock';
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props) {
	const { attributes, setAttributes } = props;

	const { image, imageToRight } = attributes;

	const blockProps = useBlockProps({
		className: `block-blocksMg`,
	});

	const innerBlocksProps = useInnerBlocksProps({
		className: `block__container__innerblocks__inner`,
		style: { order: imageToRight ? 1 : 0 }
	}, {
		template: [["blocksmg/section-header"]],
		templateLock: true,
	})

	/**
	 * Set attribute on select image
	 */
	const onSelectImage = (image) => {
		return props.setAttributes({
			image: {
				id: image.id,
				url: image.url,
				alt: image.alt
			}
		});
	};

	/**
	 * Set attribute on remove image
	 */
	const onRemoveImage = () => {
		return props.setAttributes({
			image: {
				id: '',
				url: '',
				alt: ''
			}
		});
	};

	return (
		<>

			<InspectorControls>
				<PanelBody title='Image-Text settings' initialOpen={true} className="button-group-settings">
					<PanelRow>
						<ToggleControl
							label="Image to right"
							checked={imageToRight}
							onChange={(value) => setAttributes({ imageToRight: value })}
						/>
					</PanelRow>
					<PanelRow>
						{!image.url ? (
							<MediaPlaceholder
								labels={{
									title: __('Icon'),
									name: __('Icon'),
								}}
								onSelect={onSelectImage}
								allowedTypes={['image']}
								accept="image/*"
								type="image"
								multiple={false}
								{...props}
							/>
						) : (
							<div className="imageFrame">
								<img src={image.url} className="w-full components-base-control" />
								<Button
									className="remove-image is-button button-secondary"
									onClick={onRemoveImage}
								>
									{<div>{__('Remove image', 'commvault')}</div>}
								</Button>
							</div>
						)}
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div className='block__container__innerblocks'>
				<TagBlock text={props.name} />
				<div {...blockProps} >
					{image.url && (
						<div className="imageFrame">
							<img src={image.url} className="w-full" />
						</div>
					)}
					<div {...innerBlocksProps} />
				</div>
			</div>
		</>

	);
}
