import React from "react";
import { Row, Col, Container, Button, Image, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH, faSearch } from '@fortawesome/free-solid-svg-icons';

class Searchbar extends React.Component<any> {

    state: any;

    constructor(props: any) {
        super(props);
        this.state = {
            data: this.props.el
        }
    }
    render(): React.ReactNode {
        return (
            <div>
                <FontAwesomeIcon icon={faSearch} /><input type="text" className="searchbar" placeholder="Search Item..." />
            </div>
        );
    }
}

export default Searchbar;