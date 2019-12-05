import React from "react";
import { CollectStyled } from "./styled";

class Collect extends React.Component {
    constructor() {
        super()
        this.state = {
            collect: []
        }
    }
    componentWillMount() {
        if(localStorage.getItem("Recommend")){
            this.state.collect = JSON.parse(localStorage.getItem("Recommend"))
        }
    }
    render() {
        let { collect } = this.state;
        return (
            <CollectStyled>
                <div className="SmallMBook_sollect">

                    {/* 未登录 */}
                    <div style={{ display: "none" }} className="SmallMBook_sollect_noLogin">
                        <div></div>
                        <p>暂无内容</p>
                        <p>小主，登录后才可查看哦～</p>
                        <span>立即登录</span>
                    </div>

                    {/* 已登录，没有收藏商品 */}
                    <div style={{ display: "none" }} className="SmallMBook_sollect_yesLogin">
                        <div></div>
                        <p>暂无内容</p>
                        <p>小主，这里空空如也，快去收藏吧~</p>
                    </div>

                    {/* 已登录，有收藏商品 */}
                    <div className="SmallMBook_sollect_haveGoods">
                        <div className="SmallMBook_container_list">
                            {
                                collect.map((item) => {
                                    return (
                                        <div key={item.id}>
                                            <img src={item.img} alt="" />
                                            <div className="SmallMBook_list_p">
                                                <h3>{item.title}</h3>
                                                <p>{item.describe}</p>
                                            </div>
                                            <div className="SmallMBook_list_bottom">
                                                <div className="SmallMBook_list_fl">
                                                    <img src={item.uesrlogo} alt="" />
                                                    <span>{item.username}</span>
                                                </div>
                                                <div className="SmallMBook_list_fr">
                                                    <img onClick={this.handleCollect.bind(this,item)} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAC4ElEQVRYR62XT08TURTFz+m88seoRBJcyAYF4tK1S/fGlTEREj+AsVNEEYLMMHQIoCDQKcS9CcSEuPILuDIujSujTdCFC9FICAlaOzPXtAqRdtq+gU7Szcy5v3vefXPv6xBHuMRxWsJE5yOh3CIYhJB1FWw/oOP8jotj3ICSvjiVXWSCd/+PFcFy0jYP3dNhxzYg04vdgag8gLaKBAWDfi8nhr/oJN7XxDbgZ7wciDvRSWRVWekaz6IjYhmos/p9+i+Dfl+cKsQyUH/1/zwIVpRtpnS3QdvA3sPF7pa2yL2vzBWrCtoGfDfrAdRbWYwqVBkQx1EFOd2jEsl+JsI+AfpLP4JXALRqlrYgglekfKAwL8KPfiLMtwbbm3Qc/39G2YCfyQ2A4U0BLxLoAZDUTBRXVoTgMyjvQT5XE+YaA9cbFWAuLqkZekLG6We8ryDONgN4BMYWfdfbAtB1hOAmhMh3Fqc9m4KpJtBiI0SQoQAMMp5Xe7zG5uoGrBqWmTpow2ImO0/yvm70cXQCPElaZjnXoTkQZLwpIezjwBvFEuIaVvogR9UgCqZzYyIyU2muEVjjuYiEE0l7qMQ+uCJHceDm0gJZaqIJoWDYsM3lSqM1zwLf9TYAXNdYWWOJyAtlpyNZ9Qy8BnC5MV1L8UZZZiQr0kC5Nd3sDsBTWviGItk1rHQHAdHaAnGWegLD2GzIjSEoghfarVQVM7ICvrtyFQhfxuA3loa4pibNKmZ0F/xtxdnGVH1F6eQzrHQVs0YFsmsAB/TxOkquKys1qPUOBK73VoBL9bAEfkA4HyIEiRGAnfX18s6w0lXMGoPIywvQGw2UXRFmVcveAsfGdkoaGZ3rCE+23xNgqFbnUPDJsM3zWhWocTD9FJGnSnGO4+a3KHO7M17XiQClf1i3AbQfGrnCBcNOjWgZKH98GmceAxwUIASwYdCf1f3gkMncuUCF4wBvAFCEPEtscZQ5s1Bp4A98IBk9OCn6hgAAAABJRU5ErkJggg==" alt="" />
                                                    <span>{item.favnums}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </CollectStyled>
        )
    }
    handleCollect(item){
        let storage = localStorage.getItem("Recommend");
        if(!storage){
            storage=[];
        }else{
            storage=JSON.parse(storage);
        }
        for(let i=0;i<storage.length;i++){
            if(storage[i].id===item.id){
                storage.splice(i,1);
                break;
            }
        }
        
        window.localStorage.setItem("Recommend",JSON.stringify(storage))
        this.setState({
            collect:storage
        })
    }
}

export default Collect;