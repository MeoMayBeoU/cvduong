import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ImgProfile from '../../../images/90592442_505954263429846_5989871896215158784_n.png';

export default function Profile() {
	return (
		<div class="row">
		<div class="col s12 m12">
		  <div class="card">
			<div class="card-image">
			  <img src={ImgProfile}/>
			
			  <a class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons right">cloud</i></a>
			</div>
			<div class="col s12 m12">
				<h4>Lam Thi Duong</h4>
			</div>
			<div class="card-content">
			  <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
			</div>
		  </div>
		</div>
	  </div>
	);
}
