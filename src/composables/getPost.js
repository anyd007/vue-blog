import { ref } from "@vue/reactivity";

const getPost = (id) =>{

    const post = ref(null)
    const error = ref(null)

    let load = async() =>{
        try{
            let data = await fetch('http://localhost:3000/posts/' + id)
            if(!data.ok){
                throw Error("nie ma takiego wpisu")
            }
            post.value = await data.json()
        }
        catch (err) {
            error.value = err.message
        }
    }
    return {post, error, load}
}
export default getPost