import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Hikaru`
    }, [title])
}

export default useTitle;