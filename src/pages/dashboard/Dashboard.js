import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createSurvey,
  deleteSurvey,
  listSurvey
} from "../../redux/actions/surveyActions";
import "./Dashboard.css";

const Dashboard = ({ createSurvey, listSurvey, deleteSurvey, surveys }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newSurveyTitle, setNewSurveyTitle] = useState("");
  const [newSurveyDescription, setNewSurveyDescription] = useState("");
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [surveyToDeleteId, setSurveyToDeleteId] = useState(null);

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
      await listSurvey();
    } catch (error) {
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

  const handleDeleteSurvey = (surveyId) => {
    setDeleteConfirmationOpen(true);
    setSurveyToDeleteId(surveyId);
  };

  const cancelDelete = () => {
    setDeleteConfirmationOpen(false);
    setSurveyToDeleteId(null);
  };

  const confirmDelete = async () => {
    if (surveyToDeleteId) {
      try {
        await deleteSurvey(surveyToDeleteId);
        await listSurvey();
        toast.success("Survey deleted successfully!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      } catch (error) {
        console.error("Error deleting survey:", error);
        toast.error("Failed to delete survey. Please try again later.", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }
      cancelDelete();
    }
  };

  useEffect(() => {
    listSurvey();
  }, [listSurvey]);

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
          {surveys.map((survey) => (
            <div className="survey-card" key={survey.id}>
              <h2 className="survey-card__title">{survey.title}</h2>
              <p className="survey-card__description">{survey.description}</p>
              <span
                className="delete-icon"
                onClick={() => handleDeleteSurvey(survey.id)}
              >
                <i className="fas fa-trash-alt"></i>
              </span>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
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
          <button className="modal__button cancel" onClick={closeModal}>
            Cancel
          </button>
          <button
            className="modal__button submit"
            onClick={handleNewSurveySubmit}
          >
            Submit
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={deleteConfirmationOpen}
        onRequestClose={cancelDelete}
        ariaHideApp={false}
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal__title">Confirm Delete</div>
        <div className="modal__message">
          Are you sure you want to delete this survey?
        </div>
        <div className="modal__buttons">
          <button className="modal__button cancel" onClick={cancelDelete}>
            Cancel
          </button>
          <button className="modal__button delete" onClick={confirmDelete}>
            Delete
          </button>
        </div>
      </Modal>

      <ToastContainer />
    </main>
  );
};

const mapDispatchToProps = {
  createSurvey,
  listSurvey,
  deleteSurvey
};

const mapStateToProps = (state) => ({
  surveys: Array.isArray(state.survey.surveys.data)
    ? [...state.survey.surveys.data]
    : []
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
