<?php


class Bank_model extends CI_model
{
    function get_users()
    {
      $this->db->select('*');
      $this->db->from('users');
      return $this->db->get()->result_array();
    }
    function get_user($id)
    {
      $this->db->select('*');
      $this->db->from('users');
      $this->db->where('id', $id);
      return  $this->db->get()->result_array();
    }

    function add_user($add_data)
    {
      $this->db->insert('users', $add_data);
    }

    function update_user($id, $update_data)
    {
      $data = array(
        'firstname' => $update_data['firstname'],
        'lastname' => $update_data['lastname'],
        'city' => $update_data['city'],
        'address' => $update_data['address'],
        'postalcode' => $update_data['postalcode'],
        'email' => $update_data['email'],
        'phone' => $update_data['phone'],
        'occupation' => $update_data['occupation']
      );
      $this->db->where('id', $id);
      $this->db->update('users', $data);
    }

    function delete_user($id)
    {
      $this->db->where('id', $id);
      $this->db->delete('users');
    }

// from here, about account
  function get_accounts()
  {
    $this->db->select('accounts_table.user_id, account_id, Balance, credit, loans.amount as loan amount, loans.loan_id');
    $this->db->from('accounts_table');
    $this->db->join('loans', 'accounts_table.loan_id=loans.loan_id', 'left');
    $this->db->order_by('user_id');
    return $this->db->get()->result_array();
  }


  function get_account($id)
  {
    $this->db->select('*');
    $this->db->from('accounts_table');
    $this->db->where('account_id', $id);
    return  $this->db->get()->result_array();
  }

    function update_account($id, $update_data)
  {
    $this->db->set('Balance', $update_data, false);
    $this->db->where('account_id', $id);
    $this->db->update('accounts_table');
  }

  function add_account($add_data)
  {
    $this->db->insert('accounts_table', $add_data);
  }

//from here for requests

function get_requests()
{
  $this->db->select('*');
  $this->db->from('customer_requests');
  return $this->db->get()->result_array();
}


function get_request($id)
{
  $this->db->select('*');
  $this->db->from('customer_requests');
  $this->db->where('id', $id);
  return  $this->db->get()->result_array();
}

  function update_request($id, $update_data)
{
  $this->db->where('id', $id);
  $this->db->update('customer_requests', $update_data);
}

function add_request($add_data)
{
  $this->db->insert('customer_requests', $add_data);
}

//from here for loan
function get_loans()
{
  $this->db->select('loans.loan_id,amount,accounts_table.account_id, Balance, loans.user_id');
  $this->db->from('loans');
  $this->db->join('accounts_table', 'accounts_table.loan_id=loans.loan_id', 'left');
  return  $this->db->get()->result_array();
}
function get_loan($id)
{
  $this->db->select('loans.loan_id,amount,accounts_table.account_id,Balance,loans.user_id');
  $this->db->from('loans');
  $this->db->join('accounts_table', 'accounts_table.loan_id=loans.loan_id', 'left');
  $this->db->where('loans.user_id', $id);
  return  $this->db->get()->result_array();
}

function add_loan($add_data)
{
  $this->db->insert('loans', $add_data);
}

function update_loan($id, $update_data)
{
  $this->db->where('loan_id', $id);
  $this->db->update('loans', $update_data);
}


}//this is end of bank model


?>
