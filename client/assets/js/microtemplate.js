/** Microtemplating class */
export class MicroTemplate {
    /** Adds the view to a Node
     * @param  {HTML Element} 
     * @return void
     */
    mount (htmlNode) {
        htmlNode.innerHTML = this.view;       
    }
}

