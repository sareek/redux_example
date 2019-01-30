import React, { Component } from 'react'
import Axios from 'axios';

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loaded: false

        }

    }


    componentWillMount() {


        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                this.setState({ posts: posts, loaded: true });


            });

    }

    render() {

        const { posts } = this.state;
        const postItems = posts.map(function (item, key) {

            return (
                <tr key={key}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                </tr>
            )

        });


        return (
            <div>
                <h1>Posts</h1>
                {console.log('final', posts)}
                <table>
                    <tbody>
                        {postItems}

                    </tbody>
                </table>

            </div>
        )
    }
}
export default Post
