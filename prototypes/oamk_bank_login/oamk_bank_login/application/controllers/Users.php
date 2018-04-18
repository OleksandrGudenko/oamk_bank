<?php
	class Users extends CI_Controller{
		// Register user
		public function register(){
			$data['title'] = 'Sign Up';

			$this->form_validation->set_rules('firstname', 'First name', 'required');
			$this->form_validation->set_rules('lastname', 'Last name', 'required');
			$this->form_validation->set_rules('city', 'City', 'required');
			$this->form_validation->set_rules('address', 'Address', 'required');
			$this->form_validation->set_rules('postalcode', 'Postal Code', 'required');
			$this->form_validation->set_rules('email', 'Email', 'required|callback_check_email_exists');
			$this->form_validation->set_rules('phone', 'Phone Number', 'required');
			$this->form_validation->set_rules('occupation', 'Occupation', 'required');
			$this->form_validation->set_rules('username', 'Username', 'required|callback_check_username_exists');
			$this->form_validation->set_rules('password', 'Password', 'required');
			$this->form_validation->set_rules('password2', 'Confirm Password', 'matches[password]');

			if($this->form_validation->run() === FALSE){
				$this->load->view('templates/header');
				$this->load->view('users/register', $data);
			} else {
				// Encrypt password
				$enc_password = password_hash($this->input->post('password'), PASSWORD_DEFAULT);

				$this->user_model->register($enc_password);

				// Set message
				$this->session->set_flashdata('user_registered', 'You are now registered and can log in');

				redirect('');
			}
		}
public function login() {
	$this->load->view('templates/header');
	$this->load->view('users/login');
}

public function login_verify()
{
	$user=$this->input->post('username');
	$username=$this->user_model->username($user);
	if ($username != FALSE){
	$this->load->model('User_model');
	$passcode = rand(100000,999999);
	$enc_password = password_hash($passcode, PASSWORD_DEFAULT);
	$mail=$this->User_model->mail_get($user);
	$email = $mail[0]['email'];
	$data['msg']='Password sent to '.$email.$passcode;
	$data['user'] = $user;
	$this->User_model->passwords($user,$enc_password);
	$data['body']='Test/password';
	$this->load->view('Html_test/password', $data);
	} else {
		
		$this->session->set_flashdata('id_invalid', 'Username invalid.');
		redirect('users/login');
	}

}

public function banking()
{
	// if(!$this->session->userdata('logged_in')){
	// 	redirect('users/login');
	// }
	$this->load->model('User_model');
	$user=$this->input->post('user');
	// $username=$this->input->post('username');
	$password = $this->input->post('password');
	$confirm_password=$this->User_model->get_password($user);
	$userinfo = $this->User_model->getinfo($user);
	if(password_verify($password, $confirm_password)){
		// Create session
		$data['user'] = $user;
		$data['body']='Test/account_test';
		
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

		$this->load->view('Html_test/Body_account', $data);
	} else {
		// Set message
		$data['user'] = $user;
		$data['body']='Test/password';
		$data['msg']='ID or Password was wrong';
		$this->session->set_flashdata('login_failed', 'Login is invalid');

		$this->load->view('Html_test/password', $data);
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
