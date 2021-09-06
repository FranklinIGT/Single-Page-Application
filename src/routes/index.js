import Header from '../template/Header';
import Home from '../page/Home';
import Character from './../page/Character';
import Error404 from '../page/Error404';
import getHash from '../utils/getHash';
import resolvetRoutes from '../utils/resolveRoutes';



const routes= {

    '/':Home,
    '/:id': Character,
    '/Contac':'Contac'
}

const Router = async () =>{
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    
    header.innerHTML = await Header();
    let hash= getHash();
    let route=await resolvetRoutes(hash);
    let render=routes[route] ? routes[route]:Error404;
    content.innerHTML= await render();

}

export default Router;

