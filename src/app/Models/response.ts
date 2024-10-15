import { Post } from "./post"

export interface iResponse {
    posts: Post[]
    total: number
    skip: number
    limit: number

}
