import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineEdit } from 'react-icons/ai';
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
          <Link to="/cases" className="link">
            <TbReportSearch className="icon" />
            <p>Cases</p>
          </Link>
          <Link to="/patients" className="link">
            <HiOutlineUsers className="icon" />
            <p>Patients</p>
          </Link>
          <Link to="/" className="link">
            <AiOutlineEdit className="icon" />
            <p>Edit</p>
          </Link>
        </div>

        {/* <div className="linkSection">
          <Link to="/forms/blood" className="link">
            <BiDroplet className="icon" />
            <p>Blood</p>
          </Link>
          <Link to="/forms/ctscan" className="link">
            <RiBodyScanLine className="icon" />
            <p>CT Scan</p>
          </Link>
          <Link to="/forms/mri" className="link">
            <BiBrain className="icon" />
            <p>MRI</p>
          </Link>
          <Link to="/forms/xray" className="link">
            <IoAccessibilityOutline className="icon" />
            <p>X-Ray</p>
          </Link>
          <Link to="/forms/sonography" className="link">
            <TbReportSearch className="icon" />
            <p>Sonography</p>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
