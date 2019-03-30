#!/bin/bash

#expects .csv file

if [ "$#" -ne 3 ]; then
  echo "Wrong number of arguments"
  exit;
fi

cat "$1".csv | awk -v NUM="$2" -v ID="$3" '
BEGIN{

  FS=","
  RS="\n"

  check=0;

  
}

{

  if( check != 0 ){
  

    if( $8 == "---" || $8 == " " )
      $8 = "";

    if( $9 == "---" || $9 == " " )
      $9 = "";

    if( $7 == "---" || $7 == " " )
      $7 = "";

    if( $3 == "---" || $3 == " " )
      $3 = "";


    printf "insert into transcation (id, currency, category, description, user_id, date, location, type, amount)\n";
    printf "values (%d, '\''eur'\'', '\''%s'\'', '\''%s'\'', %d, '\''%s'\'', '\''%s'\'', '\''%s'\'', %d);\n", ID, $8, $9, NUM, $3, $7, "expense",$5;
    ID+=1;
   
  }
  check += 1;

}

END{


}
' > "$1".out
