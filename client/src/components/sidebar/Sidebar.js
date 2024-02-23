import {Link} from 'react-router-dom';
import { AiOutlineBarChart, AiOutlineLineChart, AiOutlineRead, AiOutlineBars, AiFillProfile} from 'react-icons/ai';
import { GiCupcake} from 'react-icons/gi';
import './Sidebar.scss';
import logo from '../../assets/logo_cupcake.png';


export default function Sidebar() {
	return (
		<aside className="sidebar">
			<div>
				<Link to="/" className='sidebar__logo'><GiCupcake /></Link>
				<nav className="sidebar__menu">
					<ul>
						<li className='sidebar__item'>
							<Link to="/dashboard"><AiOutlineBarChart /></Link>
						</li>
                        <li className='sidebar__item'>
							<Link to="/dashboard/:productId"><AiOutlineLineChart /></Link>
						</li>
                        <li className='sidebar__item'>
							<Link to="/products/:productId/reviews"><AiOutlineRead /></Link>
						</li>
                        <li className='sidebar__item'>
							<Link to="/products"><AiOutlineBars /></Link>
						</li>
					</ul>
				</nav>
				<button className="button" > <AiFillProfile /> </button>
			</div>
		</aside>
	)
}

