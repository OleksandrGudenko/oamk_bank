<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Test extends CI_Controller
{
  public function index()
  {
    $data['body']='Test/account_test';
    $this->load->view('Html_test/Body_account', $data);
  }

  public function index_test()
  {
    $data['body']='Test/test_page';
    $this->load->view('Html_test/Body_test', $data);
  }

  public function log_test()
  {
    $data['body']='Test/test_log';
    $this->load->view('Html_test/Header_log', $data);
  }
}


?>
