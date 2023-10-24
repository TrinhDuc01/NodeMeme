
import Modal from 'react-bootstrap/Modal';


export default function LeadModal({ text, toggleShowHide, children }) {
    return (
        <>
            <Modal
                show={toggleShowHide}
                backdrop="static"
                keyboard={true}
            >
                <Modal.Header>
                    <Modal.Title>{text}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {children}

                </Modal.Body>
            </Modal>
        </>
    )
}
