import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import {
	PanelBody, PanelRow, __experimentalInputControl as InputControl, ToggleControl, __experimentalDimensionControl as DimensionControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption
} from '@wordpress/components';

import { ReactComponent as Icon } from './assets/arrow.svg';


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

	const { buttonText, buttonLink, borderRadius, buttonSize, icon, iconPosition } = attributes;

	const blockProps = useBlockProps({
		className: `bMg-button ${borderRadius ? 'bMg-button-rounded' : ''} ${buttonSize ? `bMg-button-${buttonSize}` : ''}`,
	});


	return (
		<>
			<InspectorControls>
				<PanelBody title="Button Settings" initialOpen={true} className="panel-body-class">
					<PanelRow>
						<div style={{ flex: 1 }}>
							<InputControl
								label="Url"
								labelPosition="top"
								value={buttonLink ?? "#"}
								type="email"
								onChange={
									(buttonLink) => setAttributes({ buttonLink })
								}
							/>
							<DimensionControl
								label={'Size'}
								onChange={(buttonSize) => setAttributes({ buttonSize })}
								value={buttonSize}
								sizes={[
									{
										"name": "Xs",
										"slug": "small"
									},
									{
										"name": "Md",
										"slug": "medium"
									},
									{
										"name": "Lg",
										"slug": "large"
									},
								]}
							/>
							<ToggleControl
								label="Rounded"
								checked={borderRadius}
								onChange={(borderRadius) => setAttributes({ borderRadius })}
							/>
							<ToggleControl
								label="Show Icon"
								checked={icon}
								onChange={(icon) => setAttributes({ icon })}
							/>

							{icon &&
								<ToggleGroupControl label="Icon Position" value={iconPosition} isBlock onChange={(iconPosition) => setAttributes({ iconPosition })}>
									<ToggleGroupControlOption value="left" label="Left" />
									<ToggleGroupControlOption value="right" label="Right" />
								</ToggleGroupControl>
							}
						</div>

					</PanelRow>
				</PanelBody>

			</InspectorControls>
			<div {...blockProps}>

				{
					icon ? (
						iconPosition == 'left' ? (
							<>
								<Icon style={{ fill: 'currentColor' }} />
								<RichText
									placeholder={__('Add text…', 'blocksMg')}
									value={buttonText ?? "Add text…"}
									onChange={(buttonText) => setAttributes({ buttonText })}
									rel="noopener noreferrer"
									allowedFormats={['core/bold', 'core/italic']}
								/>
							</>
						) : (
							<>
								<RichText
									placeholder={__('Add text…', 'blocksMg')}
									value={buttonText ?? "Add text…"}
									onChange={(buttonText) => setAttributes({ buttonText })}
									rel="noopener noreferrer"
									allowedFormats={['core/bold', 'core/italic']}
								/>
								<Icon style={{ fill: 'currentColor' }} />
							</>
						)
					)
						: <RichText
							placeholder={__('Add text…', 'blocksMg')}
							value={buttonText ?? "Add text…"}
							onChange={(buttonText) => setAttributes({ buttonText })}
							rel="noopener noreferrer"
							allowedFormats={['core/bold', 'core/italic']}
						/>
				}



			</div>
		</>
	);
}
