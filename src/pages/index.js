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