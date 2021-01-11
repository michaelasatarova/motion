# ------------------------------------------------------------------------------
# users_import_create.sh
# bash shell script to mass upload users to motion
# Prerequisites:
# 1. you need to put your valid token into the file token.txt
# 2. It uses as input users a file with text lines (users.txt)
# Output:
#   File users_import.sh that you have to run in your shell
# Created by: Salomon 26.12.2020
# Modified by:
# ------------------------------------------------------------------------------
URL="http://127.0.0.1:8000/backend/api/users/"
token="$(cat token.txt)"
input=users.txt
# ------------------------------------------------------------------------------
hdr="--header"
auth="Authorization: Bearer"
ctype="Content-Type: application/json"
draw="--data-raw "
# ------------------------------------------------------------------------------
while IFS= read -r line
do
  command="curl --location -m 10 -v --request POST $URL $hdr '$auth $token' $hdr '$ctype' $draw \
'$line'"
  echo "$command" >>users_import.sh
done < "$input"
# ------------------------------------------------------------------------------