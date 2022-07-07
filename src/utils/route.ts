import routers from "@/router/baseRouter"
import { RouteObject } from "react-router-dom";
export const getRouteStack = (pathName: string) => {
    const result: RouteObject[] = []
    routers.forEach(route => {
        if (route.path === pathName) {
            result.push(route)
        } else if (route.children && route.children.length){
            const target = route.children.find(child => child.path === pathName)
            if (target) {
                result.push(route, target)
            }
        }
    })
    return result
}