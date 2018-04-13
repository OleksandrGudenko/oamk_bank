<?php
	class Users extends CI_Controller{
		public function index(){
			if(!$this->session->userdata('logged_in')){
				redirect('users/login');
			}
				$this->load->view('Html_test/Header_account');
				$this->load->view('Test/account_test');
				$this->load->view('Html_test/Footer_test');

		}
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
				$enc_password = md5($this->input->post('password'));

				$this->user_model->register($enc_password);

				// Set message
				$this->session->set_flashdata('user_registered', 'You are now registered and can log in');

				redirect('home');
			}
		}

		// Log in user
		public function login(){
			$data['title'] = 'Sign In';

			$this->form_validation->set_rules('username', 'Username', 'required');
			$this->form_validation->set_rules('password', 'Password', 'required');

			if($this->form_validation->run() === FALSE){
				$this->load->view('templates/header');
				$this->load->view('users/login', $data);

			} else {
				
				// Get username
				$username = $this->input->post('username');
				// Get and encrypt the password
				$password = md5($this->input->post('password'));

				// Login user
				

				if ($username == 'admin' && $password == md5('admin')){
					$user_data = array(
						'firstname' => 'admin',
						'admin' => true,
						'logged_in' => true
					);

					$this->session->set_userdata($user_data);

					// Set message
					$this->session->set_flashdata('user_loggedin', 'You are now logged in');

					redirect('users/index');
				}

				else {
					$user = $this->user_model->login($username, $password);
					if($user != FALSE){
						// Create session
						$user_data = array(
							'user_id' => $user->id,
							'username' => $user->username,
							'firstname' => $user->firstname,
							'lastname' => $user->firstname,
							'email' => $user->email,
							'admin' => false,
							'logged_in' => true
						);

						$this->session->set_userdata($user_data);

						// Set message
						$this->session->set_flashdata('user_loggedin', 'You are now logged in');

						redirect('users/index');
					} else {
						// Set message
						$this->session->set_flashdata('login_failed', 'Login is invalid');

						redirect('users/login');
					}
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

			redirect();
		}

		// Check if username exists
		public function check_username_exists($username){
			$this->form_validation->set_message('check_username_exists', '<p class="alert alert-danger">That username is taken. Please choose a different one</p>');
			if($this->user_model->check_username_exists($username)){
				return true;
			} else {
				return false;
			}
		}

		// Check if email exists
		public function check_email_exists($email){
			$this->form_validation->set_message('check_email_exists', '<p class="alert alert-danger">That username is taken. Please choose a different one</p>');
			if($this->user_model->check_email_exists($email)){
				return true;
			} else {
				return false;
			}
		}
	}