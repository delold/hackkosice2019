<script>
  /* average_income - per month
     hours_count - per day
     type_of_job = { "quarter", "half", "full" };
      - if type_of_job is defined and not empty,
        hours_count can have any value */
  function money_to_time( average_income, hours_count, type_of_job ){

    if( average_income < 0 )
      throw "Wrong average_income!";

    if( typeof type_of_job !== "undefined" && type_of_job !== "" ){
      if( type_of_job == "quarter" )
        return average_income/( 40/4 * 4 ); 
      else if( type_of_job == "half" )
        return average_income/( 40/2 * 4 );
      else if( type_of_job == "full" )
        return average_income/( 40 * 4 );
    }
    else{

      if( hours_count <= 0 )
        throw "Wrong hours_count!";

      return average_income/hours_count;
    }
    
  }
  
</script>
