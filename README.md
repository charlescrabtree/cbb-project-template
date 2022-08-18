# Community Bulletin Board

## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Project Starter Setup

### Overview

[Here](https://whimsical.com/page-wireframes-QKB9N3bD8HbmJDt12t5AHE) is an overview of the app and features that will be added this week.

### Setup Steps

1. GitHub repo
    1. Copy the template repository
    1. Setup Netlify
    1. Clone local
    1. Make dev branch, make sure to push this branch to github
    1. You will create a feature branch off dev for the days work
    1. Work in VS Code as usual
1. Supabase
    1. Make new project (copy password for using tools like beekeeper)
    1. From "auth>settings>email", turn off email confirmations and save
    1. From "sql editor", new script and run starter schema `db/schema.sql`
    1. From "sql editor", new script and run starter category data `db/categories.sql`
    1. From "settings > api", copy URL and Key into `fetch-utils.js`

### My set up steps

Steps:

1. create post folder with index.html and post.js

2. design out index.html

3. make post.js functional and "dynamic"

4. create and export new function from fetch-utils.js (displayPost) make sure it does the same as getPosts
but limited to one id (use.match or .eq). Also export one row .single()

5. use const user = checkAuth(); to authenticate user

6. create delete button based on user_id aka auth.uid() = user_id

7. create and export new function from fetch-utils.js that deletes a post (by post id)

8. import and use on delete button click, then navigate back to home page ../
