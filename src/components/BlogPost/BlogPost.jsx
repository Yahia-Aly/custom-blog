import React from 'react';
import { marked } from 'marked';
import {
    BodyContainer,
    Container,
    Image
} from '../../components/StyledComponents/StyledComponents';
import Navigation from '../../components/Navigation/Navigation.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import styled from 'styled-components';

const ImageContainer = styled.div`
    width: 100%;
    max-width: 100%;
    margin: 4rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

class BlogPost extends React.Component {

    state = {
        markdown: ''
    }

    componentDidMount() {
      
        fetch(this.props.content)
            .then(response => {
                return response.text()
            })
            .then(text => {
                this.setState({
                    markdown: marked(text)
                })
        })
    }

    render() {

        const { markdown } = this.state;

        return (
            <Container>
                <ProgressBar />
                <Navigation />
                <BodyContainer>
                    <Container small top={12}>
                        <h1>{this.props.title}</h1>
                        <p>{this.props.date}</p>
                        <ImageContainer>
                            <Image src={this.props.image} alt={this.props.title} />
                        </ImageContainer>
                        <div id={`post_${this.props.id}`} dangerouslySetInnerHTML={{__html: markdown}}></div>
                    </Container>
                </BodyContainer>
                <Footer />
		    </Container>
        )
    }
}

export default BlogPost;