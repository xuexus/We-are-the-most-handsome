import Loadable from "react-loadable";
import Loading from "@/common/loading";

export const Home = Loadable({
    loader:()=>import("./home"),
    loading:Loading
})

export const Classify = Loadable({
    loader:()=>import("./classify"),
    loading:Loading
})

export const SmallMBook = Loadable({
    loader:()=>import("./smallMBook"),
    loading:Loading
})

export const Cart = Loadable({
    loader:()=>import("./cart"),
    loading:Loading
})

export const Main = Loadable({
    loader:()=>import("./main"),
    loading:Loading
})

export const Login = Loadable({
    loader:()=>import("./login"),
    loading:Loading
})

export const Register = Loadable({
    loader:()=>import("./register"),
    loading:Loading
})

export const ClassifyLeft = Loadable({
    loader:()=>import("@/components/classifyLeft"),
    loading:Loading
})

export const ClassifyRight = Loadable({
    loader:()=>import("@/components/classifyRight"),
    loading:Loading
})

export const Recommend = Loadable({
    loader:()=>import("@/components/recommend"),
    loading:Loading
})

export const Collect = Loadable({
    loader:()=>import("@/components/collect"),
    loading:Loading
})

export const Appraisal = Loadable({
    loader:()=>import("@/components/appraisal"),
    loading:Loading
})

export const Video = Loadable({
    loader:()=>import("@/components/video"),
    loading:Loading
})

export const GoodList = Loadable({
    loader:()=>import("./goodList"),
    loading:Loading
})