# U3.W7: Modeling a Real-World Database (SOLO CHALLENGE)

## Release 0: Users Fields
Twitter stores the following fields for each user:
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

## Release 1: Tweet Fields
For an individual tweet, the following fields are used:
- Name of user who tweeted
- Twitter hand of user who tweeted
- Time of tweet
- Date of tweet
- If applicable, all tweets the tweet was in response to or mentions of the specific tweet by other users
- Users who have favorited the tweet
- Number of users who faorited the tweet 

## Release 2: Explain the relationship
The relationship between `users` and `tweets` is both one-to-many and many-to-many (dependent on one's definition of users). In a general sense, the relationship is one to many in that one user generates one or more tweets. Tweets can only come from one unique user, so the relationship in this sense is one to one.

However, an infinite number of users could reply to one tweet or a series of tweets. Indeed, twitter ""conversations" could comprise an infinite number of users and an infinite number of tweets )one conversation to many usersto many tweets).

## Release 3: Schema Design
<!-- Include your image (inline) of your schema -->

## Release 4: SQL Statements
<!-- Include your SQL Statements. How can you make markdown files show blocks of code? -->

## Release 5: Reflection
<!-- Be sure to add your reflection here!!! -->