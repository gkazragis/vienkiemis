<script type="text/javascript">
function toggle_visibility(id) {
var e = document.getElementById(id);
if(e.style.display == 'block')
e.style.display = 'none';
else
e.style.display = 'block';
}
</script>

<div class="" >
  <ul id="category-ta">
      <li><a href="javascript:void(0)"><i class="fa fa-minus-circle"></i>Category 1</a>
          <ul>
              <li><a href="javascript:void">item 1</a></li>
              <li><a href="javascript:void">item 2</a></li>
              <li><a href="javascript:void">item 3</a></li>
          </ul>
      </li>
  </ul>

<!-- <a href="javascript:void(0)" ><i class="far fa-square"></i></a> -->

</div>
<script type="text/javascript">
$(document).ready(function() {
  // your code here
    $('#category-ta li a').click(function(){
      $(this).next('ul').slideToggle('500');
      $(this).find('svg').toggleClass('fa-plus-circle fa-minus-circle')
    });
  });
</script>
