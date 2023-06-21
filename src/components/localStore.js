const getLocalUser = () => JSON.parse(localStorage.getItem('therapy'));

const setLocalUser = (user) => localStorage.setItem('therapy', JSON.stringify(user));

const removeLocalUser = async () => localStorage.removeItem('therapy');

export { getLocalUser, setLocalUser, removeLocalUser };
