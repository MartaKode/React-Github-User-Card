import styled from 'styled-components'
import stars from './stars.jpeg'

export const Button = styled.button`
border-radius: ${props => props.radius || '5px'};
border: 5px groove orange;
/* background-color: darkgray; */
/* font-size: 2rem; */


@keyframes pulse1 {
  0% {
    color: orange;
  }
 100% {
    color: black;
  }
}

animation: pulse1 3s ease infinite alternate;
`

export const Container = styled.div`
border: 50px solid blue;
border-image: url(${props => props.img || stars});
background-color: ${props => props.background || 'rgb(255,255,255, .9)'};
margin: 5px;

font-weight: ${props => props.weight || 'bold'};
text-shadow: ${props => props.shadow || '3px 3px 5px black'};
color: black;
`

export const SmallContainer =styled.div`
background-color: ${props => props.background || 'rgb(94,96,108, .6)'};
border-bottom: 4px dotted orange;
border-right: 4px dotted orange;
border-left: 4px dotted papayawhip;
border-top: 4px dotted papayawhip;
margin: 5px;
width: 60%;
/* border: 4px dotted papayawhip;
border-top:none; */
`