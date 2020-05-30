import  React, {Component } from 'react';
import axios from 'axios';
import { Pagination } from 'antd';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './listing.css';
import 'antd/dist/antd.css';





class Listing extends Component {
    constructor(props) {
        super(props);
        this.state= { 
            data: [],
            count:'',
            size:10
        };
    }
    
    
    componentDidMount() {
        console.log(this.props)
        this.getAllList(2,10);

    }
    getAllList(pageNumber,pageSize) {
        axios.get("https://picsum.photos/v2/list?limit="+pageSize+"&page="+pageNumber).then((response)=>{
            console.log(response.data);
            //console.log({test:this.getResult(response.data.result)})
            /* */ 
            if(response.data == null){
                this.setState({count:0})
            }else {
                this.setState({count:response.data.length})
                console.log(this.state.count)
            }
            this.setState({ 
                data: response.data
                 
            });
            
        })

    }


     onShowSizeChange( current,  pageSize) {
        console.log(current, pageSize);
        this.getAllList(current,pageSize);
    }

     onChange( page,  pageSize){
        console.log("page: "+ page + " pageSize:"+pageSize);
        this.getAllList(page,pageSize);
    }

   
    renderList() {
        if (this.state.data) {
        	return(
                <div>
                <div className="slider-input">
        		{this.state.data.map((obj) => {
                    var image =obj.download_url;
        			return(
                        <div className="col-md-3 col-sm-3 col-xs-3 tile" key ={obj.id}>
                            <div className="col-md-12 col-sm-12 col-xs-12 ">
                            <Link to={ {pathname: "/imageDetail/"+obj.id , param: obj} }><img src={image} width="250" height="300" className="list_image"/></Link>
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <p className="author">Author: {obj.author}</p>
                                </div>
                            </div>
                        </div>
                    )
        		})
                }
                </div>
                <div style={{float:"right"}}>
                <Pagination
                onChange={(page,pageNumber)=> this.onChange(page,pageNumber)}
                showSizeChanger
                onShowSizeChange={(current,pageSize)=>this.onShowSizeChange(current,pageSize)}
                defaultCurrent={1}
              
                total={50}
    />
    </div>
    </div>
        	)
            
        }else {
            return(<p>Not found</p>);
        }
    }
    render() {
        return (
            <div className="row custom_row padding-top padding-bottom">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        {this.renderList()}
                    </div>
                </div>
            </div>
        );
    }
}
export default Listing;