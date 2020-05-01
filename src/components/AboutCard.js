import React from 'react';
import '../Profile.css'
import { Link } from 'react-router-dom';


class AboutCard extends React.Component {
    render() {
        return (
            <div>
            <header>

	<div class="container">

		<div class="profile">

			<div class="profile-image">

				<img src={this.props.user.profilePic} alt="" />

			</div>

			<div class="profile-user-settings">

				<h1 class="profile-user-name">{this.props.user.profileHandle}</h1>

				<button class="btn profile-edit-btn">Edit Profile</button>

				<button class="btn profile-settings-btn" aria-label="profile settings"><i class="fas fa-cog" aria-hidden="true"></i></button>

			</div>

			<div class="profile-stats">

				<ul>
					<li><span class="profile-stat-count">{this.props.user.postCount}</span> posts </li>
					<li><span class="profile-stat-count">{this.props.user.followers}</span> followers </li>
					<li><span class="profile-stat-count">{this.props.user.following}</span> following </li>
				</ul>

			</div>

			<div class="profile-bio">

				<p><span class="profile-real-name">{this.props.user.fullName}</span> {this.props.user.bio} 📷✈️🏕️</p>

			</div>

		</div>

	</div>

</header>

            </div>
        )
    }
}

export default AboutCard    ;