import PropTypes from "prop-types";
import { Modal, Image } from "react-bootstrap";

const FullScreenImage = (props) => {
    return (
        <Modal show={props.show} onHide={() => props.onHide(false)}>
            <Modal.Header closeButton>
                <h5 className="modal-title">Image</h5>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center">
                <Image
                    id="fullsreen-image"
                    className="fullscreen-image"
                    src={props.imageSrc}
                    width={400}
                    height={400}
                />
            </Modal.Body>
        </Modal>
    );
};

FullScreenImage.propTypes = {
    imageSrc: PropTypes.string,
    show: PropTypes.bool,
    onHide: PropTypes.func.isRequired,
};

FullScreenImage.defaultProps = {
    imageSrc: "",
    show: true,
};

export default FullScreenImage;
