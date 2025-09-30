import { useParams } from "react-router-dom"

const User = () => {
    const params = useParams()
    return (
        <div>
            Hello my name is {params.username}
        </div>
    )
}

export default User