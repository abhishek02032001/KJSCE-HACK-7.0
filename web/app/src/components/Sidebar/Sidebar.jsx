import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineEdit, AiOutlineFileAdd } from 'react-icons/ai';
import { BiBrain, BiDroplet } from 'react-icons/bi';
import { TbReportSearch } from 'react-icons/tb';
import { IoAccessibilityOutline } from 'react-icons/io5';
import { RiBodyScanLine } from 'react-icons/ri';
import { HiOutlineUsers } from 'react-icons/hi';
import './Sidebar.scss';
import logo from '../../assets/name-icon.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="container">
        <div className="linkSection">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className="linkSection">
          <Link to="/" className="link">
            <AiOutlineHome className="icon" />
            <p>Home</p>
          </Link>

          <Link to="/cases/add" className="link">
            <AiOutlineEdit className="icon" />
            <p>Prescribe</p>
          </Link>

          <Link to="/cases/add" className="link">
            <AiOutlineFileAdd className="icon" />
            <p>Create Case</p>
          </Link>

          <Link to="/cases/add" className="link">
            <AiOutlineFileAdd className="icon" />
            <p>Add Diagnosis</p>
          </Link>
        </div>

        <div className="linkSection">
          <Link to="/cases" className="link">
            <TbReportSearch className="icon" />
            <p>Cases</p>
          </Link>
          <Link to="/patients" className="link">
            <HiOutlineUsers className="icon" />
            <p>Patients</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
