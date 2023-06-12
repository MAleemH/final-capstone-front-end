import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAppointment } from '../../redux/appointment/appointment';

const BookAppointment = () => {
    const dispatch = useDispatch();
    const doctordata = useSelector((state) => state.doctorReducer);
    const { userid } = JSON.parse(window.localStorage.getItem('BookDoctorUser'));
    const userID = userid || 1;
    const { payload } = doctordata;
    const doctorID = payload?.doctor.id;
    const [disease, setDisease] = useState();
    const [city, setCity] = useState();
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [message, setMessage] = useState();
    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    const handleSubmit = (e) => {







