import React from 'react'
import styled from "styled-components";

const Message = () => {
    return (
        <Container>
            <h1>Pick some ingredients</h1>
            {/* it wouldn't be a good combination of ingredients */}
            {/* there is no pizza made with these ingredients */}
            {/* seriously? would you eat a pizza like that? */}
        </Container>
    )
}

const Container = styled.div`
 text-align: center;
 padding: 1.5rem;
`;

export default Message
