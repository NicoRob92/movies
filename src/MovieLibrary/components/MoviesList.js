import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import styled from 'styled-components'
import MovieListItem from './movieListItem'
import './MoviesList.css'
import arrow from "./Arrow.svg"

export default function MoviesList({movies}) {
  const [show,setShow] = useState(true)
  const [movie,setMovie] = useState({})
  const mov = useSelector(state => state.movieLib.movies)
  // [{id: x} , {}, {}]

  function handleModal(id, dir) {
    let found = mov.find(e => e.id === id)
    let indexModal = mov.indexOf(found)
    if(indexModal > 0 && indexModal <= mov.length - 1)
      setMovie(dir === "left" ? mov[indexModal - 1] : mov[indexModal + 1])
    else if (indexModal === 0 && dir !== "left") setMovie(mov[1])
  }

  function handleClickOpen(m){ 
       setShow(!show)
       setMovie(m)      
      }
  function handleClickClose(){ 
       setShow(!show)           
      }
    return (
      <Container>        
        <Movies id="prueba">
          {
            movies.map(movie =>
              <MovieListItem key={movie.id} movie={movie} onClick={()=> handleClickOpen(movie)} />
                      
            )
          }                     
        </Movies>
       <Modal hidden ={show} >
         <ModalInside>
         <ButtonLeft onClick={()=> handleModal(movie.id, "left")} style={{backgroundImage: `url(${arrow})`}}></ButtonLeft>
        <CenterInfo>
            <TitleMovie>{movie.title?.length > 24 ? movie.title.slice(0, 21) + "..." : movie.title}</TitleMovie> 
           <Img onClick={()=> handleClickClose()} id ={movie.id} style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`}}>
              {/* <Classification>{movie.adult === true ? "+18" : "APT"}</Classification> */} 
            </Img>
              <Paragraph>{movie.overview?.length > 354 ? movie.overview.slice(0, 354) + "..." : movie.overview}</Paragraph>
        </CenterInfo>
         <ButtonRight onClick={()=> handleModal(movie.id, "right")} style={{backgroundImage: `url(${arrow})`}}></ButtonRight>
         </ModalInside>
       </Modal>      
       
      </Container>
    )
  }


  const Container = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
  width: 100%;
  height: 100%;
  
  
  `;

const Movies = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:center;
align-items:center;
width: 90%;
height: 100%;
background-color:rgba(0,0,0,.3)

`;
const Modal = styled.div`
transition: .6s;
position:fixed;
background-color:rgba(0,0,0,0.8);
top:0;
bottom:0;
left:0;
right:0;
width:100vw;
height:100vh;
backdrop-filter: blur(10px);
`;

const Img = styled.div`
/* position: relative;
top:20%; */
display: flex;
width:100%;
height:80%;
background-color:rgba(0,0,0);
color: white;
margin:auto;
background-image: url("https://image.tmdb.org/t/p/original/"+{movie.poster_path});
background-size: 100% 100%;
background-repeat: no-repeat;
background-position:center;
`;

const ModalInside = styled.div`
width: 50vw;
height: 100vh;
display: flex;
margin:auto;
justify-content: center;
align-items: center;
align-content: center;

`;

const CenterInfo = styled.div`
display:flex;
height: 90%;
flex-wrap: wrap;
width: 60%;
`;

const Paragraph = styled.p`

font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 16px;
  width: 100%;
  height:20%;
  color: white;
  z-index: 3;

`;
const TitleMovie = styled.h2`
font-family: 'Bebas Neue', cursive;
  font-size: 45px;
  font-weight: 300;
  color: white;
  width:100%;
  z-index: 3;
  text-align: center;
  margin: auto;

`;
const Classification = styled.p`
  font-family: 'Anton', sans-serif;
  width: 80%;
  color: white;
  position: relative;
  left: 18.5%;
  justify-content:flex-end;
`;

const ButtonLeft = styled.button`
border: 1px solid white;
width: 10%;
height: 10%;
margin-right: 5%;
  position: relative;
background: transparent;
border: none; 
background-size: contain;
background-repeat: no-repeat;
transform: rotate(180deg);
`;
const ButtonRight = styled.button`
width: 10%;
  position: relative;
margin-left: 5%;
height: 10%;
background: transparent;
border: none; 
background-size: contain;
background-repeat: no-repeat;
`;




