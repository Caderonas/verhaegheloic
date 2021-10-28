import React from 'react'
import { sphere_with_waves } from "./sphere_with_waves";
import './presentation.scss';

class Presentation extends React.Component {
	componentDidMount() {
		sphere_with_waves();
	}
	render() {
		return (
			<div ref={ref => (this.mount = ref)} className="presentation">
				<section className="topRight">
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
					<div id="arrow_right">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 751.72 658.66">
							<g id="arrow_1" data-name="Calque 1">
								<path class="arrow" d="M380.9,0H742.72a9,9,0,0,1,9,9h0a9,9,0,0,1-9,9H392.9a9,9,0,0,0-7.78,4.48L18.27,654.17a9,9,0,0,1-12.35,3.24l-1.48-.87a9,9,0,0,1-3.22-12.28L373.12,4.48A9,9,0,0,1,380.9,0Z"/>
							</g>
						</svg>
					</div>
					
				</section>
				<section className="topLeft">
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
					<div id="arrow_left">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 751.72 658.66">
							<g id="arrow_1" data-name="Calque 1">
								<path class="arrow" d="M380.9,0H742.72a9,9,0,0,1,9,9h0a9,9,0,0,1-9,9H392.9a9,9,0,0,0-7.78,4.48L18.27,654.17a9,9,0,0,1-12.35,3.24l-1.48-.87a9,9,0,0,1-3.22-12.28L373.12,4.48A9,9,0,0,1,380.9,0Z"/>
							</g>
						</svg>
					</div>
				</section>
			</div>
		);
	}
	
}
export default Presentation;