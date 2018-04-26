<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Page_Controller extends CI_Controller
{
  public function index()
  {
    if($this->session->userdata('logged_in')){
      redirect('users/logout');
    }
    $data['body']='Page_Outside/index';
    $this->load->view('Structure/Home', $data);
  }

  public function everyBank()
  {
    if($this->session->userdata('logged_in')){
      redirect('users/logout');
    }
    $data['body']='Page_Outside/everyBank';
    $this->load->view('Structure/Home', $data);
  }

  public function About()
  {
    if($this->session->userdata('logged_in')){
      redirect('users/logout');
    }
    $data['body']='Page_Outside/about';
    $this->load->view('Structure/Home', $data);
  }

  public function Contact()
  {
    if($this->session->userdata('logged_in')){
      redirect('users/logout');
    }
    $data['body']='Page_Outside/contact';
    $this->load->view('Structure/Home', $data);
  }

  public function openAcct()
  {
    if($this->session->userdata('logged_in')){
      redirect('users/logout');
    }
    $data['body']='Page_Outside/openAcct';
    $this->load->view('Structure/Home', $data);
  }

  public function loan()
  {
    if($this->session->userdata('logged_in')){
      redirect('users/logout');
    }
    $data['body']='Page_Outside/loan';
    $this->load->view('Structure/Home', $data);
  }


}


?>
