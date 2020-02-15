import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Friends = () => {
    const [friends, setFriends] = useState([])
    useEffect(() => { 
        axiosWithAuth().get('/friends')
            .then(res => setFriends(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h2>Friends</h2>
            {friends.map(friend => {
                return <div key={friend.id}>
                    <h3>{friend.name}</h3>
                    <h5>{friend.age}</h5>
                    <h6>{friend.email}</h6>
                </div>
            })}
        </div>
    )
}

export default Friends