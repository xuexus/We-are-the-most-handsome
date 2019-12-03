import React, { Component } from 'react'
import Header from "@/components/header"
import { Section } from './styled'
import { Script } from 'vm'
class Cart extends Component {
    constructor() {
        super()
        this.state = {
            building: [],
            selected: true,
            Sprice:"",
            Scount:"",
        }
        

        // this.state.building=window.localStorage.getItem("CART");
        console.log(this.state.building)
        if(!window.localStorage.getItem("CART")){
            this.state.building=[[]]
        }else{
            this.state.building.push(JSON.parse(localStorage.getItem("CART")))
            this.state.building[0].forEach(item => {
                item.flag = true;
            })
            console.log(this.state.building)
        }
    }
    render() {
        let { building, selected, Sprice, Scount} = this.state
        return (
            <Section>
                <Header title="购物车" />
                <div className="mycart_section">
                    <div className="mycart_section_one">
                        <div className="warehouse">
                            <p>
                                <input type="checkbox" checked={selected} onChange={this.handleQuanXuan.bind(this, selected, building)} />
                                <span>E宠西部中央仓</span>
                                <b>?</b>
                            </p>
                        </div>
                    </div>

                    {
                        building[0].map((item, index) => {
                            return <div className="checkbox" key={index}>
                                <div className="checkbox_first">
                                    <input type="checkbox" checked={item.flag} onChange={this.handleDanxuan.bind(this, index, building)} />
                                    <div className="checkout_first">
                                        <aside>
                                            <img src={item.img} alt="" />
                                        </aside>
                                        <div>
                                            <h1>{item.show}</h1>
                                            <hgroup>
                                                <b>￥<span>{item.price}</span></b>
                                            </hgroup>
                                            <nav>
                                                <button onClick={this.handleReducer.bind(this,index)}>-</button>
                                                <input type="text" placeholder="1" value={item.counter} onChange={this.handleCounter.bind(this)}/>
                                                <button onClick={this.handleAdd.bind(this,index)}>+</button>
                                            </nav> 
                                            <button onClick={this.handleShanChu.bind(this,index)}>删除</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        })
                    }


                </div>
                {/* 尾部 */}
                <div className="footer">
                    <div className="footer_first">
                        <input type="checkbox" checked={selected} onChange={this.handleQuanXuan.bind(this, selected, building)}/>
                        <label>
                            <span>总额：</span>
                            <span>￥</span>
                            <span>{Sprice}</span>
                        </label>
                    </div>
                    <div className="footer_second">
                        <span>去结算(</span>
                        <span>{Scount}</span>
                        <span>)</span>
                    </div>
                </div>
            </Section>
        )
    }
    componentDidMount() {
      this.handlePrice()
    }
    handleReducer(index){
       console.log(index)
        if(this.state.building[0][index].counter<=1){

            this.state.building[0][index].counter = 1;
            window.localStorage.setItem("CART",JSON.stringify(this.state.building[0]))
        }else{
            this.state.building[0][index].counter--
            window.localStorage.setItem("CART",JSON.stringify(this.state.building[0]))
        }
        this.forceUpdate()
        this.handlePrice()
    }
    handleAdd(index){
        this.state.building[0][index].counter++
        window.localStorage.setItem("CART",JSON.stringify(this.state.building[0]))
        this.forceUpdate()
        this.handlePrice()
    }
    handleShanChu(index){
        console.log(this.state.building[0][index].id)
        // window.localStorage.removeItem("CART",JSON.stringify(this.state.building[0][index].id))
    }
    handleCounter(){
       
    }
    handlePrice(){
        let sprice = 0, scount = 0;
        for (var i = 0; i < this.state.building[0].length; i++) {
            if (this.state.building[0][i].flag) {
                scount += this.state.building[0][i].counter;
                sprice += this.state.building[0][i].counter * (this.state.building[0][i].price * 10) / 10
            }
        }
        this.setState({
            Scount:scount
        })
        this.setState({
            Sprice:sprice
        },()=>{
        })
    }
    handleQuanXuan(selected, building) {
        this.setState({
            selected: !selected,

        }, () => {
            building[0].forEach(item => {
                item.flag = this.state.selected
            })
            this.handlePrice()
            this.forceUpdate()
        })

    }
    handleDanxuan(index, building) {
        building[0][index].flag = !building[0][index].flag;
        // console.log(building[0][index])
        let bStop = true;
        for (var i = 0; i < building[0].length; i++) {
            if (!building[0][i].flag) {
                bStop = false;
            }
        }
        this.state.selected = bStop
        this.handlePrice()
        this.forceUpdate()
    }
    

}
export default Cart;