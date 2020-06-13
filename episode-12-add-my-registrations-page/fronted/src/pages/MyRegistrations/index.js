import React, { useState, useEffect } from 'react'
import moment from 'moment';
import api from '../../services/api'
import { Button, ButtonGroup } from 'reactstrap';
import './style.css'


export default function MyRegistrations() {
    const [myEvents, setMyEvents] = useState([])
    const user = localStorage.getItem('user')

    useEffect(() => {
        getMyEvents()
    }, [])

    const getMyEvents = async () => {
        try {
            const response = await api.get('/registration', { headers: { user } })
            console.log(response.data)
            setMyEvents(response.data)
        } catch (error) {

        }

    }

    const isApproved = (approved) => approved === true ? "Approved" : "Rejected"

    const acceptEventHandler = async (eventId) => {
        try {
            await api.post(`/registration/${eventId}/approvals`, {}, { headers: { user } })
            getMyEvents()

        } catch (err) {
            console.log(err)
        }
    }

    const rejectEventHandler = async (eventId) => {
        try {
            await api.post(`/registration/${eventId}/rejections`, {}, { headers: { user } })
            getMyEvents()

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <ul className="events">
            {myEvents.map(event => (
                <li key={event._id}>
                    <div><strong>{event.eventTitle}</strong></div>
                    <div className="events-details">
                        <span>Event Date: {moment(event.eventDate).format('l')}</span>
                        <span>Event Price: £{parseFloat(event.eventPrice).toFixed(2)}</span>
                        <span>User Email: {event.userEmail}</span>
                        <span>Status:
                            <span className={event.approved !== undefined ? isApproved(event.approved) : "Pending"}>{event.approved !== undefined ? isApproved(event.approved) : "Pending"}</span>
                        </span>
                    </div>
                    <ButtonGroup>
                        <Button disabled={event.approved === true || event.approved === false ? true : false} color="secondary" onClick={() => acceptEventHandler(event._id)}>Accept</Button>
                        <Button disabled={event.approved === true || event.approved === false ? true : false} color="danger" onClick={() => rejectEventHandler(event._id)}>Reject</Button>
                    </ButtonGroup>
                </li>
            ))}
        </ul>
    )
}