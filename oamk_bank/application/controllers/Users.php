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
	if ($user == 'admin'){
		$data['msg'] = '';
		$data['user'] = $user;
		$data['body']='Users/password';
		$this->load->view('Structure/Home', $data);
	}
	else {
		$username=$this->User_model->username($user);
		if ($username != FALSE){
		$this->load->model('User_model');
		$passcode = rand(100000,999999);
		$enc_password = password_hash($passcode, PASSWORD_DEFAULT);
		$mail=$this->User_model->mail_get($user);
		$email = $mail[0]['email'];
		$from = "oamkbank@din17sp.com";
		$to = $email;
		$subject = "OTP Password from OAMK BANK";
		$message = "Your one time login password:  ".$passcode;
		$headers = "From: OAMK BANK <oamkbank@din17sp.com>";
		mail($to, $subject, $message, $headers);
		$data['msg']='Password sent to your registered email.';
		$data['user'] = $user;
		$this->User_model->passwords($user,$enc_password);
		$data['body']='Users/password';
		$this->load->view('Structure/Home', $data);
		} else {

			$this->session->set_flashdata('id_invalid', 'Username invalid.');
			redirect('users/login');
		}
	}
}

public function banking()
{
	$this->load->model('User_model');
	$user=$this->input->post('user');
	$password = $this->input->post('password');
	$confirm_password=$this->User_model->get_password($user);
	if ($user == 'admin'){
		if($password == $confirm_password){
			$data['user'] = $user;
			$data['body']='Pages_inside/account_page';
			$this->load->model('Bank_model');
		  $data['users_for_info']=$this->Bank_model->get_users();
		  $data['request']=$this->Bank_model->get_requests();
			$userinfo_data = array(
				'firstname' => 'Admin',
				'lastname' => '',
				'admin' => true,
				'logged_in' => true
			);

			$this->session->set_userdata($userinfo_data);
			$this->load->view('Structure/Account', $data);
		}	else {
			if($user == null){
				redirect('users/login');
			  }
			// Set message
			$data['user'] = $user;
			$data['body']='Users/password';
			$data['msg']='Password was wrong';
			$this->load->view('Structure/Home', $data);
		}
	} else {
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
				'admin' => false,
				'logged_in' => true
			);

			$this->session->set_userdata($userinfo_data);

			// Set message
			$this->session->set_flashdata('user_loggedin', 'You are now logged in');

			$this->load->view('Structure/Account', $data);
		} else {
			if($user == null){
				redirect('users/login');
			  }
			// Set message
			$data['user'] = $user;
			$data['body']='Users/password';
			$data['msg']='Password was wrong';
			$this->load->view('Structure/Home', $data);
		}
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
