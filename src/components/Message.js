import styled from "styled-components";

const Message = () => {
    const messages = [
        "It wouldn't be a good combination of ingredients",
        "There is no pizza made with these ingredients",
        "Seriously? Would you eat a pizza like that?",
        "Nothing good would come out of these ingredients",
        "Pizza no found - select fewer ingredients",
        "You want to get stomach pain? Change ingredients",
        "There is no such pizza on this menu",
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    return (
        <Container>
            <h1>{randomMessage}</h1>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 3.5rem;
`;

export default Message
