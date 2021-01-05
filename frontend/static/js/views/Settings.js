import AbstractView from './AbstractView.js';


export default class extends AbstractView{
        

        constractor(params){
         
        	this.setTitle('Settings');

        }

        async getHTML(){
        	return `
              <div className="col">
               <h1> You are viewing settings</h1>
              </div>

        	`
        }
}