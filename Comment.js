<script>
jQuery('.form-submit').hide();
jQuery( "#validate-comment" ).on( "click", function() {
     var TextSearch =  jQuery('#comment').val();
   var SearchTerm = 'www.';
    var SearchUrl = '.com';
       

  if (TextSearch.indexOf(SearchTerm) > -1  || TextSearch.indexOf(SearchUrl) > -1) {
      
    alert("Url Not Allowed");
        document.getElementById("comment").value='';
  } else {
    //jQuery('.form-submit').show()
      jQuery('.validate').hide()
     jQuery("input[name='submit']")[0].click();
  }
   
});

</script>
