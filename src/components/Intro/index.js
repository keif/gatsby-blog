import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const IntroSection = styled.section`
	&:before {
		content: '';
		position: absolute;
		width: 100%;
		height: 390px;
		background-color: #fcfcfc;
		background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%23ececec' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E");
		z-index: -1;
		margin-top: -60px;
	}
	a {
		align-self: flex-start;
	}
	padding: 60px 0 30px 0;
`

const IntroContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1200px;
	width: 100%;
	margin: 0 auto;

	@media (max-width: 1200px) {
		padding: 0 15px;
	}
`

const IntroHeading = styled.h1`
	position: relative;
	max-width: 800px;
	margin-bottom: 0;
	color: #dd390f;
`
const IntroSubHeading = styled.h1`
	position: relative;
	max-width: 800px;
	margin-bottom: 0;
	color: #696969;
	&:after {
		content: '';
		display: block;
		width: 160px;
		height: 3px;
		background-color: #dd390f;
		margin: 30px 0;
	}
`
const IntroText = styled.p`
	max-width: 700px;
	margin-bottom: 0;
	color: #696969;
`

const AllPosts = styled(Link)`
	color: #dd390f;
	float: right;
	padding: 10px 0;
	border: 1px solid transparent;
	transition: all 0.5s ease-in;
	background: transparent;
	position: relative;
	&:after {
		content: '→';
		font-size: 25px;
		display: inline-block;
		color: #dd390f;
		padding-left: 0.5em;
	}
`
const Intro = () => (
	<IntroSection>
		<IntroContainer>
			<IntroHeading>WEB DEVELOPER.</IntroHeading>
			<IntroSubHeading>TECH AND SCIENCE ENTHUSIAST.</IntroSubHeading>
			<IntroText>
				Usually here you could read that the person is an award wining developer
				or designer. That he is a fullstack ninja rockstar developer able to
				solve all your problems. So if you are looking for one, sorry, you are
				in a wrong place. To be honest, right now, I tend to break more then I
				fix. But that doesn't stop me from being highly motivated and very eager
				to learn. Ever since I was 13 I haven't been able to imagine myself
				doing anything else. I'm currently focussed on improving my React skills
				and building great websites with User Experience in mind.
			</IntroText>
			<AllPosts to="/about">Read the full bio</AllPosts>
		</IntroContainer>
	</IntroSection>
)

export default Intro
