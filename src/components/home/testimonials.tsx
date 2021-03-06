import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FilePublicUrl, FluidImageSrc } from '../../types';
import FadeIn from '../fade-in';

/**
 *
 * @param {*} props
 * @see https://github.com/kenwheeler/slick/issues/245#issuecomment-315374816
 * about react-slick dot color change
 */
const arrowStyle = {
	position: 'absolute',
	display: 'block',
	height: '35px',
	width: '20px',
	top: '45%',
	color: '#fff',
	zIndex: 1,
	fontSize: '25px',
	opacity: 0.75,
	cursor: 'pointer',
} as React.CSSProperties;
const PrevArrow: React.FC = () => (
	<div className='slick-arrow-prev' style={arrowStyle}>
		<FontAwesomeIcon icon={faChevronLeft} />
	</div>
);
const NextArrow: React.FC = () => (
	<div className='slick-arrow-next' style={{ ...arrowStyle, right: 0 }}>
		<FontAwesomeIcon icon={faChevronRight} />
	</div>
);
export default function Testimonials() {
	const { bgImg, ourchurch, rcbc, flc, metro, kings } = useStaticQuery<{
		bgImg: FluidImageSrc;
		ourchurch: FilePublicUrl;
		rcbc: FilePublicUrl;
		flc: FilePublicUrl;
		metro: FilePublicUrl;
		kings: FilePublicUrl;
	}>(graphql`
		query TestimonialQuery {
			bgImg: file(relativePath: { eq: "testimonials-bg.jpg" }) {
				childImageSharp {
					fluid(quality: 100, maxWidth: 1600) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
			ourchurch: file(relativePath: { eq: "ourchurch.png" }) {
				publicURL
			}
			rcbc: file(relativePath: { eq: "rcbc.png" }) {
				publicURL
			}
			flc: file(relativePath: { eq: "flc.png" }) {
				publicURL
			}
			metro: file(relativePath: { eq: "metro.png" }) {
				publicURL
			}
			kings: file(relativePath: { eq: "kings.png" }) {
				publicURL
			}
		}
	`);
	return (
		<BackgroundImage
			Tag='section'
			className='container-fluid p-0 testimonial'
			fluid={bgImg.childImageSharp.fluid}
			backgroundColor='#e10332'
		>
			<FadeIn fade='up'>
				<div className='container text-center text-white'>
					{/* <h2>Churches We Work With</h2> */}
				</div>
				<div className='row m-0'>
					<div className='container text-center my-5 slick-panel'>
						{/* <Slider
							dots
							infinite
							speed={500}
							slidesToShow={3}
							slidesToScroll={3}
							autoplay
							prevArrow={<PrevArrow />}
							nextArrow={<NextArrow />}
							responsive={[
								{
									breakpoint: 992,
									settings: {
										slidesToShow: 2,
										slidesToScroll: 2,
									},
								},
								{
									breakpoint: 768,
									settings: {
										slidesToShow: 1,
										slidesToScroll: 1,
									},
								},
							]}
						>
							<img src={ourchurch.publicURL} className='w-25' alt='ourchurch' />
							<img src={rcbc.publicURL} className='w-25' alt='rcbc' />
							<img src={flc.publicURL} className='w-25' alt='flc' />
							<img src={metro.publicURL} className='w-25' alt='metro' />
							<img src={kings.publicURL} className='w-25' alt='kings' />
						</Slider> */}
					</div>
				</div>
			</FadeIn>
		</BackgroundImage>
	);
}
