const navigateTo = (url)=>{
       history.pushState(null,null,url);
       router();

}

const router = async ()=>{
          const routes =[

{path:"/",view:()=>console.log('you are viewing home') },
{path:"/posts",view:()=>console.log('you are viewing posts') },
{path:"/settings",view:()=> console.log('you are viewing settings') }

          ];

          // test each rout for each potential match

	const potentialMatches = routes.map(route=>{
		return {
			route,
		    isMatch: location.pathname === route.path
		}
	})


	let matched = potentialMatches.find(item => item.isMatch===true)
	if(!matched){ 
        matched={
         route : routes[0],
         isMatch :true
        }
	}
    

	console.log(matched.route.view())

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
