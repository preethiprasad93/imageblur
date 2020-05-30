import  React, {Component } from 'react';
import Blur from 'react-blur';
import { Slider } from 'antd';

class ImageDetail extends Component {
    constructor(props) {
        super(props)
        console.log(this.props);
        
        //console.log(imageDetail)
        this.state={
imageDetail: this.props.location.param,
            radius:0
            }
        
        
    }


    onChangeRadius(event) {
        this.setState({
            radius: parseInt(event.target.value, 10)
        })
    }
render(){
    var imageUrl = ""
    if(this.state.imageDetail == null || this.state.imageDetail == undefined){
        
        imageUrl= "https://picsum.photos/id/"+this.props.match.params.id+"/3000/2000";
    }else{
        imageUrl =this.state.imageDetail.download_url;
    }

    return(
        <div className="container padding-top" height="500px;">
            <div className="slider-input align-left">
                <input className='blur-input' type='range' value={this.state.radius} onChange={(event)=>this.onChangeRadius(event)} min={0} max={10} range={1}/>
                <p>BLUR RADIUS: {this.state.radius}px</p>
            </div>
            <div className="slider-input">
            <Blur className='blur-demo' img={imageUrl} enableStyles style={{top:'auto', left:'auto',height:'500px',width:'500px', float:'left',align:'center'}} blurRadius={this.state.radius}>
            </Blur>
            </div>
                
        </div>
    );
}


}
export default ImageDetail;