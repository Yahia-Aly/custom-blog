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

    return (
        <Fade direction="top" duration={1000} triggerOnce cascade>
            <CaseLink href={props.route} target={props.newTab ? '_blank' : null}>
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
                            onClick={() => history.push(`/api/posts/:${props._id}`)}
                        />
                    </CaseStudyContent>
                    <CaseStudyImage background={props.color}>
                        <img src={props.thumbnail} alt=""/>
                    </CaseStudyImage>
                </CaseStudyContainer>
            </CaseLink>
        </Fade>
    );
}

export default Project;