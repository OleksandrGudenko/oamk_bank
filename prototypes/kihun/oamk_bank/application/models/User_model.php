<?php
	class User_model extends CI_Model{
		public function register($enc_password){
			// User data array
			$data = array(
				'firstname' => $this->input->post('firstname'),
				'lastname' => $this->input->post('lastname'),
				'city' => $this->input->post('city'),
				'address' => $this->input->post('address'),
				'postalcode' => $this->input->post('postalcode'),
				'email' => $this->input->post('email'),
				'phone' => $this->input->post('phone'),
				'occupation' => $this->input->post('occupation'),
				'username' => $this->input->post('username'),
				'password' => $enc_password
			);
			// Insert user
			return $this->db->insert('users', $data);
		}

		// Log user in
		public function login($username, $password){
			// Validate
			$this->db->where('username', $username);
			$this->db->where('password', $password);

			$result = $this->db->get('users');

			if($result->num_rows() == 1){
				return $result->row(0);
			} else {
				return false;
			}
		}

		// Check username exists
		public function check_username_exists($username){
			$query = $this->db->get_where('users', array('username' => $username));
			if(empty($query->row_array())){
				return true;
			} else {
				return false;
			}
		}

		// Check email exists
		public function check_email_exists($email){
			$query = $this->db->get_where('users', array('email' => $email));
			if(empty($query->row_array())){
				return true;
			} else {
				return false;
			}
		}
	}