import React from "react";

class Detail extends React.Component{
    componentWillMount(){
        const{ location, histroy } = this.props;
        if(location.state === undefined){
            histroy.push("/");
        }
    }
    render() {
        const {location} = this.props;
      if(location.state){
        return (
            <div>
                <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                aaaaa
                <h1>{location.state.title}</h1>
                <h5>{location.state.year}</h5>
                {location.state.summary}
                <ul>
               {location.state.genres.map((genre, index)=>(
                    <li key={index} className="genres_genre">
                        {genre}
                    </li>
                ))}
                </ul>
             </div>
            //<img src={location.state.poster} alt={location.state.title} title={location.state.title} />
            
            // <h3>{location.state.title}</h3>
           // <h5>{location.state.year}</h5>
           // <ul>
           //     {genres.map((genre, index)=>(
          //          <li key={index} className="genres_genre">
          //              {genre}
          //          </li>
         //       ))}</ul>
             
            
            );
      }else{
          return null;
      }  
        
    }
}

export default Detail;