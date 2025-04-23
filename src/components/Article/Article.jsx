import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    Container,
    CaseLink,
    CaseStudyContainer,
    CaseStudyContent,
    CaseStudyImage
} from '../StyledComponents/StyledComponents';
import { ClientText } from "./Style";
import Button from '../Utility/Button';
import { Fade } from 'react-awesome-reveal';

const Project = (props) => {
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        history.push(`/post/${props._id}`);
    };

    return (
        <Fade direction="top" duration={1000} triggerOnce cascade>
            <CaseStudyContainer>
                <CaseStudyContent>
                    <Container flexRow leftAlign>
                        <ClientText>{props.date}</ClientText>
                    </Container>
                    
                    <div>
                        <h2>{props.title}</h2>
                        <p>{props.description}</p>
                    </div>

                    <Button
                        right
                        text="Read More"
                        onClick={handleClick}
                    />
                </CaseStudyContent>
                <CaseStudyImage background={props.color}>
                    <img src={props.thumbnail} alt=""/>
                </CaseStudyImage>
            </CaseStudyContainer>
        </Fade>
    );
}

export default Project;