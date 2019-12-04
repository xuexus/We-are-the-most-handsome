import React, { Component } from 'react';
import {SmallMBookStyled} from "./styled";

class SmallMBook extends Component {
    constructor(){
        super()
        this.state={
            fore:[
                {
                    title:"收藏",
                    path:"/smallMBook/collect"
                },
                {
                    title:"推荐",
                    path:"/smallMBook/recommend"
                },
                {
                    title:"达人测评",
                    path:"/smallMBook/appraisal"
                },
                {
                    title:"养宠视频",
                    path:"/smallMBook/video"
                }
            ],
        }
    }
    render() {
        let {fore,num} = this.state;
        return (
            <SmallMBookStyled>
                <div className="SmallMBook">
                    <div className="SmallMBook_nav">
                        <div className="SmallMBook_nav_search">
                            <div className="SmallMBook_search_left">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAwCAYAAACScGMWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjIyOUI2MjY4NEVDQjExRTlBRERERkUzQ0E1MTkzNTgxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjIyOUI2MjY5NEVDQjExRTlBRERERkUzQ0E1MTkzNTgxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjI5QjYyNjY0RUNCMTFFOUFERERGRTNDQTUxOTM1ODEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjI5QjYyNjc0RUNCMTFFOUFERERGRTNDQTUxOTM1ODEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5PbGe4AAAFjElEQVR42rxZaWxVRRS+vaWIWsAIL2CNcYlIVKpoqxFEFlfANSrYaEgU16aCC+KSRrEKGqoRgcQYqmjEtYsGxcYa+AEVreVpJUqLIhrXxgDRUmxNra3fMd+Yk8m78+b28XqSL9w7nTvzvTNnHXKKioqCAcgI4HxgOlAInAQMB0YCncB+YDfwCbAR2Ap0p1oomUxGbjIkJqkpQBlwJXBoxJzhxNHAVOAB4C9gCVAZZ7PQc14hNdAIlDiIRckw4O64x5NOc7nAw0B5irnNwAdAE7AT2AMcIPGxwHjgHOBS4DSg6mCSOxKoBWaosR5gLbCShFKJ2Nb3hJB/NBigRJErABqACWqsgfa2OxgkyUnhrSNpW4V87wXuB54F+rPA4RqawCp47gGXQ+QAbylickRXAyuyRGwiTWcZUFNcXBy6yC0GLuHzP/TM97J4cl3cR2QmcF8UueOBCvX+EPBuls3qG2vPCmjvxFTknmY8EtnE93QyCrgL2ADsAPbSS+sZ1xIeayxjBjHx8EnbIU4HWmhzfzMu7Uzj5Q8y+uenObangKV0rJTpC9o6FY/bGVfFtidgvNVo7g4SE3k1DTHx5g+Bx9MQEzmMaet94IioSSAiWn9TOWWZOdahwFw19xnHZjL3bSswfwHcDsivHw2cwvfP1ZyLgXeAPMfaK9VzCbSZJ+QmMxuYjb5yLFDOasR4s8Q/sYs1QCuwD2jjezHt0XjjdFe2gPa2qRMTPueGlhbqHcSOslz9HtpTX8R8sZ1VQKkauxc4xrHHBvU8TcidoQYaHR+W0YYCViirPcNFlQpJ4o13OuZ+rJ7PEnLj1ECr48PL1PMTMeOZtuPLHfPa1PMJQm6MGvgp4qM8GrxJaVtikvuIFXLAPBpVD+r9C0JWrQE/7ncEW1PB/KyM3Fdk/i8q8CcinOJP9ZofqizR51i81yoOMi3PfH5cbsiUY5qW3IiJ+xjtRY4FDo9JLJ/fmYL1t1STENtGqNe9oVK3aOQ4R1j4VNnfVTHJzVIBOBmVytQP+M/+hNzXauBkxwa16vkR4BBPYkMZvI3UOObqyvu7kAnfyHmOD1+iMwTsU6s87E/+/hwLC2Meax3zJ+sGKrTCwkWOD7uZrozMoxYKHBmlDrjZyir7HXvM1AFZPGgb27oEs8V466i1vAFMAhao+n82sB7YTM2M4glcYVUt0oOsi2IFZzgb/5hCU5y0aQjduo5lk8iNrIKjZCHQziIxhwG1hIhypiWs6VwyTz3XIeb1mhj3vPrDbR51mlSr09hQu0Qa7wtY+/U7tDaaSjGyTgfG7bx0mcRypZQVh0saOV9M4UKGoQRts5UFaYunRy9UCmmC1rbafetsVqwif9Aj9wxC7ywOtUtVPHNBrsZucOqZoAOW1EuDwZFKRSyp46ndty5See9WHlc2RcqnG/T+0Fp/FLlmBk0TQF/2bO8GImNYzv/vBCC2Jd39XDl7z4AXgLVMQQdTctnljeX7r+w30l4edjJm9fB9qmeDHUeWK5ORY5wPrf3ue7PZzKbZyAKrUclESmnbRh4DsYa4164rrNvI1Y4s4CvXWo1RvXVX4k0uYKe0UdnJK8CcARKTS+7XVEH7JXC99s645Hq4qC40JfnPj0nsOqBaOda3vGrrcH3kc5vexYWSSoMvsOD0EfHC1xWxXXSG9nQf+l71d3DBRhUDK1g4DnOEi0qWSmafHSwYfvDZNIxxNB3U4Ho1dhMLhnHW3AQT/2I19hmJtftuGMa0nW4WmLqDn8gjn6NK/RZ14WPuQGawGA2yRc70nIuYE7tUW1nNO5FNzCwmwC6nU3XG3SjMIGaJkU+hgetEnqfKrhIG876BbJAJuYDHdybwojW+mR1XdSaLZ0pORP5j4xYWq23s0MTefsx04X8FGADFRkw9Am9VzQAAAABJRU5ErkJggg==" alt=""/>
                                <span>狗狗</span>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAJ0lEQVQY02M0Njb+z4AEzp49y4jMR5dnYiAR0F4DI7oAIT8NQj8AANUsCadG+0h2AAAAAElFTkSuQmCC" alt=""/>
                            </div>
                            <div className="SmallMBook_search_center">
                                <div>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAdCAYAAAC5UQwxAAAEMUlEQVRIS72WXWhcRRTH/2fWvaakD1nMFlsEi1+EWLWIiEQfjTH1IQpuEUvKbrJzL43EkiKiUm1aLSJFKlTN3pm7261vssXSgBRNbV+iIsUHC37FRot2ETR0fTAabrL3yKSb5WYTN2m6OrCwzJ05v/Mx5z9D+J8H1eOl0+mbiOgpIcTDzHwXgA2V9VMAvgZwtlwuv5/NZi+s1u9lgX19fZsikcjrRPQ0gOtWMBYw80kAL2itJ1YCLwHatv04Mx8lohYAPoATQRAcZ+Zzk5OTxXg8zvF4fJPv+x1CiG4A2wGsAzDDzM9rrY/Ugy4COo5jM/MIAAFg1Pf93fl8/mI9A8lk8kbLsg4x8w4iImY+orV+9t/2VIG2bT8G4CQzCyHEi67rvrFSesLfpZTbiegYgCZmPqC13rfc/nmgbdutzPwNEcWJ6GXXdV+7GtjC2nQ6vU0IYeopmLlLa3261s4C8G0AzzDzmNa6CwCvBVhx/iUAB5n5AhG1K6Vmw7bIRAfgFwBWEARbPM/7dq0wsy+RSERisdh5AO1E1Oe67tFa4C4A7wI4pZTadi2wUGp3CiFMPT9TSj24CCil/ICInmDmfq11rhHAoaGhddPT07+bdhFCbMxkMr8t2DUpNSpx69zcXFsul/u+EUBjQ0o5RkRGoXq01qNVoJTybyJqAtCslPqrUUDHcd5i5t0A9iilDocjLJtjrJQyzb7m01nrqJTyFSLaD2C/Umo4DLwMIFYul2/IZrPmf0OGlPJVItoLYK9S6mAYeA7AfUKIhzKZzKcNoV2p4TEi2hkEQdrzvGy4hu8Q0QAz79NaH2gU0LZt089tzHy/1toENT/IcZxHmfkUgAmlVFsj6phKpdqj0ai5Ly+XSqUNhULBnJMrwIoymNbYTEQJ13WPX2uUtm27RqKZOaO1NsJSHfNamk6nbSGEWfSz7/v35PP5P9YKlVJuJaL5FBotdV33hyVAE2VLS8s4ET0A4BMA3bWiuxoHhoeHRbFYPE9EdwI4rJTaU7uveh8mk8nNlmUZz4yYj5ZKpR2FQuHP1YAW1kgp7yAio1YzQoibw5JWrWHYoG3b9wL4qAKdCIJgl+d5Z1YLTSQSViwW+xLAFgBfRCKR7pGRkdKSlIYnHMe53bxhiOjuyvw4M79HRGeUUj8BCIwy9ff330JEHUEQjOdyuR8XbJiXnhDiLIDbAHwlhHhkkXgv533F0+cAmF8stMZcpibN6wFEzTwzj2qte8J2KtAx04cAvguCoNPzvEvzB6leugYGBtbPzs4+SUQ9poEBbKw8lJiIiiZtRPSm67qf19pJpVLxaDT6MYCtAC6Wy+VO836tC6w1YiJvbW1tnpqami4UCuYJWXckk8kWy7I+BNAB4Fff97uuCrgSYLnvvb29zU1NTSeIqNOk9z8HGicGBwevn5mZOUREl/4BIumwKwvIx2wAAAAASUVORK5CYII=" alt=""/>
                                    <span>请输入搜索内容</span>
                                </div>
                            </div>
                            <div className="SmallMBook_search_right">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAsCAYAAAAjFjtnAAAHU0lEQVRoQ81af4xcVRX+zntvZ2fbddtSJC1Yu9Q2S3e6s/PunaU1aEUIgo0Ixir+oNYQoyaIipqgsaYKkgYTiQop+gcGGmswGsIvwcSEIlQb2t77dqe72gUEC2jFolXYtsPOm3vMmbzZzG73x3S27c75d+495/vevffcc78zhNNguVxule/7lwPIA+gC8E4A5wKYl7gvAnidmV8GMAzAOud29/f3DwDg2UCgRifncrmc53mfJaIPA7iwQT+HiejBUqm0Y2BgYG8jPk6ZgFLqQ0T0TQCX1AR8lZl3AXjWOTdERC95nnfEGHMcgNfV1TW/vb19kXOu0/O8bma+mIguA7C8xocQ2GaMefhUVqVuAr29vWEQBD8B8J4k6H8A3MfMv7TWmka+XhiGeSK6DsBmInq7+GDmPQBuqtfnjAS01i3MvJWIbgEQyF4GcAeA7ckXbgT7uDmdnZ3pxYsX38DM3yai8wGUnHPbPM/7vjGmNF2AaQlkMpkl6XT6N7JdmNkR0d0jIyNbhoeH35w16kkcZDKZ9nQ6vRXAzQB8Zv6T7/sf3bdv3z+nijclgWw22xUEwe+IqBPAIWbeZK195kwAn+gzn89f4pzbSUTLmflv5XL5yoGBgecmiz0pgSQt/gHAUgB/BHCtMUa2zlkzrbWk4YeSZHGYmddba1+YCOAkAn19fcucc08BWAHg96lU6po9e/acOGvIawJpreUeERJXAHjRObcuiqIjtVgmEgi01rsBrJVsEMfxFYVC4dhcgK/GTEg8mWB60lorZFz193EEtNZbANzGzIeIqNcY87+5BF+N3dfXt8Q5Z2VLM/Mt1tofnESgp6dnRSqVGmLmViK63BgjF1PTWC6X2+D7/mMAiqVSKVMoFF4ScGMroJTaQUSbAOwwxmxuGuQ1QKoYmfkBa+0nxwjkcrlO3/efT3L9KmOMFF1NZ729vRcEQSCZqCVZheHKCiil7iQiuTya9utXv6ZS6qdE9AUAdxljviwESGv9DwBLAGhjjByWpjWlVJaIpAx/3RizlJRS64hICqgXjTHvalrk48+CVLzdzrlL5et/B8CtzHy3tfameghks9kLgyC4n4jkvng2juPN1axQz3wZMxsfWusfAvgaM39PCMhNdw0zf8Ja+6t6ACilniai91bHMvMz1tr19cyt2csN+8jn8xuZ+dfM/JgQ+AuAi0qlUk+hUBisB4RSqkhErTUE3rLWpuuZW0OgYR9KqdVE9GcAzwkBuW07yuXyov7+/v/WA2KuV2Dt2rUdcRwL7jeFQCy1tzHGr60xpiMi+7elpeX+pD5p+AzMxofWuiIGCAF58QTGGHltletZgWYYM0ZAKXWUiBaOjo6ec+DAgaPNAG4mDDVb6A1ZgYOi5TBzt7VWDnTTWxiG3Z7nDVUP8aMARCr52P79++X9OyvTWn8ljuMnJj4BwzBc7nneBmPMPbMKIOpZbRpVSn2XiLYy84+stVIPNWxa6y8CuIeZR+Rdcfz48Xt93+d0On09M0ucRQBuNMZsbzhITe1Wucjy+fyliSh10BizejaOV65c2bFgwYJ7AWyczA8zP+qc+0y96XoqLFpruQNWV0oJyUBa68OJlnlairkwDD/oed6NAOS2JmYWYWC7tVa266xMJE3f9yMAovwtrZbTdxHRlxKxSgI3rSmlfkZEn2fmH1trv1ohIKeaiAaJaGR0dHR5s6bTNWvWLEulUs8TURDHcbckirEnpdb6twA2OOe+HkXRnc24BFrrnQA+xcw7rbXXV27iKlCl1EdE6m6ksjwbZJVSVxORKNcnnHPdURQdGkcgl8st9H3/qKRAa+3bzgaoemOEYXi+53migMur8RvGGHkPVGycLqSUeouIUsVisXVoaGi03gBnclw2m50fBMEuIuoTpdAYc9WkwlYy8A2Rtq21bafSZDhTBARTS0vLIwAuY+YXgiBYt3fv3n/Xxqs9A1cR0RPMvN9aK2zn1LLZ7HlBEDxMROuY+e9E9D5jzF8ngqrNQvKc/Dgzb7HW3j6X6MMwXO953i8ALBOxAcAHJgM/dga01j0AImaO5R4YHBx8bS4ISCnS0dFxq7SYiMiTjBjH8cZCofCvqfBUb+JHiOjqU1EmTifBRIH+HIBvJZlGHlm3GWO2AZAX45RWJVDJPs658ybq7xNnShuora3tOufcDZLFEjVi2iBTRU+afJ9ONNnFybhdzrmboygS8WpGqxDQWsulIM3pO5xzcpAPOeeOSG8gyQQrmPndAK4kIklj1Qb2y8VicVVtyhX90vf9tmPHjr02PDx8IpPJeADa582bt7BcLncyc4aILgbwfiK6oIpQ+mHOudv7+/sfnxF1zYBqLbSJiO6TfTfT5EQAfto593NpANZ2b5K2kAjDkobrsVeY+UEiEk22IUlzLAvJySci6dfKXwXewcznEtF8ANKsfhWALOlTzrmHoigSLfUky2QyqdbW1gekOQJA+r6iFUkMaVHJXw1eAXCQmaNyuby7Xh1qui/xf07QfuylXKPJAAAAAElFTkSuQmCC" alt=""/>
                            </div>
                        </div>
                        <div className="SmallMBook_nav_froe">
                            {
                                fore.map((item,index)=>{
                                    return (
                                        <p key={item.path} onClick={this.handleFore.bind(this,item.path)} className={this.props.location.pathname===item.path?'active':''}>{item.title}</p>
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                    
                </div>
            </SmallMBookStyled>
        )
    }
    handleFore(path,index){
       this.props.history.push(path)
    }
}
export default SmallMBook;