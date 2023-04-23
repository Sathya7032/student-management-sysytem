import axios from "axios";

const STUDENTS_BASE_REST_API_URL = "http://localhost:8085/api/v1/students";

class HelpService {
  getAllStudents() {
    return axios.get(STUDENTS_BASE_REST_API_URL);
  }
  createStudent(student) {
    return axios.post(STUDENTS_BASE_REST_API_URL, student);
  }
  getStudentById(studentId) {
    return axios.get(STUDENTS_BASE_REST_API_URL + "/" + studentId);
  }

  updateStudent(studentId, s1) {
    return axios.put(STUDENTS_BASE_REST_API_URL + "/" + studentId, s1);
  }

  deleteStudent(studentId) {
    return axios.delete(STUDENTS_BASE_REST_API_URL + "/" + studentId);
  }
}

export default new HelpService();
