import axios from 'axios';

// 일정 등록 파트
export const addSchedule = (userid, petid, data) => axios.post(`http://localhost:8080/api/vaccination/userId=${userid}/petId=${petid}`, data);
export const getScheduleList = id => axios.get(`http://localhost:8080/api/vaccination/userId=${id}`);

// 게시판 파트
export const getBoard = () => axios.get('http://localhost:8080/api/post');
export const getBoardDetail = id => axios.get(`http://localhost:8080/api/post/${id}`);
export const addBoard = feedData => axios.post('http://localhost:8080/api/post');

// 프로필 파트
export const getPetlist = id => axios.get(`http://localhost:8080/api/pet/all/userId=${id}`);
export const getPetDetail = id => axios.get(`http://localhost:8080/api/pet/${id}`);
export const addPet = (id, data) => axios.post(`http://localhost:8080/api/pet/userId=${id}`, data);
export const editPet = (id, data) => axios.patch(`http://localhost:8080/api/pet/${id}`, data);
export const deletePet = (petid, userid) => axios.delete(`http://localhost:8080/api/pet/petId=${petid}/userId=${userid}`);
export const deleteUser = id => axios.delete(`http://localhost:8080/api/user/${id}`);
export const editUser = (id, data) => axios.patch(`http://localhost:8080/api/user/${id}`, data);
export const logout = () => axios.get('http://localhost:8080/logout');