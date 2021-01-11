# ------------------------------------------------------------------------------
# posts_import_create.sh
# bash shell script to mass upload posts to motion
# Prerequisites:
# 1. you need to put your valid token into the file token.txt
# 2. It uses as input posts a file with text lines (proverbs_for_posts.txt)
# 3. It randomly assigns a user from user_id=A to user_id=B (change accordingly)
# Output:
#   File posts_import.sh that you have to run in your shell
# Created by: Salomon 26.12.2020
# Modified by:
# ------------------------------------------------------------------------------
URL="http://127.0.0.1:8000/backend/api/social/posts/"
token="$(cat token.txt)"
input=proverbs_for_posts.txt
A=3 # highest user id
B=1 # lowest user id
# ------------------------------------------------------------------------------
hdr="--header"
auth="Authorization: Bearer"
ctype="Content-Type: application/json"
draw="--data-raw "
DIFF=$(($A-$B+1))
# ------------------------------------------------------------------------------
while IFS= read -r line
do
  user_id=$(($(($RANDOM%$DIFF))+$B))
  command="curl --location -m 10 -v --request POST $URL $hdr '$auth $token' $hdr '$ctype' $draw \
'{ \"user\": $user_id, \"content\": \"$line\"}'"
  echo "$command" >>posts_import.sh
done < "$input"
# ------------------------------------------------------------------------------