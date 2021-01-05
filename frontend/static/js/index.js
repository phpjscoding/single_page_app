import Dashboard from './views/Dashboard.js';
import Posts from './views/Posts.js';
import Settings from './views/Settings.js';


const navigateTo = (url)=>{
       history.pushState(null,null,url);
       router();

}

const pathToRegEx  = path => 
new RegExp("^"+path.replace(/\//g,"\\/").replace(/:\w+/g,"(.+)") +'$' );



const router = async ()=>{
	console.log(pathToRegEx("/posts/:id"));

          const routes =[

{path:"/",view: Dashboard },
{path:"/posts",view:Posts },
{path:"/settings",view:Settings}

          ];

          // test each rout for each potential match

	const potentialMatches = routes.map(route=>{
		return {
			route,
		    result: location.pathname.match(pathToRegEx(route.path))
		}
	})


	let matched = potentialMatches.find(item => item.result===null)
	if(!matched){ 
        matched={
         route : routes[0],
         isMatch :true
        }
	}
    
const getParams = match =>{
	const values = match.result.slice(1);
	const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result=>result[1]);

	return Object.fromEntries(keys.map((key,i)=>{
		 return  [keys,values[i]]
	}))
}
    const viewInstance = new matched.route.view(getParams(matched));

    document.querySelector("#app").innerHTML  = await viewInstance.getHTML();

	//console.log(matched.route.view())

} 

window.addEventListener('popstate',router)

document.addEventListener('DOMContentLoaded',()=>{
	
	document.addEventListener('click',e=>{

		if(e.target.matches("[data-link]")){
			e.preventDefault();
			navigateTo(e.target.href)

		}
	})
	router();
})
