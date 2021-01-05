import AbstractView from './AbstractView.js';


export default class extends AbstractView{
        

        constractor(params){
 
        	this.setTitle('Posts');

        }

        async getHTML(){
        	return `
              <div className="col">
               <h1> You are viewing posts</h1>
              </div>

        	`
        }
}