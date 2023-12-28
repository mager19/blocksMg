/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, useInnerBlocksProps, InspectorControls } from '@wordpress/block-editor';

import {
	PanelBody, ToggleControl, __experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon, FontSizePicker
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import { TagBlock } from '../../components/tagBlock';
import left from '../../global-assets/left.svg';
import center from '../../global-assets/center.svg';
import right from '../../global-assets/right.svg';

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

	const { eyebrow, title, description, showEyebrow, showDescription, showButtons, justifyContent } = attributes;

	const blockProps = useBlockProps({
		className: `block-blocksMg`,
		style: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: justifyContent,
			textAlign: justifyContent === 'flex-end' ? 'right' : (justifyContent === 'center' ? 'center' : 'left')
		}
	});

	const innerBlocksProps = useInnerBlocksProps({}, {
		template: [["blocksmg/buttons"]],
		templateLock: true,
	})

	return (
		<>
			<InspectorControls>
				<PanelBody
					title="Section Header Settings"
					initialOpen={true} className="button-group-settings"
				>
					<ToggleControl
						label={__('Show Eyebrow', 'blocksMg')}
						checked={showEyebrow}
						onChange={(showEyebrow) => setAttributes({ showEyebrow })}
					/>

					<ToggleControl
						label={__('Show Description', 'blocksMg')}
						checked={showDescription}
						onChange={(showDescription) => setAttributes({ showDescription })}
					/>

					<ToggleControl
						label={__('Show Buttons', 'blocksMg')}
						checked={showButtons}
						onChange={(showButtons) => setAttributes({ showButtons })}
					/>

					<ToggleGroupControl
						label="Alignment"
						isBlock
						value={justifyContent}
						onChange={(newAlignment) => setAttributes({ justifyContent: newAlignment })}
					>
						<ToggleGroupControlOptionIcon
							icon={<img src={left} width={24} height={24} />}
							label="Left"
							value="flex-start"
						/>
						<ToggleGroupControlOptionIcon
							icon={<img src={center} width={24} height={24} />}
							label="Center"
							value="center"
						/>
						<ToggleGroupControlOptionIcon
							icon={<img src={right} width={24} height={24} />}
							label="Right"
							value="flex-end"
						/>
					</ToggleGroupControl>
				</PanelBody>
			</InspectorControls>
			<div className='block__container__innerblocks'>
				<TagBlock text={props.name} />
				<div {...blockProps} >
					<>
						{showEyebrow && (
							<RichText
								placeholder={__('Eyebrow', 'blocksMg')}
								tagName='span'
								value={eyebrow ?? "Add text…"}
								onChange={(eyebrow) => setAttributes({ eyebrow })}
								rel="noopener noreferrer"
								allowedFormats={['core/bold', 'core/italic']}
							/>
						)}
						<RichText
							placeholder={__('Suspendisse hendrerit neque.', 'blocksMg')}
							tagName='h1'
							value={title ?? "Add text…"}
							onChange={(title) => setAttributes({ title })}
							rel="noopener noreferrer"
							allowedFormats={['core/bold', 'core/italic']}
						/>

						{showDescription && (
							<RichText
								placeholder={__('Phasellus ac feugiat est, vitae eleifend urna. Vestibulum consectetur orci ac odio blandit consectetur. Vivamus consectetur sem quis urna placerat bibendume.', 'blocksMg')}
								tagName='p'
								value={description ?? "Add text…"}
								onChange={(description) => setAttributes({ description })}
								rel="noopener noreferrer"
								allowedFormats={['core/bold', 'core/italic']}
							/>
						)}

						{showButtons && (
							<div style={{ marginTop: '2rem' }}>
								<div {...innerBlocksProps} />
							</div>
						)}
					</>
				</div>
			</div>
		</>
	);
}
