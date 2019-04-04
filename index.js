import cx from 'classnames';
import { Component } from 'react';

export default class LikeDislike extends Component {
	constructor() {
		super()
		this.state = {
			alreadyLiked: false,
			alreadyDisliked: false,
			likes: 100,
			dislikes: 25
		}
	}

	handleLike = () => {
	    if (this.state.alreadyLiked === false) {
    		if (this.state.alreadyLiked === false) {
    			this.setState({
    				likes: this.state.likes + 1,
    				alreadyLiked: true
    			})
    			this.liked();
    		} else {
    			this.setState({
    				likes: this.state.likes - 1,
    				alreadyLiked: false
    			})
    			this.liked();
    		}
	    } else {
			this.setState({
				dislikes: this.state.dislikes - 1,
				alreadyDisliked: false,
				likes: this.state.likes + 1,
				alreadyLiked: false
			})
		}

	}

	handleDislike = () => {
		if (this.state.alreadyLiked === false) {	
			if (this.state.alreadyDisliked === false) {
				this.setState({
					dislikes: this.state.dislikes + 1,
					alreadyDisliked: true
				})
			} else {
				this.setState({
					dislikes: this.state.dislikes - 1,
					alreadyDisliked: false
				})
			}
		} else {
			this.setState({
				dislikes: this.state.dislikes - 1,
				alreadyDisliked: false,
				likes: this.state.likes + 1,
				alreadyLiked: false
			})
		}
	}


	render() {
		return ( <
			>
			<div>
					<h2>Like/Dislike</h2>
				</div> <
			button className = { this.state.alreadyLiked ? 'liked like-button' : 'like-button' } onClick = { this.handleLike } >
			Like | { this.state.likes } <
			/button> <
			button className = { this.state.alreadyDisliked ? 'disliked like-button' : 'dislike-button' } onClick = { this.handleDislike } >
			Dislike | { this.state.dislikes } <
			/button> <style > { `
					.like-button, .dislike-button {
						font-size: 1rem;
						padding: 5px 10px;
						color:   #585858;
					}

					.liked, .disliked {
						font-weight: bold;
						color: #1565c0;
					}
				` } < /style> <
			/>
		);
	}
}