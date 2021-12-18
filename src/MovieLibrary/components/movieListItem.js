import React from 'react';
import styled from 'styled-components'

export default function({movie, onClick}){
    
   
    return(

        <Card className="cards" onClick={onClick} >
            <Image src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>   
        </Card>
               
        
    )


}

// const fondo = `https://image.tmdb.org/t/p/original/${movie.poster_path}`

const Card = styled.div`
display: flex;
flex-direction:row;
width: 13%;
margin: 1%;
height: 3%;
justify-content: center;
align-items: center;
border-radius: 15px;
min-height:5%;
max-height:500px;
transition:.4s;
box-shadow: 6px 8px 25px -3px rgba(0,0,0,0.4);
background-image: url("https://th.bing.com/th/id/R.5bee51e255a7c3ddf5f67c137af4ea9a?rik=SWDCQXb7FL85VQ&riu=http%3a%2f%2ffc01.deviantart.net%2ffs71%2ff%2f2010%2f288%2f7%2f3%2f404___wallpaper_not_found____by_atwistedillusion-d30ttxg.jpg&ehk=W%2bF3tvSiSMeQskd7WzRZDmAtLpZBqnKoHj3MTneYjYs%3d&risl=&pid=ImgRaw&r=0");
&:hover{
    transition:.4s;
    transform:scale(1.1,1.1)
    
}
`;



const Image = styled.img`
 border-radius: 4px; 
border-bottom-left-radius: 15px;
border-top-right-radius: 15px;
width: 100%;
height: 150%;
`