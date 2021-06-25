#!/bin/bash

###
# Functions

f_copy_file () {
    local SRC=$1 DES=$2

    echo "Copy $SRC --> $DES"
    cp $SRC $DES
}


d_copy_directory () {
    local SRC=$1 DES=$2

    echo "Copy $SRC/* --> $DES"
    cp -r $SRC/* $DES
}


handle_copy () {
    local MODE=$1 SRC=$2 DES=$3

    case $MODE in
        f)
            f_copy_file $SRC $DES
            ;;
        d)
            d_copy_directory $SRC $DES
            ;;
    esac
}


###
# Set cor. file ($input_file)

while getopts f: FLAG
do
    case "${FLAG}" in
        f) ARG_F=${OPTARG};;
    esac
done

if [ -z "$ARG_F" ]
then
    INPUT_FILE="./correspondences.txt"
else
    INPUT_FILE=$ARG_F
fi


###
# Read file

FILE_CONTENT=$(cat $INPUT_FILE)
CLEANED_CONTENT=$(
    echo "$FILE_CONTENT" | 
    sed "s/#.*$//g;/^ *$/d;s/:/\n/g" - 
)

while read -r MODE
do
    read -r SRC
    read -r DES
    handle_copy $MODE $SRC $DES
done <<< "$CLEANED_CONTENT"
