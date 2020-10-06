import React,{Component} from 'react';

class Product extends Component{
    constructor(props) {
        super(props);
        this.state = {
            product: '',
            price: null,
            error: '',
        }
    }
    myChangeHandler = (event) => {
        this.setState({product:event.target.value});
    }
    myChangeHandler2 = (event) => {
        let name = event.target.name;
        let cena = event.target.value;
        let err = '';
        if(name ==="price"){
            if(cena !="" && !Number(cena)){
                err = <strong>Price must be a number</strong>;
            }
        }
        this.setState({price:event.target.value});
        this.setState({error: err})
    }
    render(){
        const {price,product} = this.state;
        return(
            <form>

                <label>Name of the product</label>
                <br/>
                <input type="text" name="product" onChange={this.myChangeHandler}/>
                <br/>
                <label>Price</label><br/>
                <input type="text" name="price" onChange={this.myChangeHandler2}/>
                <h1> {this.state.product} {this.state.price}
                </h1>
                <p >{this.state.error}</p>
            </form>
        );
    }
}
export default Product;