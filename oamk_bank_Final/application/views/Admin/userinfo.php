
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<h2>User info</h2>


<table class="table table-hover table-bordered">
  <tr class="info">
    <th>ID</th>
    <th>Name</th>
    <th>City</th>
    <th>Address</th>
    <th>Postal Code</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Occupation</th>
    <th>Username</th>
    <th>DELETE</th>
    <th>EDIT</th>
  </tr>

<?php
foreach ($users_for_info as $row)
{
  echo '<tr>';
  echo '<td>'.$row['id'].'</td>';
  echo '<td>'.$row['firstname'].'&nbsp'.$row['lastname'].'</td>';
  echo '<td>'.$row['city'].'</td>';
  echo '<td>'.$row['address'].'</td>';
  echo '<td>'.$row['postalcode'].'</td>';
  echo '<td>'.$row['email'].'</td>';
  echo '<td>'.$row['phone'].'</td>';
  echo '<td>'.$row['occupation'].'</td>';
  echo '<td>'.$row['username'].'</td>';
  echo '<td class="text-center"><button onclick="delete_user('.$row['id'].')" class="btn btn-danger">Delete</button></td>';
  echo '<td><button onclick="show_edit('.$row['id'].')" class="btn btn-primary"><span class="glyphicon glyphicon-edit"></button></td>';
  echo '</tr>';

  echo '<tr style="visibility:hidden;" id="user_edit_info'.$row['id'].'">';
  echo '<td>'.'<input readonly class="input_for_edit" type="number" value="'.$row['id'].'" id="edit_id'.$row['id'].'"></td>';
  echo '<td>'.'<input class="input_for_edit" type="text" value="'.$row['firstname'].'" id="edit_fname'.$row['id'].'">';
  echo '<input class="input_for_edit" type="text" value="'.$row['lastname'].'" id="edit_lname'.$row['id'].'"></td>';
  echo '<td>'.'<input class="input_for_edit" type="text" value="'.$row['city'].'" id="edit_city'.$row['id'].'"></td>';
  echo '<td>'.'<input class="input_for_edit" type="text" value="'.$row['address'].'" id="edit_address'.$row['id'].'"></td>';
  echo '<td>'.'<input class="input_for_edit" type="number" value="'.$row['postalcode'].'" id="edit_postalcode'.$row['id'].'"></td>';
  echo '<td>'.'<input class="input_for_edit" type="text" value="'.$row['email'].'" id="edit_email'.$row['id'].'"></td>';
  echo '<td>'.'<input class="input_for_edit" type="text" value="'.$row['phone'].'" id="edit_phone'.$row['id'].'"></td>';
  echo '<td>'.'<input class="input_for_edit" type="text" value="'.$row['occupation'].'" id="edit_job'.$row['id'].'"></td>';
  echo '<td>'.'<input class="input_for_edit" type="text" value="'.$row['username'].'" id="edit_username'.$row['id'].'"></td>';
  echo '<td colspan="2" class="text-center"><button onclick="edit_an_user('.$row['id'].')" class="btn btn-info">Edit User</button></td>';
  echo '</tr>';
}
?>
</table>
