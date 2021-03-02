import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

let openModalRef = document.querySelector('button[data-open-modal]');
let modalTemplate = document.querySelector('#modal');




const instance = basicLightbox.create(
  // document.querySelector('template')
  modalTemplate,


)

openModalRef.addEventListener('click', instance.show)





// {
//   /*
//    * Prevents the lightbox from closing when clicking its background.
//    */
//   closable: true,
//     /*
//      * One or more space separated classes to be added to the basicLightbox element.
//      */
//     className: '',
//       /*
//        * Function that gets executed before the lightbox will be shown.
//        * Returning false will prevent the lightbox from showing.
//        */
//       onShow: (instance) => { },
//         /*
//          * Function that gets executed before the lightbox closes.
//          * Returning false will prevent the lightbox from closing.
//          */
//         onClose: (instance) => { }
// }