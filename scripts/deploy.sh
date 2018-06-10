#!/bin/bash

# Hello, welcome to a bash script.

# This bash script deploys your application.

# On the terminal you run individual
# bash commands, and this file strings a bunch of commands together.

# The first line of this file, or the `hashbang`, tells the system to
# execute the text of this file as a bash program.

# We want this entire script to exit if any single line fails.
# So we set the `-e` flag.
set -e

# checks out a new branch called "deploy". Note that the name "deploy" here isn't magical,
# but it needs to match the name of the branch we specify when we push to our heroku remote.
git checkout -b deploy

# webpack will run in "production mode"
node_modules/.bin/webpack -p

# "force" add the otherwise gitignored build files
git add -f public/bundle.js public/bundle.js.map

# create a commit, even if nothing changed
git commit --allow-empty -m 'Deploying'

# push your local "deploy" branch to the "master" branch on heroku
git push --force heroku deploy:master
