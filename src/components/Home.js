
import flowers from '../temp_data_repository/flowers.js'
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';


const Home = () =>{

	const navigate = useNavigate();

	let takeQuiz = (flowerName) =>{
		navigate('/quiz/'+flowerName);
	}


	var content = [];
	flowers.map(flower=>{
		content.push(<Col className='col-sm-3 p-3' style={{'text-align':'center' }}> 
						<img  className='img-fluid' alt={flower.name} src={flower.picture} onClick={()=>takeQuiz(flower.name)}/>
						<div> {flower.name}</div>
						</Col>
					  )
	})

	return (
		<Container>
			<Row>
			{content}
			</Row>
		</Container>
	);
}


export default Home;