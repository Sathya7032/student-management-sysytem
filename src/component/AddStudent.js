import React, { useState, useEffect } from "react";
import HelpService from "../service/HelpService";
import { useNavigate, useParams } from "react-router-dom";

const AddStudent = () => {
  const [fname, setFname] = useState("");
  const [sname, setSname] = useState("");
  const [standard, setStandard] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const saveOrUpdateStudent = (e) => {
    e.preventDefault();
    const student = { fname, sname, standard };

    if (id) {
      HelpService.updateStudent(id, student)
        .then((response) => {
          console.log(response.data);

          navigate("/students");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      HelpService.createStudent(student)
        .then((response) => {
          navigate("/students");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    HelpService.getStudentById(id)
      .then((response) => {
        setFname(response.data.fname);
        setSname(response.data.sname);
        setStandard(response.data.standard);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const title = () => {
    if (id) {
      return (
        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
          update STUDENT
        </p>
      );
    } else {
      return (
        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">ADD STUDENT</p>
      );
    }
  };
  return (
    <div class="container-sm">
      <section class="vh-100">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black">
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      {title()}

                      <form class="mx-1 mx-md-4">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              name="fname"
                              value={fname}
                              onChange={(event) => setFname(event.target.value)}
                              class="form-control"
                            />
                            <label class="form-label" for="form3Example1c">
                              Student First Name
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example3c"
                              name="sname"
                              value={sname}
                              onChange={(event) => setSname(event.target.value)}
                              class="form-control"
                            />
                            <label class="form-label" for="form3Example3c">
                              Student Second Name
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example4c"
                              name="standard"
                              value={standard}
                              onChange={(e) => setStandard(e.target.value)}
                              class="form-control"
                            />
                            <label class="form-label" for="form3Example4c">
                              Class
                            </label>
                          </div>
                        </div>

                        <div class="form-check d-flex justify-content-center mb-5">
                          <input
                            class="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          <label class="form-check-label" for="form2Example3">
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            onClick={(e) => saveOrUpdateStudent(e)}
                            class="btn btn-primary btn-lg"
                          >
                            Add Student
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://media.istockphoto.com/id/1410336912/photo/happy-teacher-and-schoolgirl-giving-high-five-during-class-at-school.jpg?b=1&s=170667a&w=0&k=20&c=VzOy6zKCCYu_zVlu-KUwK_ujKYUJxbDERgSyEANQ-8w="
                        class="img-fluid"
                        alt="Sample"/
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddStudent;
