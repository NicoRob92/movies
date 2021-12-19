//This component receive the movie and renders it
import React from 'react';
import styled from 'styled-components'

export default function({movie, onClick}){
    
   
    return(
        <Card className="cards" onClick={onClick}>
            <Image src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>   
        </Card>    
    )


}
const Card = styled.div`
opacity: 0;
display: flex;
flex-direction:row;
width: 13%;
margin: 1%;
margin-top:5%;
margin-bottom: 2%;
height: 45%;
justify-content: center;
align-items: center;
min-height:45%;
transition:.4s ease-in;
box-shadow: 6px 8px 25px -3px rgba(0,0,0,0.4);
border-bottom-left-radius: 15px;
border-top-right-radius: 15px;
transform: translateX(-50px);

&.visible{
    opacity:1;
    /* animation-name: puff-in-center;
      animation-duration: 1s;
      animation-timing-function: ease;
      animation-delay: 0s;
      animation-iteration-count: 1;
      animation-direction: normal;
      animation-fill-mode: none; */
      transform: translateX(0px);
      transition:.4s;

      &:hover{
    transition:.4s;
    transform:scale(1.05,1.07)    
}

}


@keyframes puff-in-center {
  0%{
    -webkit-transform: scale(2);
    transform: scale(2);
    filter: blur(4px);
    opacity: 0;
  }
  100%{
    -webkit-transform: scale(1);
    transform: scale(1);
    filter: blur(0);
    opacity: 1;
  }
}
`;

const Image = styled.img`
border-radius: 4px; 
border-bottom-left-radius: 15px;
border-top-right-radius: 15px;
width: 100%;
height: 100%;
`