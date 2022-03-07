
import flowers from '../data_access_layer/data.js'
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'


const Home = () =>{

	var content = [];
	flowers.map(flower=>{
		content.push(<Col className='col-sm-3 p-3' style={{'text-align':'center' }}> 
						<img  className='img-fluid' src={flower.picture}/>
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