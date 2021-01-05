import AbstractView from './AbstractView.js';


export default class extends AbstractView{
        

        constractor(params){
 
        	this.setTitle('Dashboard');

        }

        async getHTML(){
        	return `
              <div className="col">
            <h1> Welcome to the Dashboard</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quod consectetur minima veniam ullam in porro, deleniti possimus nulla cum est perferendis debitis aliquam excepturi ratione voluptate nostrum soluta aliquid sequi blanditiis totam dolorem impedit libero cumque, voluptates! Placeat?</p>
            <span>visit posts <a href="/post" data-link>Posts</a> </span>
            <smal> today is 23/3/2998</smal>
            <time> 3:23:2</time>
              </div>

        	`
        }
}