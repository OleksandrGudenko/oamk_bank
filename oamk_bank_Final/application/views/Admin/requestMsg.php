

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<h2>Request Message</h2>

<table class="table table-hover table-bordered">
  <tr class="info">
    <th>ID</th>
    <th>User ID</th>
    <th>Title</th>
    <th>Message</th>
    <th>Date</th>
  </tr>

<?php
foreach ($request as $row)
{
  echo '<tr>';
  echo '<td>'.$row['id'].'</td>';
  echo '<td>'.$row['user_id'].'</td>';
  echo '<td>'.$row['title'].'</td>';
  echo '<td>'.$row['body'].'</td>';
  echo '<td>'.$row['timestamp'].'</td>';
  // echo '<td class="text-center"><button onclick="delete_user('.$row['id'].')" class="btn btn-danger">Delete</button></td>';
  // echo '<td><button onclick="show_edit('.$row['id'].')" class="btn btn-primary"><span class="glyphicon glyphicon-edit"></button></td>';
  echo '</tr>';
}
?>
</table>
