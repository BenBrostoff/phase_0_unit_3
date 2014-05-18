# U3.W7: Modeling a Real-World Database (SOLO CHALLENGE)

## Release 0: Users Fields
Twitter stores the following fields for each `user`:
- Tweets (a list of your tweets)
- Following (a list of users you follow)
- Followers (a list of users following you)
- Favorites (tweets you, the user, have favorited)
- Lists (lists of users you compile)
- Photos and videos (taken from your tweets)
- Who to follow (seems to be algorithm based recommendation generating user field based on who you follow and your tweets)
- Direct messages
- Name
- Twitter handle 
- Avatar
- Date/time user was created (not shown but presumably in database)
- Date/time user was modified (above)
- If applicable, date/time user was destroyed 

## Release 1: Tweet Fields
For an individual `tweet`, the following fields are used:
- Name of user who tweeted
- Twitter handle of user who tweeted
- Time of tweet (see below)
- Date of tweet (see below)
- If applicable, all tweets the tweet was in response to or mentions of the specific tweet by other users
- Users who have favorited the tweet
- Number of users who favorited the tweet (lumped in with above)
- Date/time tweet was created (not shown but presumably in database)
- Date/time tweet was modified (same as above)
- If applicable, date/time tweet was deleted (same as above)

## Release 2: Explain the relationship
The relationship between `users` and `tweets` is both one-to-many and many-to-many (dependent on one's definition of users). In a general sense, the relationship is one to many in that one user generates one or more tweets. Tweets can only come from one unique user, so the relationship in this sense is one to one.

However, an infinite number of users could reply to one tweet or a series of tweets. Indeed, twitter ""conversations" could comprise an infinite number of users and an infinite number of tweets )one conversation to many usersto many tweets).

## Release 3: Schema Design
<!-- Include your image (inline) of your schema -->
![](/Users/benbrostoff/Desktop/Dev BootCamp/phase_0_unit_3/week_7/imgs/twitter_schema_design.jpg)


## Release 4: SQL Statements
<!-- Include your SQL Statements. How can you make markdown files show blocks of code? -->
At a high level and assuming the following schemas existed in SQL, the below would return all tweets for a certain user ID. Let's assume my twitter_handle was @bmb21 (it actually is) and my twitter_id was 123456:

1. `SELECT tweets`
2. `FROM twitter_users`
3. `WHERE id = 123456`

The code block below produces all tweets for a certain user id that were made after last Wednesday:

1. `SELECT tweets`
2. `FROM twitter_users`
3. `WHERE (id = 123456) AND (created_at > 2014-05-14 12:00:00 -0400)`

In addition, the code block below produces all tweets associated with a given user's twitter handle.

1. `SELECT tweets`
2. `FROM twitter_users`
3. `WHERE twitter_handle = '@bmb21'`

Finally, the code block below produces the twitter handle associated with a given tweet id (for example purposes, 456789). Note that since we have two tables here, it's necessary to use the `JOIN` command.


1. `SELECT twitter_handle`
2. `FROM twitter_user JOIN user_tweets ON (id = user_id)`
3. `WHERE user_tweets.id AS user_tweet_id = 456789`

**One potential issue with the code block above is that the field `id` applies to both tables: twitter_user and user_tweets. A workaround to this problem is discussed in [this blogpost](http://snook.ca/archives/sql/selecting_datab), which I have attempted to utilize here. 




## Release 5: Reflection
<!-- Be sure to add your reflection here!!! -->
This exercise was useful in that it caused me to reflect on the massive amount of complexity inherent in a social networking website like Twitter. While there's a tendency among pundits to dismiss social networking websites, they may (albeit in some cases inadvertently) provide useful case studies in database management and database querying. 

One issue I encountered in working through this exercise is cases in SQL where two tables have the same field name (ex. id). I found a useful blogpost discussing treatment of the problem, which is linked above.  

