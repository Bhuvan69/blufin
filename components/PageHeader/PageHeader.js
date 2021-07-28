import styles from "./PageHeader.module.scss";
import PropTypes from 'prop-types';

const PageHeader = (props) => {
    return (
        <div
            className={styles.pageHeader}
            style={{ backgroundImage: `url(${props.image})` }}
        >
            <h1 className={styles.title}> {props.title} </h1>
        </div>
    );
};

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default PageHeader;
