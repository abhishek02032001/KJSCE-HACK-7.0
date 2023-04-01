import logo from "../images/logo.png";
import appName from "../images/name.png";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid navc">
              <a class="navbar-brand" href="#">
                <img src={logo} alt="" width="40  " class="d-inline-block align-text-center" />
                <img src={appName} alt="" width="150" class="d-inline-block align-text-top   ms-2"/>
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav nText">
                  <a class="nav-link active" aria-current="page" href="adduser">Add New Users</a>
                  <a class="nav-link ms-2" href="user">Users</a>
                  {/* <a class="nav-link ms-2" href="#adduser"></a> */}
              </div>
              </div>
            </div>
          </nav>
  )
}

export default Navbar
