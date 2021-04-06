import React from 'react'
import PropTypes from 'prop-types'

const imageDefaultStyle = {
	height: 20,
	width: 20,
}
const textDefaultStyle = {
	fontSize: 12,
	fontFamily: '"Source Code Pro", monospace',
	paddingLeft: 5,
	verticalAlign: 'top',
	top: 3,
	position: 'relative',
	color: '#000000',
}

const BlockstackSignInButton = props => {
	const {
		renderNothing,
		signOutBtnText,
		signInBtnText,
		includeBlockstackLogo,
		signInStyle,
		signOutStyle,
		isSignedIn,
		imageStyle,
		textStyle,
		style,
		img,
	} = props

	let { defaultStyle } = props

	if (renderNothing) {
		return null
	}

	const imageInlineStyle = Object.assign({}, imageDefaultStyle, imageStyle)
	let altImg = null
	if (img) {
		altImg = img
	}

	const image = includeBlockstackLogo ? (
		<img src="apple-touch-icon.png" alt="Double sundae Logo" style={imageInlineStyle} />
	) : (
		altImg
	)

	const textInlineStyle = Object.assign({}, textDefaultStyle, textStyle)

	const signOutInlineStyle = Object.assign(
		{},
		defaultStyle,
		style,
		signOutStyle
	)
	if (isSignedIn) {
		return (
			<button onClick={props.signOut} style={signOutInlineStyle}>
				{image}
				<span style={textInlineStyle}>{signOutBtnText}</span>
			</button>
		)
	}

	const signInInlineStyle = Object.assign({}, defaultStyle, style, signInStyle)
	return (
		<button onClick={props.signIn} style={signInInlineStyle}>
			{image}
			<span style={textInlineStyle}>{signInBtnText}</span>
		</button>
	)
}

BlockstackSignInButton.propTypes = {
	renderNothing: PropTypes.bool,
	signOutBtnText: PropTypes.string,
	signInBtnText: PropTypes.string,
	includeBlockstackLogo: PropTypes.bool,
	// eslint-disable-next-line react/forbid-prop-types
	style: PropTypes.object,
	// eslint-disable-next-line react/forbid-prop-types
	defaultStyle: PropTypes.object,
	// eslint-disable-next-line react/forbid-prop-types
	imageStyle: PropTypes.object,
	// eslint-disable-next-line react/forbid-prop-types
	textStyle: PropTypes.object,
	// eslint-disable-next-line react/forbid-prop-types
	signInStyle: PropTypes.object,
	// eslint-disable-next-line react/forbid-prop-types
	signOutStyle: PropTypes.object,
	isSignedIn: PropTypes.bool.isRequired,
	signOut: PropTypes.func.isRequired,
	signIn: PropTypes.func.isRequired,
	img: PropTypes.object,
}

BlockstackSignInButton.defaultProps = {
	renderNothing: false,
	signOutBtnText: 'Logout',
	signInBtnText: 'Login',
	includeBlockstackLogo: true,
	defaultStyle: null,
	style: { padding: '8.5px' },
	signInStyle: {},
	signOutStyle: {},
	imageStyle: {},
	textStyle: {},
	img: null,
}

export default BlockstackSignInButton
