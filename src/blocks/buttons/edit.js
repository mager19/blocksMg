/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls, useInnerBlocksProps } from '@wordpress/block-editor';
import {
	PanelBody, PanelRow,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon, __experimentalToggleGroupControlOption as ToggleGroupControlOption,
	RangeControl
} from '@wordpress/components';
import { TagBlock } from '../../components/tagBlock';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import left from './assets/left.svg';
import center from './assets/center.svg';
import right from './assets/right.svg';
import full from './assets/full.svg';
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

	const { justifyContent, gap } = attributes;

	const blockProps = useBlockProps({
		className: `block-blocksMg`,
		style: { gap: `${gap}px`, justifyContent: justifyContent }
	});
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		template: [["blocksmg/button", { "buttonText": "Read More" }]],
		allowedBlocks: ["blocksmg/button"],
	})

	return (
		<>
			<InspectorControls>
				<PanelBody title="Buttons Group Settings" initialOpen={true} className="button-group-settings">
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
						<ToggleGroupControlOptionIcon
							icon={<img src={full} width={24} height={24} />}
							label="Full"
							value="space-between"
						/>
					</ToggleGroupControl>


					<RangeControl
						initialPosition={10}
						label="Gap"
						max={48}
						min={0}
						value={gap}
						onChange={(newvalue) => { setAttributes({ gap: newvalue }) }}
					/>
				</PanelBody>
			</InspectorControls>
			<div className='block__container__innerblocks'>
				<TagBlock text={props.name} />
				<div {...innerBlocksProps} />
			</div>

		</>
	);
}
