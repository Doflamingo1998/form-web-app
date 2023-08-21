import React, { useState } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createSurvey } from "../../redux/actions/surveyActions";
import "./Dashboard.css";

const Dashboard = ({ createSurvey }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newSurveyTitle, setNewSurveyTitle] = useState("");
  const [newSurveyDescription, setNewSurveyDescription] = useState("");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setNewSurveyTitle("");
    setNewSurveyDescription("");
  };

  const handleNewSurveySubmit = async () => {
    try {
      if (newSurveyTitle.trim() === "" || newSurveyDescription.trim() === "") {
        toast.error("Please fill out all fields.", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
        return;
      }

      await createSurvey({
        title: newSurveyTitle,
        description: newSurveyDescription
      });

      toast.success("New survey added successfully!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });

      closeModal();
    } catch (error) {
      console.error("Error creating survey:", error);
      toast.error("Failed to add new survey. Please try again later.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }
  };

  return (
    <main className="main">
      <div className="main__content">
        <div className="main__top">
          <input
            type="text"
            className="search-bar"
            placeholder="Search surveys..."
          />
          <button className="btn-new-survey" onClick={openModal}>
            Add New Survey
          </button>
        </div>
        <div className="survey-list">
          <div className="survey-card">
            <h2 className="survey-card__title">Survey Title 1</h2>
            <p className="survey-card__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="survey-card">
            <h2 className="survey-card__title">Survey Title 2</h2>
            <p className="survey-card__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal__close" onClick={closeModal}>
          &times;
        </div>
        <h2 className="modal__title">Add New Survey</h2>
        <input
          type="text"
          className="modal__input"
          placeholder="Title"
          value={newSurveyTitle}
          onChange={(e) => setNewSurveyTitle(e.target.value)}
        />
        <input
          type="text"
          className="modal__input"
          placeholder="Description"
          value={newSurveyDescription}
          onChange={(e) => setNewSurveyDescription(e.target.value)}
        />
        <div className="modal__buttons">
          <button className="modal__button submit" onClick={closeModal}>
            Cancel
          </button>
          <button
            className="modal__button cancel"
            onClick={handleNewSurveySubmit}
          >
            Submit
          </button>
        </div>
      </Modal>

      <ToastContainer />
    </main>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({
  createSurvey
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
