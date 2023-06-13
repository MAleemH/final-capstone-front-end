const CREATE_APPOINTMENT = 'CREATE_APPOINTMENT';

export const createNewAppointment = async (userid, datareserve) => {
  const {
    disease, city, appointmentDate, appointmentTime, doctorID,
  } = datareserve;
  const UserId = `${userid}`;
  const reservation = {
    disease,
    city,
    appointmentDate,
    appointmentTime,
    user: UserId,
    doctor: doctorID,
  };