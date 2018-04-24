<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Page_Controller extends CI_Controller
{
  public function index()
  {
    $data['body']='Page_Outside/index';
    $this->load->view('Structure/Home', $data);
  }

  public function everyBank()
  {
    $data['body']='Page_Outside/everyBank';
    $this->load->view('Structure/Home', $data);
  }

  public function About()
  {
    $data['body']='Page_Outside/about';
    $this->load->view('Structure/Home', $data);
  }

  public function Contact()
  {
    $data['body']='Page_Outside/contact';
    $this->load->view('Structure/Home', $data);
  }

  public function openAcct()
  {
    $data['body']='Page_Outside/openAcct';
    $this->load->view('Structure/Home', $data);
  }


}


?>
