#!/bin/bash

if [ "$#" -ne 2 ]; then
  echo "Wrong number of arguments"
  exit
fi

for (( i=1; i<="$2"; i++ )) do 
  xlsx2csv "$1" -s "$i" > sheet"$i".csv
done

for (( i=1; i<="$2"; i++ )) do 
  ./skriptik2.awk sheet"$i" "$i"
done
