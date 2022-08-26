import React from 'react';
export default function Alert(props){
return(
    props.Alert && <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success: </strong>{props.Alert.message}
    </div>
);
}