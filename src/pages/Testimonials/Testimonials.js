import React from "react";
import "../Testimonials/Testimonials.css";
import logo from "../../assets/images/BIHw_logo.png";
import Slideshow from "../../components/Slideshow/Slideshow";
import TestBanner from "../../components/TestBanner/TestBanner";

let Testimonials = () => {
  return (
    <>
      <TestBanner img={logo} name="logo" />
      <Slideshow />
      <h4 id="storyText">Want your story to be featured?</h4>
    </>
  );
};

export default Testimonials;

// let ShareButton = props => {
//   let handleClick = () => {
//     return <ShareModal />
//   }
//   return (
//     <>
//     <button className="btn" id="share" type="button" data-toggle="modal" data-target="#ModalCenter" onClick={handleClick}>Share your story</button>
//     <ShareModal />
//     </>
//   )
// }

// let ShareModal = props => {
//   return (
// <div className="modal fade" id="ModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//   <div className="modal-dialog modal-dialog-centered" role="document">
//     <div className="modal-content">
//       <div className="modal-header">
//         <h5 className="modal-title" id="ModalCenterTitle">Share Your Story with us!</h5>
//         <form className="form"></form>
//         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div className="modal-body">
//         ...
//       </div>
//       <div className="modal-footer">
//         <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//         <button type="button" className="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>
//   )
// }
