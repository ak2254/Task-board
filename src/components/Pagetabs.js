import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../css/nav.css';


import { Nav, NavItem, NavLink} from 'react-bootstrap';
import Button from "react-bootstrap/Button";


class Pagetabs extends React.Component {

    isActiveTab(tabName) {
        return (tabName === this.props.currentView) ? 'nav-link active' : 'nav-link';
    }
    onTabClick(event, tabName) {
        event.preventDefault();
        this.props.onViewChange(tabName);
    }

    render () {
        return (
            <div>
            <Nav>

                <Nav.Item>
                    <Nav.Link lassName={this.isActiveTab('grid')}
                              onClick={(e) => this.onTabClick(e, 'grid')} >Grid</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={this.isActiveTab('list')}
                              onClick={(e) => this.onTabClick(e, 'list')}>List</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={this.isActiveTab('add')}
                              onClick={(e) => this.onTabClick(e, 'add')}>Add</Nav.Link>
                </Nav.Item>

            </Nav>
                <div style={{
                    textAlign: 'center'
                }
                }>

                <a style={{

                    textAlign: 'center',
                    marginBottom: '30px',
                    background: '#f81894',

                    textDecoration:'none',
                    display:'inline-block',
                    boxShadow: '5px 5px 5px 4px rgba(0,0,0,0.5)',
                    color:'#ffffff',
                   borderRadius: '4px',
                   width:'auto',
                    borderTop: '1px solid #f81894',
                    borderRight:'1px solid #f81894',
                    borderBottom:'1px solid #f81894',
                    borderLeft:'1px solid #f81894',
                    paddingTop:'4px',
                    paddingBottom:'4px',
                    fontFamily:'Lato, Tahoma, Verdana, Segoe, sans-serif' ,

                    msoBorderAlt:'none'
                }

                } href= "https://web.njit.edu/~ak2254/landing-page/index.html" trarget="_black">
                    <span style={{
                        paddingLeft:'30px',
                        paddingRight: '30px',
                        fontSize:'13px',
                        display:'inline-block'}}>
                        <span style={{
                              fontSize: '14px',
                              lineHeight: '2',
                           fontFamily: 'Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 32px;'}}>

                            <strong>View Project Description</strong> </span></span></a>

                </div>
            </div>
        )
    };
}

export default Pagetabs;
