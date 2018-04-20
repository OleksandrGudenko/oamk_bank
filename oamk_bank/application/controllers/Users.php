<?php
	class Users extends CI_Controller{
		// Register user

public function login() {
	$data['body']='Users/login';
	$this->load->view('Structure/Home', $data);
}

public function login_verify()
{
	$this->load->model('User_model');
	$user=$this->input->post('username');
	$username=$this->User_model->username($user);
	if ($username != FALSE){
	$passcode = rand(100000,999999);
	$enc_password = password_hash($passcode, PASSWORD_DEFAULT);
	$mail=$this->User_model->mail_get($user);
	$email = $mail[0]['email'];
	$data['msg']='Password sent to '.$email.$passcode;
	$data['user'] = $user;
	$this->User_model->passwords($user,$enc_password);
	$data['body']='Users/password';
	$this->load->view('Structure/Home', $data);
	} else {

		$this->session->set_flashdata('id_invalid', 'Username invalid.');
		redirect('users/login');
	}

}

public function banking()
{

	$this->load->model('User_model');
	$user=$this->input->post('user');
	$password = $this->input->post('password');
	$confirm_password=$this->User_model->get_password($user);
	$userinfo = $this->User_model->getinfo($user);
	if(password_verify($password, $confirm_password)){
		// Create session
		$data['user'] = $user;
		$data['body']='Pages_inside/account_page';

		$userinfo_data = array(
			'user_id' => $userinfo[0]['id'],
			'username' => $userinfo[0]['username'],
			'firstname' => $userinfo[0]['firstname'],
			'lastname' => $userinfo[0]['lastname'],
			'email' => $userinfo[0]['email'],
			'logged_in' => true
		);

		$this->session->set_userdata($userinfo_data);

		// Set message
		$this->session->set_flashdata('user_loggedin', 'You are now logged in');

		$this->load->view('Structure/Account', $data);
	} else {
		// Set message
		$data['user'] = $user;
		$data['body']='Users/password';
		$data['msg']='ID or Password was wrong';
		$this->session->set_flashdata('login_failed', 'Login is invalid');

		$this->load->view('Structure/Home', $data);
	}
}

		// Log user out
		public function logout(){
			// Unset user data
			$this->session->unset_userdata('logged_in');
			$this->session->unset_userdata('user_id');
			$this->session->unset_userdata('username');
			$this->session->unset_userdata('admin');
			$this->session->unset_userdata('lastname');
			$this->session->unset_userdata('firstname');
			$this->session->unset_userdata('email');

			// Set message
			$this->session->set_flashdata('user_loggedout', 'You are now logged out');

			redirect('');
		}
	}
