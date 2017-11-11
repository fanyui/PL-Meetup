import React from 'react';
import { Component } from 'react';
import media from './media.css';

import { Dropdown, Icon, Input, Menu, Container, Grid, Card, Segment,Sidebar, Button, Image, Header } from 'semantic-ui-react'

class Dashboard extends Component{

	constructor(props){
		super(props)
		this.state = { visible: false }

 
	}
	  toggleVisibility = () => this.setState({ visible: !this.state.visible })

 	render(){
 		const description = [
			  'Amy is a violinist with 2 years experience in the wedding industry.',
			  'She enjoys the outdoors and currently resides in upstate New York.',
			].join(' ')

const { visible } = this.state
		return (
			<Container fluid>		
		       <div className='device'>
		       
		         <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
            <Menu.Item name='dashboard'>
              <Icon name='dashboard' />
              Dashboard
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
        		            <Segment basic>
		              <div>
					        <Menu pointing secondary>
					        

					          <Menu.Item name='home'  />
					          <Menu.Item name='messages'  />
					          <Menu.Item name='friends' />
					          <Menu.Menu position='right'>
					          		 <Button onClick={this.toggleVisibility}>Menu</Button>
						          <Icon name="bell" size="large"> </Icon>
						          <Menu.Item name='logout'  />
					          </Menu.Menu>
					        </Menu>

					       
				      </div>

		              	<Grid  stackable="true">
		              		<Grid.Row columns={4} >
						      <Grid.Column>
							  <Card>
							    <Card.Content header='About Amy' />
							    <Card.Content description={description} />
							    <Card.Content extra>
							      <Icon name='user' />
							      4 Friends
							    </Card.Content>
							  </Card>		
							 </Grid.Column>
						      <Grid.Column>
						        <Card>
							    <Card.Content header='About Amy' />
							    <Card.Content description={description} />
							    <Card.Content extra>
							      <Icon name='user' />
							      4 Friends
							    </Card.Content>
							  </Card>	
						      </Grid.Column>
						      <Grid.Column>
						       <Card>
							    <Card.Content header='About Amy' />
							    <Card.Content description={description} />
							    <Card.Content extra>
							      <Icon name='user' />
							      4 Friends
							    </Card.Content>
							  </Card>	
						      </Grid.Column>
						      <Grid.Column>
						       <Card>
							    <Card.Content header='About Amy' />
							    <Card.Content description={description} />
							    <Card.Content extra>
							      <Icon name='user' />
							      4 Friends
							    </Card.Content>
							  </Card>	
						      </Grid.Column>
						    </Grid.Row>
						    <Grid.Row columns={4} >
						      <Grid.Column>
							  <Card>
							    <Card.Content header='About Amy' />
							    <Card.Content description={description} />
							    <Card.Content extra>
							      <Icon name='user' />
							      4 Friends
							    </Card.Content>
							  </Card>		
							 </Grid.Column>
						      <Grid.Column>
						        <Card>
							    <Card.Content header='About Amy' />
							    <Card.Content description={description} />
							    <Card.Content extra>
							      <Icon name='user' />
							      4 Friends
							    </Card.Content>
							  </Card>	
						      </Grid.Column>
						      <Grid.Column>
						       <Card>
							    <Card.Content header='About Amy' />
							    <Card.Content description={description} />
							    <Card.Content extra>
							      <Icon name='user' />
							      4 Friends
							    </Card.Content>
							  </Card>	
						      </Grid.Column>
						      <Grid.Column>
						       <Card>
							    <Card.Content header='About Amy' />
							    <Card.Content description={description} />
							    <Card.Content extra>
							      <Icon name='user' />
							      4 Friends
							    </Card.Content>
							  </Card>	
						      </Grid.Column>
						    </Grid.Row>
						    <Grid.Row columns={4} >
						      <Grid.Column>
							  <Card>
							    <Card.Content header='About Amy' />
							    <Card.Content description={description} />
							    <Card.Content extra>
							      <Icon name='user' />
							      4 Friends
							    </Card.Content>
							  </Card>		
							 </Grid.Column>
						      <Grid.Column>
						        <Card>
							    <Card.Content header='About Amy' />
							    <Card.Content description={description} />
							    <Card.Content extra>
							      <Icon name='user' />
							      4 Friends
							    </Card.Content>
							  </Card>	
						      </Grid.Column>
						      <Grid.Column>
						       <Card>
							    <Card.Content header='About Amy' />
							    <Card.Content description={description} />
							    <Card.Content extra>
							      <Icon name='user' />
							      4 Friends
							    </Card.Content>
							  </Card>	
						      </Grid.Column>
						      <Grid.Column>
						       <Card>
							    <Card.Content header='About Amy' />
							    <Card.Content description={description} />
							    <Card.Content extra>
							      <Icon name='user' />
							      4 Friends
							    </Card.Content>
							  </Card>	
						      </Grid.Column>
						    </Grid.Row>	 

  						  </Grid>

					 
							     
		              
		            </Segment>
		          </Sidebar.Pusher>
		        </Sidebar.Pushable>
		      </div>
	</Container>
			)
	}
}
export default Dashboard;