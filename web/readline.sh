#!/bin/bash
while read line
do
    name=$line
    echo "Text read from file - $name"
done < $1
