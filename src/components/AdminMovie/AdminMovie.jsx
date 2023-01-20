import React from "react";
import PropTypes from "prop-types";

function AdminMovie({ movie }) {
   return (
      <div className="">
         <div class="list-group">
            <a class="list-group-item list-group-item-action active" aria-current="true">
               <div class="d-flex w-100 justify-content-between">
               </div>
               <p class="mb-1">{movie}</p>
            </a> 
         </div>
      </div>
   );
}

AdminMovie.propTypes = {
   movie: PropTypes.object.isRequired,
};

export default AdminMovie;
