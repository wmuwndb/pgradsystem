import React from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
    state = {};
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">
                        Postgraduate Student Management System
            </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <form className="form-inline my-2 my-lg-0">
                            <button
                                className="btn btn-outline-success my-2 my-sm-0"
                                type="submit"
                            >
                                User
                </button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
