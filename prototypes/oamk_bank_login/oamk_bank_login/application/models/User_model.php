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
		public function username($username){
			// Validate
			$this->db->where('username', $username);

			$result = $this->db->get('users');

			if($result->num_rows() == 1){
				return $result->row(0);
			} else {
				return false;
			}
		}
		public function passwords($user,$passcode)
		{ 
		$this->db->set('password', $passcode);
		$this->db->where('username', $user);
		$this->db->update('users');
		}

		public function mail_get($user)
		{
		$this->db->select('*');
		$this->db->from('users');
		$this->db->where('username', $user);
		return  $this->db->get()->result_array();
		}

		public function get_password($user)
		{
		$this->db->select('password');
		$this->db->from('users');
		$this->db->where('username', $user);
		return $this->db->get()->row()->password;
		}

		public function getinfo($username){
			$this->db->select('*');
			$this->db->from('users');
			$this->db->where('username',$username);
			return $this->db->get()->result_array();
		}
	}