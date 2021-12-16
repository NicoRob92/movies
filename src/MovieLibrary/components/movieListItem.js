import React from 'react';
import styled from 'styled-components'
export default function({movie}){

    const image ='https://image.tmdb.org/t/p/original/' + movie.poster_path
    function handleClick(e){
        e.preventDefault();

    }
    return(
        <Card className="card" onClick={(e)=>handleClick(e)} >
            <img  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="Img not Found"/>   
            {/* <Title>{movie.title}</Title>         */}
        </Card>
        
    )


}

// const fondo = `https://image.tmdb.org/t/p/original/${movie.poster_path}`

const Card = styled.div`
display: flex;
flex-direction:column;
width: 15%;
margin: 1%;
height: 5%;
border:solid black;
min-height:200px;
max-height:500px;
transition:.4s;
&img{
    width:100%;
    height:100%
}
&:hover{
    transition:.4s;
    transform:scale(1.2,1.2)
}
`;

const Title = styled.h3`
position: relative;
bottom:20px;
width:100%;
`