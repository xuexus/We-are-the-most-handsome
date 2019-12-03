import React, { Component } from "react";
import { RecommendStyle } from "./styled";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
import { connect } from "react-redux"

@connect(mapStateToProps, mapDispatchToProps)
class Recommend extends Component {
    render() {
        let { five, list } = this.props;
        return (
            <RecommendStyle>
                <div className="SmallMBook_container">
                    <div className="SmallMBook_container_five">
                        {
                            five.map((item, index) => {
                                return (
                                    <img src={item.img_url} key={item.img_url} alt="" />
                                )
                            })
                        }
                    </div>

                    {
                        list.map((item) => {
                            return (
                                <div className="SmallMBook_container_list" key={item.data.id}>
                                    <div>
                                        <img src={item.data.cover.img_url} alt="" />
                                        <div className="SmallMBook_list_p">
                                            <h3>{item.data.title}</h3>
                                            <p>{item.data.describe}</p>
                                        </div>
                                        <div className="SmallMBook_list_bottom">
                                            <div className="SmallMBook_list_fl">
                                                <img src={item.data.user.avatar.img_url} alt="" />
                                                <span>{item.data.user.username}</span>
                                            </div>
                                            <div className="SmallMBook_list_fr">
                                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAEjUlEQVRYR61Xb4hUVRT/nftmHRZcBGkjlMBch7nnPXC/RNQns6IQIoL+mYJEEEQplVobWwllpf3RrBS/BIGlrpn0IYoiaq0PFbQsy8J7906zaCUh2R+IhGqduSfOMrPM6phvRg8MDO+d87u/c849v3sfoQtL03ReFEUvicg6AHUROSAiTyRJMt0pHHUaoP5Zlu0kosdaY0VkVxzHc57lwe6YQKVSWRxCmCKinlqttiKKIiGir0SkZowZKJfLP+dZuOnTMQHn3JsA1gMYYeZ7GxU5SESrAexhZn2X2zoi0Jp9FEXLS6VSpiulaRpHUTQJ4AwRLeukCh0RaGYvIofiONaMZ805dxCAPtvNzBvyliA3gYmJicXFYnEKwLwQwvIkSdLWRarValyv1ydF5IwxJncVchNwzr0BYAMRHbLWzsm+ScR7PyIi93RShXMIjI6OFvr7+5f09PSUQgjLAJQav5UAetpl3ySQpmlijJnZCwCOAvieiHRiqvV6fYqZjxNRrbVyMwScc2sA6I4uA1iiC7XrIRG9Z63VDM9rWZYdIqK7z+NwRkR+JCJPRCPW2v2UZdkQEW1vCQgAfhKRKWNMNYRQ1Sz0f61WO3YhtRsbG+vp6+sb0OqJSLN6JZ0OIrpSRKKWtYbJOfcLgMtFZH2hUPiCiI6VSqV/8+7iTvyq1WpRRJaKyMoQwh4Ap5TAKQD9RLTKWvtJJ4Dd+jrnbgGga/2mBLYAeBbAP8aYO8rl8sfdAueJq1Qqq0TkiIj0hhCeIxEh772OmErotIisjuP4gzxgnfpUKpXbQwgjAIoq29baDbNj6Jx7BcBmPVSIaB0zq7JdMsuybDUR7WtM2A5m3qzgc3TAOaet2EJE9Xq9/kCSJG9fCgbOufsAvAUgIqKt1lpt+4ydI0TOuScBvAhAj9n11tq9F0PCe/+giOiOpxDC00mSKPastZVi7/0jIvKaeoUQ1iVJ8m43JLz3a0XknZlMiTZaa3edjXPes8A5dxjAnar/zLy7GwJZlj1MRBp7hJkV6xz7PwJfA7gOwPXM/GU3BJxzKxpnwrfMrFi5Cag+/AmgD8BlzPx7NwROnDix8PTp0xr7l7V2ARFJrhY45/RAOg7gJDMv6mbxZoxzTu+Ii6anp5cODg4q5hxr2wLn3K0APgTwGTPffJEEPgWgGLcxs2LmIqCjuA3ATmbe1I5AmqY3GmOeb0yKjtfn7fycczsAbAQwzMyKmYvAfgBriOh+a+0cMcqy7FoiegHADWdhjQJ4ipm/aX3eECHFOMDMa3MR8N5PiMigMeaacrn8nQZVKpXBEMJWANoebd0fAFS+1R4HsFDFC8BHIYRnkiSZ0Bfe+6tFRDEmmXkwL4EpERkwxtxUq9VOEpHK810AjO5oEXm9WCy+OjAwoJOCsbGxBfPnz98kIo82JieIyPsiotJ+hTFG2/MDM1+Vi0DzYDrL+W8AewuFwvZSqfRru36Pj4/39/b2DgF4CEBvq48qaxzHuhcuvAcaH58vi4j2TK9oh40x2/J+cHjvF4UQhvVuKCIFY8y+KIqG2t20/gM5WAQXQSmP/wAAAABJRU5ErkJggg==" alt="" />
                                                <span>{item.data.favnums}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </RecommendStyle>
        )
    }
    componentDidMount() {
        this.props.handleFive()
        this.props.handleRecommend()
    }
}

export default Recommend;