#!/bin/bash

# Get servers list
set -f
string=$PROD_DEPLOY_SERVER
array=(${string//,/})

# Iterate servers for deploy and pull last commit
for i in "${!array[@]}"; do
    echo "Deploy project on server${array[i]}"
    ssh ec2-user@${array[i]} "forever stopall && cd cicd && git pull origin master && forever start app.js"
done