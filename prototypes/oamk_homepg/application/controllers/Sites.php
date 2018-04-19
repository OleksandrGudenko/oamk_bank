<?php
class Sites extends CI_Controller {
  public function index(){
    $this->load->view('sites/header.php');
    $this->load->view('sites/main.php');
    $this->load->view('sites/footer');
  }

  public function about(){
    $this->load->view('sites/header.php');
    $this->load->view('sites/about.php');
    $this->load->view('sites/footer');
}

  public function everydaybank(){
    $this->load->view('sites/header.php');
    $this->load->view('sites/everydayBank.php');
    $this->load->view('sites/footer');
  }

  public function contact(){
    $this->load->view('sites/header.php');
    $this->load->view('sites/contact.php');
    $this->load->view('sites/footer');
  }



  
    


}

?>
