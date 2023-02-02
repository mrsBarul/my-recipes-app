import logo from './logo.png';
import telegram from './telegram.png';
import instagram from './instagram.png';
import facebook from './facebook.png';


function Header () {
    return(
        <div className="Container">
            <div className='containerHeader'>
                <div className='logoBox'>
                    <img className='logo' src={ logo } alt='logo'/>
                </div>
                <div className='title'>
                    <h1>BOOK RECIPE</h1>
                </div>
                <div className='icons'>
                    <img className='icon' src={ telegram } alt='icon'/>
                    <img className='icon' src={ facebook } alt='icon'/>
                    <img className='icon' src={ instagram } alt='icon'/>
                </div>
            </div>
            <div className='describe'>
            <h2>This recipe search site is the best helper in the kitchen! 
                Our recipe search website makes cooking and recipe management easier. 
                Do you like to cook? Find new recipes to enjoy and cook delicious dishes!</h2>
            </div>
        </div>
    )
}

export default Header;