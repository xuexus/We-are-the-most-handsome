import React from "react";
import { VideoStyled } from "./styled";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
import { connect } from "react-redux"
import {withRouter} from "react-router-dom"

@connect(mapStateToProps, mapDispatchToProps)
@withRouter

class Video extends React.Component {
    render() {
        let { video } = this.props;
        return (
            <VideoStyled>
                <div className="SmallMBook_video">
                    {
                        video.map(item => {
                            return (
                                <div className="SmallMBook_video_list" key={item.data.title}>
                                    <div className="SmallMBook_video_big">
                                        <div className="SmallMBook_video_000"></div>
                                        <img src={item.data.cover.img_url} alt="" />
                                        <p>{item.data.title}</p>
                                        <h4>{item.data.jishu}</h4>
                                    </div>
                                    <div className="SmallMBook_video_small">
                                        <div>
                                            {
                                                item.data.videoList.map(items => {
                                                    return (
                                                        <div key={items.id}>
                                                            <div>
                                                                <img src={items.cover.img_url} alt="" />
                                                                <h6>
                                                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAOCAYAAAD5YeaVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NTg4M2Y0OC1hNGQ4LWY1NGItOWJhMy1jYWE4NmY0ZjQ1MmMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUFCNzI1QjMzQjM0MTFFOUJEMkJFNjUwNEM4NDdGQTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUFCNzI1QjIzQjM0MTFFOUJEMkJFNjUwNEM4NDdGQTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTE0MWNhYzUtMGU2NS0zNzRiLWE0M2QtM2Y4MGI5MjYxNTkzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc1ODgzZjQ4LWE0ZDgtZjU0Yi05YmEzLWNhYTg2ZjRmNDUyYyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PunD9bUAAAB/SURBVHjaYvj//z8DECsD8X4g/gLEC4BYECqOgmGMbf9RwW0g1sSl+OV/TPABiL2wKf77Hzv4A8Ql6IoJgflAzMrCQBxIAOJ3jGDjgRYQoeEzEwMJgBTFM4j14FyQB4kJumL0oHuFI1I8sEXKVlKiWwmI9wLxZyCehyshAQQYADiUiluqhp0SAAAAAElFTkSuQmCC" alt="" />
                                                                    <span>{items.times}</span>
                                                                </h6>
                                                            </div>
                                                            <p>{items.title}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAY1BMVEVHcEz////z8/X09Pfb29vz9PXx9PTy9PXz9fX09fbz8/bz8/P////09Pbz9vbz9PX09PXz9fbz8/Pz9fXz9vbz9PX19fbz9fXz8/Xz9PXX19fY2Njd3t7q6+vq6uvk5OXe3t7lN1sLAAAAGXRSTlMAApNbB+Nb36v4VVYHWlX546tVlFbkk5OU8S9LewAAAQhJREFUaN7t281uwjAYRNEv4GCbf2gLNU6A939KCASqbiolkTKqdGc5Cx/JSrwbsyZuFXxMYyX6sHL2zr5MY6ect3YxSYpMioeuwe98g8+TKp9my61M/1raLOkysyDUg3mh7i0K9WhJGXR0dHR0dHR0dHR0dHR0dHR0dHR0dHT0P1Nfc77W/brB+uX0yKVPN1g/n9qcu3fD9ep1atW9G67n16m5e/ffde3Na7867R93f0WqnKu6X8c7j46Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojv5bj0I8indSO6EexPs4V8rw0pmtZfqimWUeRfjhuYf9kODfRbvHXQu2wIufKbKbBr8ZTd74MH3uoG/6Wu5ZZV2kTgAAAABJRU5ErkJggg==" alt="" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </VideoStyled>
        )
    }
    componentDidMount() {
        this.props.handleVideo(4,this.props.location.search.split("=")[1])
    }
}

export default Video;