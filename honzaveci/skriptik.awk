#!/bin/bash

#expects .csv file

if [ "$#" -ne 1 ]; then
  echo "Wrong number of arguments"
  exit;
fi

cat "$1".csv | awk '
BEGIN{

  FS=","
  RS="\n"

  check=0;

  array[1] = "Type";
  array[2] = "Debit/Credit";
  array[3] = "Date";
  array[4] = "Country";
  array[5] = "Amount";
  array[6] = "Device";
  array[7] = "Location";
  array[8] = "Mechant Type";
  array[9] = "Merchant Name";
  array[10] = "Description";
  
  printf "[\n";
}

{

  if( check != 0 ){
   
    if( check > 1 )
      printf " },\n";

    printf "  {"; 
   
    for( i = 1; i <= NF; ++i ){

      if( $i == "---" || $i == " " )
        $i = "";

      if( i == 5 )
        printf " %s: %s", array[i], $i;    
      else 
        printf " %s: '\''%s'\''", array[i], $i;
    
      if( i != NF )
        printf ",";
    }
    printf "\n";
    
    #printf " },\n";
  }

  check += 1;

}

END{
  printf " }\n";
  printf "]";


}
' > "$1".out
