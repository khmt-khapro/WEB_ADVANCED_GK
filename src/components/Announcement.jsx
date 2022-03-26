import styled from "@emotion/styled"
import {mobile} from "../responsive"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-style: 14px;
    ${mobile({ fontSize: "12px" })}
`

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping AROUND THE WORLD Orders Over $50
    </Container>
  )
}

export default Announcement