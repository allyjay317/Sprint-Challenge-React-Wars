// Write your Character component here
import React, { useState, useEffect } from 'react'
import { Col, Card, CardHeader, CardText, CardBody, CardFooter, CardSubtitle} from 'reactstrap'
import Axios from 'axios';

function Character(props){
    const [films, setFilms] = useState([]);
    useEffect(()=>{
        setFilms([]);
        props.data.films.forEach(film =>{
            Axios.get(film)
                .then(data =>{
                    let newFilm = {
                        "episode": data.data.episode_id,
                        "title": data.data.title
                    }
                    setFilms(films => [...films, newFilm])
                })
            
        })
    }, [props.data])
    return (
        <Col xs='12' sm='6' lg='4'>
            <Card style={{height:"100%"}}>
                <CardHeader>
                    <CardText>
                        {props.data.name}
                    </CardText>
                </CardHeader>
                <CardBody>
                    <CardText>
                        Born: {props.data.birth_year}
                    </CardText>
                    <CardText>
                        Hair Color: {props.data.hair_color}
                    </CardText>
                    <CardText>
                        Eye Color: {props.data.eye_color}
                    </CardText>
                    <CardText>
                        Gender: {props.data.gender}
                    </CardText>
                    <CardText>
                        Skin Color: {props.data.skin_color}
                    </CardText>
                    
                </CardBody>
                <CardFooter>
                    <CardSubtitle>
                        Films Appeared in:
                    </CardSubtitle>
                    {films.map(film =>{
                        return <CardText>Episode {film.episode} - {film.title}</CardText>
                    })}
                    
                </CardFooter>

            </Card>
        </Col>
    )
}

export default Character;