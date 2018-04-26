<?php

defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
/** @noinspection PhpIncludeInspection */
require APPPATH . 'libraries/REST_Controller.php';

/**
 * This is an example of a few basic user interaction methods you could use
 * all done with a hardcoded array
 *
 * @package         CodeIgniter
 * @subpackage      Rest Server
 * @category        Controller
 * @author          Phil Sturgeon, Chris Kacerguis
 * @license         MIT
 * @link            https://github.com/chriskacerguis/codeigniter-restserver
 */
class Bank extends REST_Controller {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();

        // Configure limits on our controller methods
        // Ensure you have created the 'limits' table and enabled 'limits' within application/config/rest.php
        $this->methods['users_get']['limit'] = 500; // 500 requests per hour per user/key
        $this->methods['users_post']['limit'] = 100; // 100 requests per hour per user/key
        $this->methods['users_delete']['limit'] = 50; // 50 requests per hour per user/key
        $this->methods['accounts_get']['limit'] = 500; // 50 requests per hour per user/key
        $this->methods['accounts_post']['limit'] = 100; // 50 requests per hour per user/key
        $this->methods['accounts_delete']['limit'] = 50; // 50 requests per hour per user/key
        ///
        $this->methods['requests_get']['limit'] = 500; // 500 requests per hour per user/key
        $this->methods['requests_post']['limit'] = 100; // 100 requests per hour per user/key

        $this->methods['loans_put']['limit'] = 500; // 50 requests per hour per user/key
        $this->methods['loans_get']['limit'] = 500; // 50 requests per hour per user/key
        $this->methods['loans_post']['limit'] = 100; // 50 requests per hour per user/key
        $this->methods['loans_delete']['limit'] = 50; // 50 requests per hour per user/key

        $this->load->model('Bank_model');
    }

    public function users_get()
    {
        // Users from a data store e.g. database
        $users=$this->Bank_model->get_users();

        $id = $this->get('id');

        // If the id parameter doesn't exist return all the users

        if ($id === NULL)
        {
            // Check if the users data store contains users (in case the database result returns NULL)
            if ($users)
            {
                // Set the response and exit
                $this->response($users, REST_Controller::HTTP_OK); // OK (200) being the HTTP response code
            }
            else
            {
                // Set the response and exit
                $this->response([
                    'status' => FALSE,
                    'message' => 'No users were found'
                ], REST_Controller::HTTP_NOT_FOUND); // NOT_FOUND (404) being the HTTP response code
            }
        }

        // Find and return a single record for a particular user.

        $id = (int) $id;

        // Validate the id.
        if ($id <= 0)
        {
            // Invalid id, set the response and exit.
            $this->response(NULL, REST_Controller::HTTP_BAD_REQUEST); // BAD_REQUEST (400) being the HTTP response code
        }

        // Get the user from the array, using the id as key for retrieval.
        // Usually a model is to be used for this.

        $user = NULL;

        if (!empty($users))
        {
          //GET the user from database
          $user=$this->Bank_model->get_user($id);
        }

        if (!empty($user))
        {
            $this->set_response($user, REST_Controller::HTTP_OK); // OK (200) being the HTTP response code
        }
        else
        {
            $this->set_response([
                'status' => FALSE,
                'message' => 'User could not be found'
            ], REST_Controller::HTTP_NOT_FOUND); // NOT_FOUND (404) being the HTTP response code
        }
    }


//from here for put(update)user

public function users_put()
{
    $id=$this->put('id');

    $update_data = array(
      'firstname'=>$this->put('firstname'),
      'lastname'=>$this->put('lastname'),
      'city'=>$this->put('city'),
      'address'=>$this->put('address'),
      'postalcode'=>$this->put('postalcode'),
      'email'=>$this->put('email'),
      'phone'=>$this->put('phone'),
      'occupation'=>$this->put('occupation')
      );

    $this->Bank_model->update_user($id, $update_data);

    $message = [
      'firstname'=>$this->put('firstname'),
      'lastname'=>$this->put('lastname'),
      'city'=>$this->put('city'),
      'address'=>$this->put('address'),
      'postalcode'=>$this->put('postalcode'),
      'email'=>$this->put('email'),
      'phone'=>$this->put('phone'),
      'occupation'=>$this->put('occupation'),
      'message' => 'Updates a resource'
    ];

    $this->set_response($message, REST_Controller::HTTP_CREATED); // CREATED (201) being the HTTP response code
}


//until here

//account test
public function accounts_get()
{
    // Accounts from a data store e.g. database
    $accounts=$this->Bank_model->get_accounts();

    $id = $this->get('accountid');

    // If the accounts parameter doesn't exist return all the Accounts

    if ($id === NULL)
    {
        // Check if the accounts data store contains accounts (in case the database result returns NULL)
        if ($accounts)
        {
            // Set the response and exit
            $this->response($accounts, REST_Controller::HTTP_OK); // OK (200) being the HTTP response code
        }
        else
        {
            // Set the response and exit
            $this->response([
                'status' => FALSE,
                'message' => 'No accounts were found'
            ], REST_Controller::HTTP_NOT_FOUND); // NOT_FOUND (404) being the HTTP response code
        }
    }

    // Find and return a single record for a particular account.

    $id = (string)$id;

    // Validate the account.

    $account = NULL;

    if (!empty($accounts))
    {
      //GET the account from database
      $account=$this->Bank_model->get_account($id);
    }

    if (!empty($account))
    {
        $this->set_response($account, REST_Controller::HTTP_OK); // OK (200) being the HTTP response code
    }
    else
    {
        $this->set_response([
            'status' => FALSE,x
            'message' => 'Account could not be found'
        ], REST_Controller::HTTP_NOT_FOUND); // NOT_FOUND (404) being the HTTP response code
    }
}
// till here account get
    public function accounts_post()
    {
        // add a new account

        $add_data = array(
          'user_id'=>$this->post('user_id'),
          'account_id'=>$this->post('account_id'),
          'Balance'=>$this->post('Balance'),
          'credit'=>$this->post('credit')
        );

        $this->Bank_model->add_account($add_data);

        $message = [
          'user_id'=>$this->post('user_id'),
          'account_id'=>$this->post('account_id'),
          'Balance'=>$this->post('Balance'),
          'credit'=>$this->post('credit'),
          'message' => 'Added a resource'
        ];

        $this->set_response($message, REST_Controller::HTTP_CREATED); // CREATED (201) being the HTTP response code
    }



// from here account balance put
    public function accounts_put()
    {
        $id=$this->put('account_id');

        $update_data=$this->put('Balance');

        $this->Bank_model->update_account($id, $update_data);

        $message = [
          'Balance'=>$this->put('Balance'),
          'message' => 'Updates a resource'
        ];

        $this->set_response($message, REST_Controller::HTTP_CREATED); // CREATED (201) being the HTTP response code
      }

//from here for request get

public function requests_get()
{
    // Requests from a data store e.g. database
    $requests=$this->Bank_model->get_requests();

    $id = $this->get('id');

    // If the id parameter doesn't exist return all the requests

    if ($id === NULL)
    {
        // Check if the requests data store contains requests (in case the database result returns NULL)
        if ($requests)
        {
            // Set the response and exit
            $this->response($requests, REST_Controller::HTTP_OK); // OK (200) being the HTTP response code
        }
        else
        {
            // Set the response and exit
            $this->response([
                'status' => FALSE,
                'message' => 'No requests were found'
            ], REST_Controller::HTTP_NOT_FOUND); // NOT_FOUND (404) being the HTTP response code
        }
    }

    // Find and return a single record for a particular request.

    $id = (int) $id;

    // Validate the id.
    if ($id <= 0)
    {
        // Invalid id, set the response and exit.
        $this->response(NULL, REST_Controller::HTTP_BAD_REQUEST); // BAD_REQUEST (400) being the HTTP response code
    }

    // Get the request from the array, using the id as key for retrieval.
    // Usually a model is to be used for this.

    $request = NULL;

    if (!empty($requests))
    {
      //GET the request from database
      $request=$this->Bank_model->get_request($id);
    }

    if (!empty($request))
    {
        $this->set_response($request, REST_Controller::HTTP_OK); // OK (200) being the HTTP response code
    }
    else
    {
        $this->set_response([
            'status' => FALSE,
            'message' => 'Request could not be found'
        ], REST_Controller::HTTP_NOT_FOUND); // NOT_FOUND (404) being the HTTP response code
    }
}


///from here for post(add) customer request
public function requests_post()
{
    // add a new request
    $add_data = array(

      'user_id'=>$this->post('user_id'),
      'title'=>$this->post('title'),
      'body'=>$this->post('body'),
      'timestamp'=>$this->post('timestamp')
    );

    $this->Bank_model->add_request($add_data);

    $message = [

      'user_id'=>$this->post('user_id'),
      'title'=>$this->post('title'),
      'body'=>$this->post('body'),
      'timestamp'=>$this->post('timestamp'),
      'message' => 'Added a resource'
    ];
    $this->set_response($message, REST_Controller::HTTP_CREATED); // CREATED (201) being the HTTP response code
}

//from here loans

public function loans_get()
{
    // loans from a data store e.g. database
    $loans=$this->Bank_model->get_loans();

    $id = $this->get('loan');

    // If the loans parameter doesn't exist return all the loans

    if ($id === NULL)
    {
        // Check if the loans data store contains loans (in case the database result returns NULL)
        if ($loans)
        {
            // Set the response and exit
            $this->response($loans, REST_Controller::HTTP_OK); // OK (200) being the HTTP response code
        }
        else
        {
            // Set the response and exit
            $this->response([
                'status' => FALSE,
                'message' => 'No loans were found'
            ], REST_Controller::HTTP_NOT_FOUND); // NOT_FOUND (404) being the HTTP response code
        }
    }

    // Find and return a single record for a particular user.


    $loan = NULL;

    if (!empty($loans))
    {
      //GET the loan from database
      $loan=$this->Bank_model->get_loan($id);
    }

    if (!empty($loan))
    {
        $this->set_response($loan, REST_Controller::HTTP_OK); // OK (200) being the HTTP response code
    }
    else
    {
        $this->set_response([
            'status' => FALSE,
            'message' => 'loan could not be found'
        ], REST_Controller::HTTP_NOT_FOUND); // NOT_FOUND (404) being the HTTP response code
    }
}
// till here loan get

public function loans_post()
    {
        // add a new loan

        $add_data = array(
          'user_id'=>$this->post('user_id'),
          'amount'=>$this->post('amount'),
          'account_id'=>$this->post('account_id')
        );

        $this->Bank_model->add_loan($add_data);

        $message = [
          'user_id'=>$this->post('user_id'),
          'amount'=>$this->post('amount'),
          'account_id'=>$this->post('account_id'),
          'message' => 'Added a resource'
        ];

        $this->set_response($message, REST_Controller::HTTP_CREATED); // CREATED (201) being the HTTP response code
    }



// from here loan put test

public function loans_put()
{
    $id=$this->put('loan_id');

    $update_data = array(
      'loan_id'=>$this->put('loan_id'),
      'amount'=>$this->put('amount')
      );

    $this->Bank_model->update_loan($id, $update_data);

    $message = [
    'loan_id'=>$this->put('loan_id'),
    'amount'=>$this->put('amount'),
    'message' => 'Updates a resource'
    ];

    $this->set_response($message, REST_Controller::HTTP_CREATED); // CREATED (201) being the HTTP response code
}

public function loans_delete()
{
    $id = (int) $this->get('loan_id');

    // $this->some_model->delete_something($id);
    $paid_loan=$this->Bank_model->get_paid_loan($id);
    if(!empty($paid_loan[0]['loan_id'])){
      $this->Bank_model->delete_loan($id);
      $message = [
          'loan_id' => $id,
          'message' => 'Deleted the resource'
      ];
        $this->set_response($message, REST_Controller::HTTP_OK); // NO_CONTENT (204) being the HTTP response code
    }
    else{
      $message="Error";
      $this->set_response($message, REST_Controller::HTTP_NO_CONTENT);
    }
}


//untill here loans

//from here about login

public function logins_get()
{
    // logins from a data store e.g. database
    $logins=$this->Bank_model->get_logins();

    $id = $this->get('login');

    // If the id parameter doesn't exist return all the logins

    if ($id === NULL)
    {
        // Check if the logins data store contains logins (in case the database result returns NULL)
        if ($logins)
        {
            // Set the response and exit
            $this->response($logins, REST_Controller::HTTP_OK); // OK (200) being the HTTP response code
        }
        else
        {
            // Set the response and exit
            $this->response([
                'status' => FALSE,
                'message' => 'No logins were found'
            ], REST_Controller::HTTP_NOT_FOUND); // NOT_FOUND (404) being the HTTP response code
        }
    }

    // Find and return a single record for a particular login.

    // Get the login from the array, using the id as key for retrieval.
    // Usually a model is to be used for this.

    $login = NULL;

    if (!empty($logins))
    {
      //GET the user from database
      $login=$this->Bank_model->get_login($id);
    }

    if (!empty($login))
    {
        $this->set_response($login, REST_Controller::HTTP_OK); // OK (200) being the HTTP response code
    }
    else
    {
        $this->set_response([
            'status' => FALSE,
            'message' => 'login could not be found'
        ], REST_Controller::HTTP_NOT_FOUND); // NOT_FOUND (404) being the HTTP response code
    }
}

public function logins_post()
{
    // add a new login

  $add_user = array(
    'username'=>$this->post('username'),
    'firstname'=>$this->post('firstname'),
    'lastname'=>$this->post('lastname'),
    'city'=>$this->post('city'),
    'address'=>$this->post('address'),
    'postalcode'=>$this->post('postalcode'),
    'email'=>$this->post('email'),
    'phone'=>$this->post('phone'),
    'occupation'=>$this->post('occupation')
  );

$this->Bank_model->add_user($add_user);

    $message = [
      'username'=>$this->post('username'),
      'firstname'=>$this->post('firstname'),
      'lastname'=>$this->post('lastname'),
      'city'=>$this->post('city'),
      'address'=>$this->post('address'),
      'postalcode'=>$this->post('postalcode'),
      'email'=>$this->post('email'),
      'phone'=>$this->post('phone'),
      'occupation'=>$this->post('occupation'),
      'message' => 'Added a resource'
                ];
    $this->set_response($message, REST_Controller::HTTP_CREATED); // CREATED (201) being the HTTP response code
}

//till here login

}//this is end of BANK RESTAPI
