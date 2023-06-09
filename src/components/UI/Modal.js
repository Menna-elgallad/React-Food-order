import { useState } from "react"

export default function Modal(props){
    const [display , setDisplay] = useState(props.display) ;
    console.log(display);
    function close (){
        setDisplay(false)
        props.cancel(false)
    }

    if (display){return (
        <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal={"true"} >
   
           <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={close} ></div>
         
           <div class="fixed inset-0 z-10 overflow-y-auto " >
             <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            
               <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                 <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                   <div >
                     
                     <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    
                       <div class="mt-2">
                      </div> {props.children}
                     </div>
                   </div>
                 </div>
                
               </div>
             </div>
           </div>
         </div>  
          
       )}
       else {
        return null
       }
    
}