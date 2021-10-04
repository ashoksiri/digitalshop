import React from 'react';
import {Link} from 'react-router-dom'

function LogoImage(props: any) {

    return <Link to={`/`} >
                <img src={`../assets/images/icon/${props.logo}`} alt="" className="img-fluid" />
            </Link>;
}

export default LogoImage;