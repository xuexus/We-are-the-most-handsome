import React, { Component } from 'react'
import Header from "@/components/header"
import { Thirdiy } from './styled'
import { withRouter } from "react-router-dom"
@withRouter
class Main extends Component {
    constructor(){
        super()
        this.state={
            name:"",
            flag:true,
        }
    }
    render() {
        let {name,flag}=this.state
        return (
            <Thirdiy>
               <Header title="我的E宠"/>
               <div className="mine_sectoin">
                    <div className="mine_sectoin_one">
                        <div className="data">
                            <p>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTEzNTAxQTFERDg1MTFFOEIyNDlDRUE4ODhBRUIwRTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTEzNTAxQTBERDg1MTFFOEIyNDlDRUE4ODhBRUIwRTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEIwNUY5REZDMDY3MTFFODhDQzVFNTJCQkU3MEY1QjMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEIwNUY5RTBDMDY3MTFFODhDQzVFNTJCQkU3MEY1QjMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6IVkSFAAAE6ElEQVR42syaa2wVRRTH+8DybHsLVIpSHgI2xShQUCEaI4khYiLhAxBIDJAYNOEDxAQij/LwAZqqEUUUgRDkk3wgYojyNBAIaISQ0PAoaD/wTFteghS4WLv+T/xvPB17987s3ZvuJL/Mtntm5py7szP/mdlcz/NyIkrlYAl4DpSQbuAuuAlugMNgJbgUVaO5EQVQBo6Cfha2TWAkuBJFw50i+iEW0flb4D3+wvKr/wG6g0IwBCwDD4MF4K1IWpYnkCEJ8Kf3b1qcxraadjdBjwjajiSANXTqLuibxrY37SR9GocAJnn/pRWWZVbR/m8wo6MD+JLOHAYFlmXE7heWawHLQadsBNAfjABlIJcNlxo2JWAm3wOXhqUr/aqe3jkwF1SAPLYn7Q4H5a4B9AK7vLbpgbqujqLvgs6ghl3JTEnj752gp00A+eCgF5yWRhSAj/zqa0Fjmnb38skEBrBcFXgdFIMq8BIYy26Vk0UGgRfYnrRbBGYrn+YGBVCpHt3mLDvqyhY1VD+eKoAfaHSekccpgAT9krSjvQDGqMc0JWbO+0xXPo4xA9jGGyfae1Figvh1kn5u9f/vi7nxzNeKPMpQXvUFr4LRoAg0glqwg0o0tGwDa8A68LKpRkWz96BiDJt6gvfB7BQq9wFYD6qpWsOkoczvmGq0ho+mlfomzFj+u9I4e8BC8AZYAn5i3ZLOgMdC6i6/jg/Md6BATe1NjtJAZMFvLFsLRqawGwXqaHeac4xtGyVqojukdZc2GgjuhZAL3yjniywcOUf71Q5trGCZO+Zkahp+QcOTlhUPYJcRnrQs8wy7QpJPz6ZMfao1hGn4vBpr+1lUPI+2Pzr25wMsN8vCdmB7479PnvGWH1XXwyxGhUrm+x1HkwPMn7KwrVDXx82bZgBJcJvXhRaV92be6BiAb9/LwraY+S0OxYEBdOHkI+mqReXXmPdxDMC3v25he1sF0jldAGPVdb1F5WeYj3MM4EXmtRa2deq6Kt22yldqSMyxfMFaiO0o9LQahUoty/hD7+dBo9BgtR5Y5DCibHCYB2SCPBtiHljMMs1c9PwvgK7gOI2uOK4HzJl4eAq7KsoIX064zMTF9MvjjkYXM4CP1TbHhBA6pdLQQruUFpKnuU/pmLqQWugV+udRu7UJ4BpvrMxAr8tuxtfgrxSL8iQX74kM2viQdTWY64EC5uczkNMyJL7J7fOJYAQlehNHku0R7EhfZN7VHIW2MrJTMV6R5dE/Sd+aXehZ9ainxzSA15SPo9sbRr/nzQugMGbOy6h4kf59l2oeqFDrgXUxC8Cfa8S/IfqeecQkJy2reD0HbAODKdru8+TlLGjNiT7lUXk+Sk12nXJmMjcbJL0NaoKkRD7Xr0HpBtjoIB3SIfVsYr1BaTdf5LS70wm+D62qcLPqXp7aAFitZ0VHZPb/zGjH7ybNRjvbU83cQQ3I/vwTxsQj4m2Bkg4eNwOKHZ0vVdLFPx+Yz/q1fJD2+2TjhCafEsGf2n8GD4U8oVnI+jrkiGmaCuIdyzLvKuenxuGU8hM6dN9il6FMSfaP4nLM2h1ctdxPivycOIqT+mawGcwnLRRtclJ/j8JLvpt4hPclbWqzvxmDbyVkkX7M8luJy2BUiJ2MrAbgb6sv5caAXCe4i5Dk02gAR/gtRUPcvlbpsPSPAAMAGD8KmWqC6N0AAAAASUVORK5CYII=" alt="" />
                            </p>
                            <b>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEFDQTczNkNERDg1MTFFODlDMjY4NzJEMkExMEZGMDEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEFDQTczNkJERDg1MTFFODlDMjY4NzJEMkExMEZGMDEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTEzRDlFMUFDMDY3MTFFOEJFQTZCMzM5OEY0N0I3NkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTEzRDlFMUJDMDY3MTFFOEJFQTZCMzM5OEY0N0I3NkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz47zYVrAAAEWUlEQVR42uyaWUgVURjH7x0XsrQsNVrMlFIrqGgjDfEWRQ9Fm0RgEfhQ4EMhQU89tEEv4UPRQ/RQRAX1YAstRCmYLWTrQ5RlWt1sVSkNS1Hv7fb/7D91Gu61uTOac6EPfoyOc875vnPOnPkW3YFAwBXJorkiXKL7qJ+JYCGYBiaBDJAIhnGSWsE3UE8egBugBny3M7DbxhaaDDaCVSDdYh/vQBk4Ae7/KwMWgR0gT7nXDMrBPc7qC/AZfOEM66shK5UF5gEPGKf0cQvsBefD0kYMMMl0UBn4La3gAJgD3GH0ozIblIJPSr9V7NNUH2YeigHbQScHaAZbwWCLSgdD+toMPnKMbrCLY9syIJkzIuIH+0FCHypuJJ4r4ueYN0CKVQOyQT07egPy+1FxI3nAy7FfUpewDJgI3rODO2DMP1ReXf2b1OEDdTJlQCqoY8OrfbzXrbwb5dSlLth2MjaIBtVsUD3AyqtG3KVOFUDrzYBtfFD233AHKK/uCn1Ll4QyIAN0gO9ggYOU11lKA9pBejADjvOBYw5UPqSOuiuRxs+/fPYzQYNDnc/xoJZOqPhidbo7vYU3TzlYeZHX4DiIAsW6L6TxnA3QN3E5nFnUtUlOTdlCObDjNngJJkRIHPMMZIP5GgMRkcsWOzsIOsGhfm6jyhVe58uSlHFJCi0uqY/tff3cRqWQ7c9oDDJcfLsjRR7zOknj0STitdjZYdAFjvRzG2MoKjJKXmI9pnRHWDKiG/g1/iASE4FZlYDG4FtkRAQpPpTXNtWAZDvpGbCTx+Ogvyz9brDJpgFjef0oR9IFHkmrbXwds5SswgrlfhpIUn5frjyXbmO8tezjtMYsmcuQ5wlXJC+kHwYrQRxYA+6Ch6CA9wr5jB+02BhvLq+PxBoPramx6aNcCpiXszbHes5+PHoY2cgbs2xGTbUGRZsMSSuRJzaTBLOVvqPkpfKBk6AEFClbKlx5y+TuKiZ3Jb64yBd8KR1FcRjP0Q+yKsW8Hu3ZirRqCkPJNpDoYFc6gxlCn55m0QMaScheBfFgg4PP/z0glkFNvTG5W8C9dd2hs7+M+n0F44MF9SP4QJsDlU9VEr8lveWFOvhQrIOUl8TWAyVT+EdiS62RDaEb0E5X1wkiOl0CM7nn1xlLUqoBC3593ZwhI0FFT9j4M1OymF/8kFXKIl4vOkB5D2tmOfyeiBGveisxTeXZKmfs6AHc74ksougFjmtMs/+1wKF7pPsGSPEEni7N1KOLZa1osyUm/fRJMVkG2gBukSiLSks4m8tJa1F8pUoWFE31oxe6m5gf3cq3voH32ukGZ3I/you0hPf0RIAxlk7l35tZ4I7hFz6J/pAkpHK5z0cr7apAadjvIC0poi9kRvws/K0HcYYZSWH626x4WdSbYXX7qYXufJ5EWVyNZM6kzGIjA5Ob9Cbfh5iPWHq2M1jcHs6kwVeGrl6e5/dZ2H5q97iy868G//9bpS/khwADAOwYKYZNFJk3AAAAAElFTkSuQmCC" alt="" />
                            </b>
                        </div>



                        <div className="logo" style={{display:flag?"block":"none"}} >
                            <div className="logo_first">
                                <img src="https://static.epetbar.com/static_wap/appmall/avatar/dog.png" alt="" />
                            </div>
                            <div className="logo_second">
                                <p>
                                    <span onClick={this.handlelogin.bind(this)}>登录</span>
                                    <span>|</span>
                                    <span onClick={this.handleRegister.bind(this)}>注册</span>
                                </p>
                            </div>
                        </div>


                        <div className="logos" style={{display:flag?"none":"block"}}>
                            <div className="logo_firsts">
                                <img src="https://img2.epetbar.com/dogs/3.jpg?x-oss-process=style/waterfall&$1=100" alt="" onClick={this.handleOut.bind(this)}/>
                            </div>
                            <div className="logo_seconds">
                                <p>主人{name}</p>
                            </div>
                        </div>


                        <div className="bool">
                            <ul className="bool_first">
                                <li>
                                    <img src="https://img2.epetbar.com/nowater/2018-11/22/08/71ff7f9ee43b98e8c68cb150f3f03169.png" alt="" />
                                </li>
                                <li>
                                    <img src="https://img2.epetbar.com/nowater/2018-11/22/08/d3d0bc1a081b6f0412b6f045863865be.png" alt="" />
                                </li>
                                <li>
                                    <img src="https://img2.epetbar.com/nowater/2018-11/22/08/e6f08976d0cf4a51d7eb209ba4c89df7.png" alt="" />
                                </li>
                                <li>
                                    <img src="https://img2.epetbar.com/nowater/2019-01/31/14/de8b18448de149a49288d3a2f6be91fe.png" alt="" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mine_section_three"> </div>
                    {/* 我的订单 */}
                    <div className="mine_sectoin_two">
                        <div className="order">
                            <img src="https://img2.epetbar.com/nowater/2018-11/22/09/390880ba4e224747ebde28b56fe807da.png" alt="" />
                        </div>
                        <ul className="order_plues">
                            <li>
                                <div>
                                    <img src="https://img2.epetbar.com/nowater/2018-11/22/09/fb45b8f54a662a0574c941ffb4de2d88.png" alt="" />
                                </div>
                                <p>待付款</p>
                            </li>
                            <li>
                                <div>
                                    <img src="https://img2.epetbar.com/nowater/2018-11/22/09/51435308ce6c089a450fd3ab77a5520b.png" alt="" />
                                </div>
                                <p>待付款</p>
                            </li>
                            <li>
                                <div>
                                    <img src="https://img2.epetbar.com/nowater/2018-11/22/09/e0aac3c323912454b6b0c4222d3c0edd.png" alt="" />
                                </div>
                                <p>待付款</p>
                            </li>
                            <li>
                                <div>
                                    <img src="https://img2.epetbar.com/nowater/2018-11/22/09/c3109afb1d05a016e31394cff7e6bb99.png" alt="" />
                                </div>
                                <p>待付款</p>
                            </li>
                            <li>
                                <div>
                                    <img src="https://img2.epetbar.com/nowater/2018-11/22/09/77d6a175fa1a030b57826f7c5bcda252.png" alt="" />
                                </div>
                                <p>待付款</p>
                            </li>
                        </ul>
                    </div>


                    {/* 我的钱包 */}
                    <div className="mine_sectoin_two">
                        <div className="order">
                            <img src="https://img2.epetbar.com/nowater/2018-11/22/09/b5103c1385810f1a1f76891c8ee6d3ef.png" alt="" />
                        </div>
                        <ul className="order_plues">
                            <li>
                                <div>
                                   <span>0</span>
                                </div>
                                <p>优惠款</p>
                            </li>
                            <li>
                                <div>
                                    <span>0</span>
                                </div>
                                <p>E宠币</p>
                            </li>
                            <li>
                                <div>
                                    <span>0.00</span>
                                </div>
                                <p>余额</p>
                            </li>
                            <li>
                                <div>
                                   <span>0.00</span>
                                </div>
                                <p>红包</p>
                            </li>
                            
                        </ul>
                    </div>


                    {/* 我的服务 */}
                    <div className="mine_sectoin_two">
                        <div className="order">
                            <img src="https://img2.epetbar.com/nowater/2018-11/22/09/1cadc7c68de1db0b2ef68929b5a97bd6.png" alt="" />
                        </div>
                        <ul className="order_plues">
                            <li className="li">
                                <div>
                                    <img src="https://img2.epetbar.com/nowater/2019-06/05/00/f2f93d58a1d8ee48053595c7a1fcefda.png" alt="" />
                                </div>
                                <p>待付款</p>
                            </li>
                            <li className="li">
                                <div>
                                    <img src="https://img2.epetbar.com/nowater/2018-11/22/09/51435308ce6c089a450fd3ab77a5520b.png" alt="" />
                                </div>
                                <p>待付款</p>
                            </li>
                            <li className="li">
                                <div>
                                    <img src="https://img2.epetbar.com/nowater/2018-11/22/09/e0aac3c323912454b6b0c4222d3c0edd.png" alt="" />
                                </div>
                                <p>待付款</p>
                            </li>
                            <li className="li">
                                <div>
                                    <img src="https://img2.epetbar.com/nowater/2018-11/22/09/c3109afb1d05a016e31394cff7e6bb99.png" alt="" />
                                </div>
                                <p>待付款</p>
                            </li>
                            <li className="li">
                                <div>
                                    <img src="https://img2.epetbar.com/nowater/2018-11/22/09/77d6a175fa1a030b57826f7c5bcda252.png" alt="" />
                                </div>
                                <p>待付款</p>
                            </li>
                            <li className="li">
                                <div>
                                    <img src="https://img2.epetbar.com/nowater/2019-06/05/00/f2f93d58a1d8ee48053595c7a1fcefda.png" alt="" />
                                </div>
                                <p>待付款</p>
                            </li>
                            <li className="li">
                                <div>
                                    <img src="https://img2.epetbar.com/nowater/2018-11/22/09/51435308ce6c089a450fd3ab77a5520b.png" alt="" />
                                </div>
                                <p>待付款</p>
                            </li>
                            <li className="li">
                                <div>
                                    <img src="https://img2.epetbar.com/nowater/2018-11/22/09/e0aac3c323912454b6b0c4222d3c0edd.png" alt="" />
                                </div>
                                <p>待付款</p>
                            </li>
                            <li className="li">
                                <div>
                                    <img src="https://img2.epetbar.com/nowater/2018-11/22/09/c3109afb1d05a016e31394cff7e6bb99.png" alt="" />
                                </div>
                                <p>待付款</p>
                            </li>
                            <li className="li">
                                <div>
                                    <img src="https://img2.epetbar.com/nowater/2018-11/22/09/77d6a175fa1a030b57826f7c5bcda252.png" alt="" />
                                </div>
                                <p>待付款</p>
                            </li>
                            <li className="li">
                                <div>
                                    <img src="https://img2.epetbar.com/nowater/2018-11/22/09/c3109afb1d05a016e31394cff7e6bb99.png" alt="" />
                                </div>
                                <p>待付款</p>
                            </li>
                            <li className="li">
                                <div>
                                    <img src="https://img2.epetbar.com/nowater/2018-11/22/09/77d6a175fa1a030b57826f7c5bcda252.png" alt="" />
                                </div>
                                <p>待付款</p>
                            </li>
                        </ul>
                    </div>

                </div>

            </Thirdiy>
        )
    }
    // 退出登录
    handleOut(){
        this.props.history.push("/output/"+this.state.name)
    }
    componentDidMount(){
        this.handleJie()
    }
    handleJie(){
        if(localStorage.getItem("Name")){
            this.setState({
                name:localStorage.getItem("Name"),
            },()=>{
                this.setState({
                    flag:false
                })
            })
        }else{
            this.setState({
                flag:true
            }) 
        }
        this.forceUpdate()
    }
    handlelogin(){
        this.props.history.push("/login")
    }
    handleRegister(){
        this.props.history.push("/register")
    }

}
export default Main;