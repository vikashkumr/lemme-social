import React from "react";
import AboutCard from "../AboutCard.js";
import Gallery from "../Gallery.js";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        profilePic: "",
        profileHandle: "",
        postCount: 0,
        followers: 0,
        following: 0,
        fullName: "",
        bio: "",
        media: [],
      },
      loggedIn: true,
    };
  }

  render() {
    //For time being default user's data is set into state
    //otherwise all data will come as user object from backend
    if (this.state.loggedIn) {
      this.setState({
        user: {
          profilePic:
            "https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces",
          profileHandle: "janedoe_",
          postCount: 164,
          followers: 188,
          following: 206,
          fullName: "Jane Doe",
          bio: "Travel is love",
          //media is an array of objects, having url, mediaType, likes and comments as keys
          media: [
            {
              url:
                "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop",
              mediaType: "image",
              captionBody: "",
              likes: 56,
              commentsCount: 2,
              comments: [
                {
                  userURL:
                    "https://www.gravatar.com/avatar/9bb0e3b751195864d752db1cca86b594?s=45",
                  userName: "Spider Singh",
                  commentDate: "15 days ago",
                  commentBody:
                    "Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae, porta ut est.",
                },
                {
                  userURL:
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=",
                  userName: "Spider Singh",
                  commentDate: "15 days ago",
                  commentBody:
                    "Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae, porta ut est.",
                },
                {
                  userURL:
                    "https://www.gravatar.com/avatar/9bb0e3b751195864d752db1cca86b594?s=45",
                  userName: "Antoino Kumar",
                  commentDate: "15 days ago",
                  commentBody:
                    "Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae, porta ut est.",
                },
              ],
            },
            {
              url:
                "https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop",
              mediaType: "image",
              captionBody: "",
              likes: 78,
              commentsCount: 3,
              comments: [
                {
                  userURL:
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=",
                  userName: "William Tagore",
                  commentDate: "15 days ago",
                  commentBody:
                    "Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae, porta ut est.",
                },
                {
                  userURL:
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=",
                  userName: "Mac Chaturvedi",
                  commentDate: "15 days ago",
                  commentBody:
                    "Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae, porta ut est.",
                },
                {
                  userURL:
                    "https://www.gravatar.com/avatar/9bb0e3b751195864d752db1cca86b594?s=45",
                  userName: "Robert Patil",
                  commentDate: "15 days ago",
                  commentBody:
                    "Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae, porta ut est.",
                },
              ],
            },
            {
              url:
                "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop",
              mediaType: "image",
              captionBody: "",
              likes: 87,
              commentsCount: 1,
              comments: [
                {
                  userURL:
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=",
                  userName: "Mac Gates",
                  commentDate: "15 days ago",
                  commentBody:
                    "Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae, porta ut est.",
                },
              ],
            },
            {
              url:
                "https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop",
              mediaType: "image",
              captionBody: "",
              likes: 9,
              commentsCount: 2,
              comments: [
                {
                  userURL:
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=",
                  userName: "Mukesh Clive",
                  commentDate: "15 days ago",
                  commentBody:
                    "Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae, porta ut est.",
                },
                {
                  userURL:
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=",
                  commentDate: "15 days ago",
                  commentBody:
                    "Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae, porta ut est.",
                },
              ],
            },
            {
              url:
                "https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=500&h=500&fit=crop",
              mediaType: "image",
              captionBody: "",
              likes: 22,
              commentsCount: 5,
              comments: [
                {
                  userURL:
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=",
                  userName: "Chris Pandey",
                  commentDate: "15 days ago",
                  commentBody:
                    "Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae, porta ut est.",
                },
                {
                  userURL:
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=",
                  userName: "Jack Singh",
                  commentDate: "15 days ago",
                  commentBody:
                    "Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae, porta ut est.",
                },
                {
                  userURL:
                    "https://www.gravatar.com/avatar/9bb0e3b751195864d752db1cca86b594?s=45",
                  userName: "Pankaj Pratap",
                  commentDate: "15 days ago",
                  commentBody:
                    "Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae, porta ut est.",
                },
                {
                  userURL:
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=",
                  userName: "Spidey Singh",
                  commentDate: "15 days ago",
                  commentBody:
                    "Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae, porta ut est.",
                },
                {
                  userURL:
                    "https://www.gravatar.com/avatar/9bb0e3b751195864d752db1cca86b594?s=45",
                  userName: "Atif Joshi",
                  commentDate: "15 days ago",
                  commentBody:
                    "Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae, porta ut est.",
                },
              ],
            },
            {
              url:
                "https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop",
              mediaType: "image",
              captionBody: "",
              likes: 46,
              commentsCount: 1,
              comments: [
                {
                  userURL:
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=",
                  userName: "Dhanush Bacchan",
                  commentDate: "15 days ago",
                  commentBody:
                    "Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae, porta ut est.",
                },
              ],
            },
            {
              url:
                "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop",
              mediaType: "image",
              captionBody: "",
              likes: 29,
              commentsCount: 1,
              comments: [
                {
                  userURL:
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=",
                  userName: "Jack Tiwari",
                  commentDate: "15 days ago",
                  commentBody:
                    "Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae, porta ut est.",
                },
              ],
            },
            {
              url:
                "https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop",
              mediaType: "image",
              captionBody: "",
              likes: 78,
              commentsCount: 3,
              comments: [
                {
                  userURL:
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=",
                  userName: "Shahid Patel",
                  commentDate: "15 days ago",
                  commentBody:
                    "Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae, porta ut est.",
                },
                {
                  userURL:
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=",
                  userName: "Ron Kumar",
                  commentDate: "15 days ago",
                  commentBody:
                    "Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae, porta ut est.",
                },
                {
                  userURL:
                    "https://www.gravatar.com/avatar/9bb0e3b751195864d752db1cca86b594?s=45",
                  userName: "Jeet Paul",
                  commentDate: "15 days ago",
                  commentBody:
                    "Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae, porta ut est.",
                },
              ],
            },
            {
              url:
                "https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=500&fit=crop",
              mediaType: "image",
              captionBody: "",
              likes: 99,
              commentsCount: 3,
              comments: [
                {
                  userURL:
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=",
                  userName: "Picaso Bhatt",
                  commentDate: "15 days ago",
                  commentBody:
                    "Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae, porta ut est.",
                },
                {
                  userURL:
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=",
                  userName: "Camily Chandra",
                  commentDate: "15 days ago",
                  commentBody:
                    "Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae, porta ut est.",
                },
                {
                  userURL:
                    "https://www.gravatar.com/avatar/9bb0e3b751195864d752db1cca86b594?s=45",
                  userName: "Bill Singh",
                  commentDate: "15 days ago",
                  commentBody:
                    "Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae, porta ut est.",
                },
              ],
            },
            {
              url:
                "https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=500&h=500&fit=crop",
              mediaType: "image",
              captionBody: "",
              likes: 97,
              commentsCount: 1,
              comments: [
                {
                  userURL:
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=",
                  userName: "Ronit Khan",
                  commentDate: "15 days ago",
                  commentBody:
                    "Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae, porta ut est.",
                },
              ],
            },
            {
              url:
                "https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=500&h=500&fit=crop",
              mediaType: "image",
              captionBody: "",
              likes: 89,
              commentsCount: 2,
              comments: [
                {
                  userURL:
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=",
                  userName: "Mock Tiwari",
                  commentDate: "15 days ago",
                  commentBody:
                    "Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae, porta ut est.",
                },
                {
                  userURL:
                    "https://www.gravatar.com/avatar/9bb0e3b751195864d752db1cca86b594?s=45",
                  userName: "Preeti Williams",
                  commentDate: "15 days ago",
                  commentBody:
                    "Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae, porta ut est.",
                },
              ],
            },
            {
              url:
                "https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=500&h=500&fit=crop",
              mediaType: "image",
              captionBody: "",
              likes: 103,
              commentsCount: 1,
              comments: [
                {
                  userURL:
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=",
                  userName: "Zemini Singh",
                  commentDate: "15 days ago",
                  commentBody:
                    "Fusce sodales magna id porta egestas. Nulla massa est, hendrerit nec auctor vitae, porta ut est.",
                },
              ],
            },
          ],
        },
        loggedIn: false,
      });
    }
    return (
      <div>
        <AboutCard user={this.state.user} />
        {<Gallery user={this.state.user} />}
      </div>
    );
  }
}

export default Profile;
