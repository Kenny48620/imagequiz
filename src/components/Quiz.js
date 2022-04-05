import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';
import dataService from "../data_access_layer/local_temporarily_storage";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
//window.location.reload()
const Quiz = () => {
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
    const [quiz, setQuiz] = useState(undefined);
    const { id } = useParams();

    const [score, setScore] = useState(0);

    const submitList = [false, false, false, false, false,false];

    const navigate = useNavigate();

    const [isSubmit, setIsSubmit] = useState(false)

    useEffect(() => {
        if(!quiz) {
            let x = dataService.getQuiz(id);
            setQuiz(x);
        }  
        if (isSubmit === true){
        	document.getElementById('scoreArea').innerHTML="You scored "+score+" out of 6!";  
    	}
    });

    const choose = (e) =>{

    	let correct = e.target.value;
    	let index   = parseInt(e.target.name);

    	if (correct === 'true'){
    		submitList[index] = true;
    	}else{
    		submitList[index] = false;	
    	}
    }

    const checkAnswers = (e) =>{
    	setIsSubmit(true);
    	let rightAnswer = 0;
    	submitList.map((answer)=>{
    		if (answer === true){
    			rightAnswer++;
    		}
    	})
    	setScore(rightAnswer);
    }

    return (

        <Container>
            <Row xs={1} md={3} className="g-4 text-center">
            
            	{quiz ?
            		quiz.questions.map((question, index)=>
	                <Col >
                        <Card >
                            <Card.Img className='img-fluid' 
                            		  variant="top" 
                            		  src={question.picture} 
                            		  style={{ height: '18rem' }}

                            		  />
                            <Card.Body>
                                <Card.Title>Question {index+1}</Card.Title>
                                <Card.Text></Card.Text>
                            </Card.Body>
                            <ListGroup>
                                {question.choices.map(each =>
                                    <ListGroup.Item>
                                    <input type="radio"
                                    	   name={index} 
                                    	   value={each === question.answer}
                                    	   onChange={choose}
                                    />

                                    	{each}
                                    </ListGroup.Item>
                                )}
                            </ListGroup>
                        </Card>
                	</Col>
           		)
            		                    :
                	<Spinner animation="border" role="status">
                    	<span className="visually-hidden">Loading...</span>
                    </Spinner>
           		}
            </Row>
         	
         	<br></br>
         	
           	<span id='scoreArea' className='col-sm-3 p-3'>
	           <Button  onClick={checkAnswers}>
	            	Submit
	            </Button>
	       </span>

	        <span className='col-sm-3 p-3 '>
	       		<Button  onClick={()=>{window.location.reload();}} >
	            	Retake
	        	</Button>
	        </span>

	        <span className='col-sm p-3'>
	        	<Button onClick={()=>{navigate('/');}} >
	            	Back 
	        	</Button>
	        </span>
	       
        </Container>


    );
}

export default Quiz;